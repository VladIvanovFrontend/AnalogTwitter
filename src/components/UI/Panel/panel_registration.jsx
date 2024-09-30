import React, { useState } from 'react';
import axios from 'axios';
import classes from './panel_registration.module.css';
import UploadPhotoButton from '../Button/uploadPhoto.jsx';

const PanelRegistration = ({ onBack }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (file) => {
        setPhoto(file);
    };

    const handleSubmit = async () => {
        if (!username || !password) {
            alert('Please fill in all required fields.');
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        if (photo) {
            formData.append('photo', photo);
        }

        try {
            const response = await axios.post('http://localhost:5000/register', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(response.data);

        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <aside className={classes.container}>
            <h4>*-обязательное условие</h4>
            <input
                className={classes.userName}
                placeholder={'Введите ваш логин*'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className={classes.userPassword}
                placeholder={'Введите ваш пароль*'}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <UploadPhotoButton onPhotoChange={handlePhotoChange} />
            <span>
                <button className={classes.registration_button} onClick={handleSubmit}>
                    Зарегистрироваться
                </button>
                <button className={classes.back_button} onClick={onBack}> {/* Кнопка вызывает функцию onBack */}
                    Вернуться
                </button>
            </span>
        </aside>
    );
};

export default PanelRegistration;
