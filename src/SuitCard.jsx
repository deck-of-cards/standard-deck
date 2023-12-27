import React from 'react';
import styles from './assets/css/styles.css';
import * as Constants from './Constants.jsx';

export const SuitCard = ({ suit, value, style, suitCardStyle }) => {

    const suitImagePath = Constants.suitImagePaths[suit];

    return (
        <div className={`${styles.card}`} style={style}>
        <div className={styles['card-royal']} style={suitCardStyle}></div>
            <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
                <div className={styles['card-rank']}>{value}</div>
                <div className={styles['card-suit']}>
                    <img src={suitImagePath} />
                </div>
            </div>
            <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
                <div className={styles['card-rank']}>{value}</div>
                <div className={styles['card-suit']}>
                    <img src={suitImagePath} />
                </div>
            </div>
        </div>
    )
}