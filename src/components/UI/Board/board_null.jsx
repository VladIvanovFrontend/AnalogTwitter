import React from 'react';
import classes from './board.module.css'

const BoardNull = () => {
    return (
        <article className={classes.article__null}>
            <div className={classes.container}>
                <h2>
                    Постов нет, будьте первыми!
                </h2>
            </div>
        </article>
    );
};

export default BoardNull;