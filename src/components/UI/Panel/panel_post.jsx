import React from 'react';
import classes from "./panel_post.module.css";
import Board from "../Board/board.jsx";

const PostPanel = () => {
    return (
        <section className={classes.content}>
            <Board/>
        </section>
    );
};

export default PostPanel;