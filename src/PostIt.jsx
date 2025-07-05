import React from 'react'
import styles from './styles/Notes.module.css';

function PostIt({text, header}) {
    return (
        <div className={styles.PostItNote}>
            <h4 className={styles.Header}>{header}</h4>
            <p className={styles.Text}>{text}</p>
        </div>
    );
}

export default PostIt;