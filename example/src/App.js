import { Fragment } from 'react';
import { Ace } from 'standard-deck-react';
import { Two } from 'standard-deck-react';
import { Three } from 'standard-deck-react';
import { Four } from 'standard-deck-react';
import { Back } from 'standard-deck-react';
import { Joker } from 'standard-deck-react';

import './style.css';
import { ASuit } from 'standard-deck-react';
import { getCard } from 'standard-deck-react';
import { FullDeck } from 'standard-deck-react';

function App() {
  return (
    <Fragment>
      <h3> Some cards</h3>
      <Ace suit="club" />
      <Ace suit="club" />
      <Two suit="heart" />
      <Three suit="spade" />
      <Four suit="diamond" />
      <Back />
      <Joker />
      <h3> A whole suit</h3>
      <ASuit suit="spade" />
      <h3> Other cards obtained via 'getCard()'</h3>
      {getCard("ad")}
      {getCard("2c")}
      {getCard("03d")}
      {getCard("4s")}
      {getCard("05h")}
      {getCard("6s")}
      {getCard("7c")}
      {getCard("08d")}
      {getCard("9h")}
      {getCard("10s")}
      {getCard("jc")}
      {getCard("12s")}
      {getCard("kh")}
      {getCard("ah")}
      <h3> The full deck!</h3>
      <FullDeck />
    </Fragment>
  );
}

export default App;
