import React from 'react';
import styles from './assets/css/styles.css';

import * as Constants from './Constants.jsx';
import { BaseCard } from './BaseCard.jsx';

export const Ace = ({ suit }) => {

    const suitImagePath = Constants.suitImagePaths[suit];

    return (
        <BaseCard suit={suit} value={"A"} style={Constants.color333}>
            <div className={styles['card-suit']} style={Constants.FF3MFMFR0}>
                <img src={suitImagePath} />
            </div>
        </BaseCard>
    )
}