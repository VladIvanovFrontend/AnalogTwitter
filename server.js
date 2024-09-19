import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname, 'users.json');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', upload.single('photo'), (req, res) => {
    const { username, password } = req.body;
    const photo = req.file ? req.file.path : null;

    if (!username || !password) {
        return res.status(400).json({ message: 'Пожалуйста, заполните все обязательные поля.' });
    }

    fs.readFile(usersFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Ошибка при чтении файла пользователей.' });
        }

        const users = JSON.parse(data);
        const newUser = { username, password, photo };

        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(409).json({ message: 'Пользователь с таким именем уже существует.' });
        }

        users.push(newUser);
        fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Ошибка при записи файла пользователей.' });
            }
            res.json({ message: 'Регистрация успешна!' });
        });
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(usersFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Ошибка при чтении данных пользователей.' });
        }

        const users = JSON.parse(data);
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            return res.json({ success: true, user });
        } else {
            return res.status(401).json({ success: false, message: 'Неправильный логин или пароль.' });
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
