import React from 'react';
import { SuitCard } from './SuitCard.jsx';
import * as Constants from './Constants.jsx';

export const King = ({ suit }) => {

    const kingImagePaths = {
        club: require('./assets/graphics/kc.svg').default,
        heart: require('./assets/graphics/kh.svg').default,
        spade: require('./assets/graphics/ks.svg').default,
        diamond: require('./assets/graphics/kd.svg').default,
    };

    const kingImagePath = kingImagePaths[suit];
    const kingStyle = {
        backgroundImage: `url(${kingImagePath})`,
    };
    return (
        <SuitCard suit={suit} value={"K"} style={Constants.color333} suitCardStyle={kingStyle}>
        </SuitCard>
    )
}
