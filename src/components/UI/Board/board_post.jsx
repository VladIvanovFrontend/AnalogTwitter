import React, { useState } from 'react';
import classes from './board.module.css';

const BoardPost = ({ user, userName, postText }) => {
    const [likes, setLikes] = useState(0);

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    return (
        <article className={classes.article__post}>
            <img
                src={user.photo}
                alt="avatar"
                className={classes.avatar__input}
            />
            <h1 className={classes.post__userName}>
                <div className={classes.post__text}>{userName}</div>
            </h1>
            <textarea className={classes.post} readOnly value={postText}/>
            <div className={classes.like__post}>
                <button className={classes.button__like} onClick={handleLikeClick}>
                    <img className={classes.img_like} alt="like" src="/like_post.png"/>
                </button>
                <h3>{likes} лайков</h3>
            </div>
        </article>
    );
};

export default BoardPost;
