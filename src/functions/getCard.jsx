import React from 'react';

import { Ace } from '../components/Ace.jsx';


export function getCard(cardString) {
    cardString = cardString.toLowerCase();

    if (cardString.length < 2 || cardString.length > 3) return undefined;
    let value, suit;

    if (cardString.length == 2) {
        value = cardString[0];
        suit = cardString[1];
    }
    else {
        value = cardString[0];
        value += cardString[1];
        suit = cardString[2];
    }

    if (validValueAndSuit(value, suit)) {
        switch (suit) {
            case 'h':
                suit = "heart";
                break;
            case 'c':
                suit = "club";
                break;
            case 's':
                suit = "spade";
                break;
            case 'd':
                suit = "diamond";
                break;
        }
        console.log("both valid!");
        switch (value) {
            case 1, 'a':
                return <Ace suit={suit} />
                break;
        }
    }
}

function validValueAndSuit(value, suit) {
    if (/^\d{1,2}$/g.test(value)) {
        value = Number(value);
        switch (value) {
            case 1:
                value = "a";
                break;
            case 11:
                value = "j";
                break;
            case 12:
                value = "q";
                break;
            case 13:
                value = "k";
                break;
        }
        if (value > 13 || value < 1) return false;
    }

    if (suit != "c" && suit != "h" && suit != "s" && suit != "d") return false;

    return true;
}