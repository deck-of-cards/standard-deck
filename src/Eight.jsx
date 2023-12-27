import React from 'react';
import styles from './assets/css/styles.css';
import * as Constants from './Constants.jsx';
import { BaseCard } from './BaseCard.jsx';

export const Eight = ({ suit }) => {

    const suitImagePath = Constants.suitImagePaths[suit];

    return (
        <BaseCard suit={suit} value={"8"} style={Constants.color333}>
            <div className={styles['card-suit']} style={Constants.ZMTMFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.HMTMFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.F23MFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.ZF3MFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.HF3MFMFR0}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.FEMFMFR180}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.ZHTMFMFR180}>
                <img src={suitImagePath} />
            </div>
            <div className={styles['card-suit']} style={Constants.HHTMFMFR180}>
                <img src={suitImagePath} />
            </div>
        </BaseCard>
    )
}