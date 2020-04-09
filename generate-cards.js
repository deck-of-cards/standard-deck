const fs = require('fs');
const pug = require('pug');
const suitpos = require('./src/suitpos.js');

const suits = 'spade heart club diamond'.split(' ');
const colors = 'black red'.split(' ');
const ranks = 'a 2 3 4 5 6 7 8 9 10 j q k'.split(' ').concat('joker');
const printedRanks = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ').concat('J\nO\nK\nE\nR');

const hexColors = {
  red: '#c22',
  black: '#333'
};

const cards = new Array(54);

for (let i = 0; i < cards.length; i++) {
  const suit = i < 52 ? suits[i / 13 | 0] : 'joker';
  const color = i < 52 ? colors[(i / 13 | 0) % 2] : colors[i % 2];
  const hexColor = hexColors[color];
  const value = i < 52 ? i % 13 + 1 : null;
  const rank = i < 52 ? ranks[i % 13] : ranks[13];
  const printedRank = i < 52 ? printedRanks[i % 13] : printedRanks[13];

  const card = {
    i,
    suit,
    suitpos: suitpos[value - 1] || [],
    value,
    color,
    hexColor,
    rank,
    printedRank
  };

  cards[i] = card;
}

const html = pug.renderFile('src/cards.pug', { cards });

fs.writeFileSync('./src/cards.html', html);
console.log('written src/cards.html');
