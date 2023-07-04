import React from 'react';
import ImagePlaceholder from './ImageLoader';
import styles from './ImageLoader.module.css';

const GalleryLoader = () => {
    return (
        <div className={styles['container']}>
            {Array.from({ length: 8 }).map((_, index) => (
                <ImagePlaceholder key={index} />
            ))}
        </div>
    );
}


export default GalleryLoader;
