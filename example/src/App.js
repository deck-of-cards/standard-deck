import { Fragment } from 'react';
import { Ace } from 'standard-deck-react';
import { Two } from 'standard-deck-react';
import { Three } from 'standard-deck-react';
import { Four } from 'standard-deck-react';
import { Five } from 'standard-deck-react';
import { Six } from 'standard-deck-react';
import { Seven } from 'standard-deck-react';
import { Eight } from 'standard-deck-react';
import { Nine } from 'standard-deck-react';
import { Ten } from 'standard-deck-react';
import { Jack } from 'standard-deck-react';
import { Queen } from 'standard-deck-react';
import { King } from 'standard-deck-react';
import { Back } from 'standard-deck-react';
import { Joker } from 'standard-deck-react';

import './style.css';
import { ASuit } from 'standard-deck-react';
import { getCard } from 'standard-deck-react';

function App() {
  return (
    <Fragment>
      <Ace suit="club" />
      <Two suit="spade" />
      <Three suit="heart" />
      <Four suit="spade" />
      <Five suit="heart" />
      <Six suit="heart" />
      <Seven suit="spade" />
      <Eight suit="club" />
      <Nine suit="spade" />
      <Ten suit="spade" />
      <Jack suit="heart" />
      <Queen suit="club" />
      <King suit="spade" />
      <Back />
      <Joker />
      <ASuit suit="spade" />
      {getCard("ah")}
    </Fragment>
  );
}

export default App;
