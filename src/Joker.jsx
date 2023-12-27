import React from 'react';
import styles from './assets/css/styles.css';
import * as Constants from './Constants.jsx';

const jokerImagePath =  require('./assets/graphics/joker.svg').default;

export const Joker = () => {

    const jokerStyle = {
        backgroundImage: `url(${jokerImagePath})`,
    };

    return (
        <div className={`${styles.card}`} style={Constants.color333}>
            <div className={styles['card-royal']} style={jokerStyle}></div>
            <div className={styles['card-middle']}>
            </div>
            <div className={`${styles['card-corner']} ${styles['card-topleft']}`}>
                <div className={styles['card-rank']}>J<br />O<br />K<br />E<br />R</div>
            </div>
            <div className={`${styles['card-corner']} ${styles['card-bottomright']}`}>
            <div className={styles['card-rank']}>J<br />O<br />K<br />E<br />R</div>
            </div>
        </div>
    )
}