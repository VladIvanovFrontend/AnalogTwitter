import React, { useState } from 'react';
import classes from './board.module.css';

const BoardInput = ({ onPostSubmit }) => {
    const [postText, setPostText] = useState('');

    const handleInputChange = (e) => {
        setPostText(e.target.value);
    };

    const handlePostSubmit = () => {
        if (postText.trim()) {
            onPostSubmit(postText);
            setPostText('');
        }
    };

    return (
        <article className={classes.article__input}>
            <textarea
                className={classes.post__input}
                placeholder="Введите ваш пост здесь..."
                value={postText}
                onChange={handleInputChange}
            />
            <button
                className={classes.button__input}
                onClick={handlePostSubmit}
            >
                Отправить
            </button>
        </article>
    );
};

export default BoardInput;
