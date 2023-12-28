import React from 'react';
import { Ace } from './Ace.jsx';
import { Two } from './Two.jsx';
import { Three } from './Three.jsx';
import { Four } from './Four.jsx';
import { Five } from './Five.jsx';
import { Six } from './Six.jsx';
import { Seven } from './Seven.jsx';
import { Eight } from './Eight.jsx';
import { Nine } from './Nine.jsx';
import { Ten } from './Ten.jsx';
import { Jack } from './Jack.jsx';
import { Queen } from './Queen.jsx';
import { King } from './King.jsx';

export function ASuit({ suit }) {

    return (
        <>
            <Ace suit={suit} />
            <Two suit={suit} />
            <Three suit={suit} />
            <Four suit={suit} />
            <Five suit={suit} />
            <Six suit={suit} />
            <Seven suit={suit} />
            <Eight suit={suit} />
            <Nine suit={suit} />
            <Ten suit={suit} />
            <Jack suit={suit} />
            <Queen suit={suit} />
            <King suit={suit} />
        </>
    )
}