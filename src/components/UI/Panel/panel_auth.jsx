import React, { useState } from 'react';
import classes from './panel_auth.module.css';
import BoardInput from "../Board/board_input.jsx";
import BoardNull from "../Board/board_null.jsx";
import BoardPost from "../Board/board_post.jsx";
import PopPostPanel from "./panel_popPost.jsx";


const AuthPanel = ({ user, onLogout }) => {
    const [posts, setPosts] = useState([]);

    const handlePostSubmit = (postText) => {
        const newPost = {
            id: posts.length + 1,
            userName: user.username,
            postText
        };
        setPosts([newPost, ...posts]);
    };

    return (
        <aside className={classes.container}>
            <div className={classes.container_user}>
            <img src={user.photo} alt={'Вы не выбрали аватар'} className={classes.avatar} />
            <h1 className={classes.auth__userName}>
                <div className={classes.auth__text}>{user.username}</div>
            </h1>
            <button className={classes.auth__button} onClick={onLogout}>
                Выйти из аккаунта
            </button>
        </div>
            <div className={classes.container__post}>
                <BoardInput onPostSubmit={handlePostSubmit} />
                {posts.length === 0 ? (
                    <BoardNull />
                ) : (
                    posts.map(post => (
                        <BoardPost
                            key={post.id}
                            userName={post.userName}
                            postText={post.postText}
                            user={user}
                        />
                    ))
                )}
            </div>
            <PopPostPanel/>
        </aside>
    );
};

export default AuthPanel;
