import React from 'react';
import styles from './assets/css/styles.css';
import * as Constants from './Constants.jsx';
import { BaseCard } from './BaseCard.jsx';

export const Three = ({ suit }) => {

    const suitImagePath = Constants.suitImagePaths[suit];

    return (
        <BaseCard suit={suit} value={"3"} style={Constants.color333}>
          <div className={styles['card-suit']} style={Constants.FMTMFMFR0}>
            <img src={suitImagePath} />
          </div>
          <div className={styles['card-suit']} style={Constants.FF3MFMFR0}>
            <img src={suitImagePath} />
          </div>
          <div className={styles['card-suit']} style={Constants.FHTMFMFR180}>
            <img src={suitImagePath} />
          </div>
        </BaseCard>
    )
}

