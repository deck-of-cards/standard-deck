import { StandardCard } from './view.js';

const front = new Array(54);

for (let i = 0; i < front.length; i++) {
  front[i] = `img/front-${i}.png`;
}

export const standardDeck = {
  width: 102,
  height: 144,
  back: 'img/back.png',
  front,
  View: StandardCard
};
