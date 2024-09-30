import React, {useState} from 'react';
import axios from 'axios';
import classes from "./panel_entry.module.css";

const PanelEntry = ({onLoginSuccess, onBack}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {username, password});
            console.log(response.data);
            if (response.data.user) {
                onLoginSuccess(response.data.user); // Передаем информацию о пользователе при успешном входе
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <aside className={classes.container}>
            <input
                className={classes.userName}
                placeholder={'Введите ваш логин'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className={classes.userPassword}
                placeholder={'Введите ваш пароль'}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <span>
            <button className={classes.registration_button} onClick={handleSubmit}>
                Войти
            </button>
            <button className={classes.back_button} onClick={onBack}>
                Вернуться
            </button>
                </span>
        </aside>
    );
};

export default PanelEntry;
