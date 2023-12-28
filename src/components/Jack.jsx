import React from 'react';
import { SuitCard } from './SuitCard.jsx';
import * as Constants from './Constants.jsx';

export const Jack = ({ suit }) => {

    const jackImagePaths = {
        club: require('./assets/graphics/jc.svg').default,
        heart: require('./assets/graphics/jh.svg').default,
        spade: require('./assets/graphics/js.svg').default,
        diamond: require('./assets/graphics/jd.svg').default,
    };

    const jackImagePath = jackImagePaths[suit];
    
    const jackStyle = {
        backgroundImage: `url(${jackImagePath})`,
    };

    return (
        <SuitCard suit={suit} value={"J"} style={Constants.color333} suitCardStyle={jackStyle}>
        </SuitCard>
    )
}
