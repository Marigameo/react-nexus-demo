import React from 'react';
import styles from './ImageLoader.module.css';

const ImagePlaceholder = () => {
    return (
        <div className={styles['loadingSquare']}></div>
    );
};

export default ImagePlaceholder;
