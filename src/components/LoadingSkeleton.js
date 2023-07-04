import React from 'react';
import styles from './LoadingSkeleton.module.css';

const LoadingPlaceholder = () => {
  return (
    <>
      <div className={styles['comment-loader']}>
        <div className={styles['avatar-loader']}></div>
        <div className={styles['text-loader']}></div>
      </div>
      <div className={styles['comment-loader']}>
        <div className={styles['avatar-loader']}></div>
        <div className={styles['text-loader']}></div>
      </div>
      <div className={styles['comment-loader']}>
        <div className={styles['avatar-loader']}></div>
        <div className={styles['text-loader']}></div>
      </div>
      <div className={styles['comment-loader']}>
        <div className={styles['avatar-loader']}></div>
        <div className={styles['text-loader']}></div>
      </div>
    </>
  );
};

export default LoadingPlaceholder;
