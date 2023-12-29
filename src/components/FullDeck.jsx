import React from 'react';

const newDeckOrder = require('./assets/data/new.deck.order.json');

import { getCard } from '../functions/getCard.jsx';

export function FullDeck({ order = newDeckOrder }) {

    const cardElements = order.map(card => {
        return getCard(card);
    });

    console.log("cardElements->", cardElements)

    return (
        <>

            {
                cardElements
            }
        </>

    )
}