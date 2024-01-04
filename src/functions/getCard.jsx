import React from 'react';

import { Ace } from '../components/Ace.jsx';
import { Two } from '../components/Two.jsx';
import { Three } from '../components/Three.jsx';
import { Four } from '../components/Four.jsx';
import { Five } from '../components/Five.jsx';
import { Six } from '../components/Six.jsx';
import { Seven } from '../components/Seven.jsx';
import { Eight } from '../components/Eight.jsx';
import { Nine } from '../components/Nine.jsx';
import { Ten } from '../components/Ten.jsx';
import { Jack } from '../components/Jack.jsx';
import { Queen } from '../components/Queen.jsx';
import { King } from '../components/King.jsx';
import { generateUUID } from '../functions/getUUID.jsx';

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

    // let's 'normalize' value. Turn it into a number
    if (!/^\d{1,2}$/g.test(value)) {
        switch (value) {
            case 'a':
                value = 1;
                break;
            case 'j':
                value = 11;
                break;
            case 'q':
                value = 12;
                break;
            case 'k':
                value = 13;
                break;
        }
    }
    else value = Number(value);

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

        switch (value) {
            case 1:
                return <Ace key={generateUUID()} suit={suit} />
            case 2:
                return <Two key={generateUUID()} suit={suit} />
            case 3:
                return <Three key={generateUUID()} suit={suit} />
            case 3:
                return <Three key={generateUUID()} suit={suit} />
            case 4:
                return <Four key={generateUUID()} suit={suit} />
            case 5:
                return <Five key={generateUUID()} suit={suit} />
            case 6:
                return <Six key={generateUUID()} suit={suit} />
            case 7:
                return <Seven key={generateUUID()} suit={suit} />
            case 8:
                return <Eight key={generateUUID()} suit={suit} />
            case 9:
                return <Nine key={generateUUID()} suit={suit} />
            case 10:
                return <Ten key={generateUUID()} suit={suit} />
            case 11:
                return <Jack key={generateUUID()} suit={suit} />
            case 12:
                return <Queen key={generateUUID()} suit={suit} />
            case 13:
                return <King key={generateUUID()} suit={suit} />
        }
    }
}

function validValueAndSuit(value, suit) {

    if (value > 13 || value < 1) return false;

    if (suit != "c" && suit != "h" && suit != "s" && suit != "d") return false;

    return true;
}