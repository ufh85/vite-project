import React from 'react';
import PostIt from './PostIt';
import styles from './styles/Notes.module.css';

function PostItCalendar() {
    return (
        <>
            <div className={styles.week}>
                <div className={styles.weekDayContainer}>
                    <h4 className={styles.weekDayHeader}>Monday</h4>
                    <div className={styles.weekDay}>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                    </div>
                </div>
                <div className={styles.weekDayContainer}>
                    <h4 className={styles.weekDayHeader}>Monday</h4>
                    <div className={styles.weekDay}>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                    </div>
                </div>
                <div className={styles.weekDayContainer}>
                    <h4 className={styles.weekDayHeader}>Monday</h4>
                    <div className={styles.weekDay}>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                        <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostItCalendar;
