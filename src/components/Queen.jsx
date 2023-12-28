import React from 'react';
import { SuitCard } from './SuitCard.jsx';
import * as Constants from './Constants.jsx';

export const Queen = ({ suit }) => {

    const queenImagePaths = {
        club: require('./assets/graphics/qc.svg').default,
        heart: require('./assets/graphics/qh.svg').default,
        spade: require('./assets/graphics/qs.svg').default,
        diamond: require('./assets/graphics/qd.svg').default,
    };

    const queenImagePath = queenImagePaths[suit];

    const queenStyle = {
        backgroundImage: `url(${queenImagePath})`,
    };
    return (
        <SuitCard suit={suit} value={"Q"} style={Constants.color333} suitCardStyle={queenStyle}>
        </SuitCard>
    )
}
