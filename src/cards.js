/* global getSuitPos */
const suitPos = getSuitPos(); // suitpos.js
const suits = 'spade heart club diamond'.split(' ');
const colors = 'black red'.split(' ');
const ranks = 'a 2 3 4 5 6 7 8 9 10 j q k'.split(' ').concat('joker');
const printedRanks = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ').concat('J O K E R');

const hexColors = {
  red: '#c22',
  black: '#333'
};

const cards = new Array(54);

for (let i = 0; i < cards.length; i++) {
  const suit = getSuit(i);
  const color = i < 52 ? colors[(i / 13 | 0) % 2] : colors[i % 2];
  const hexColor = hexColors[color];
  const value = i % 13;
  const rank = i < 52 ? ranks[i % 13] : ranks[13];
  const printedRank = i < 52 ? printedRanks[i % 13] : printedRanks[13];

  const card = {
    i,
    suit,
    value,
    color,
    hexColor,
    rank,
    printedRank
  };

  cards[i] = card;
}

for (let i = 0; i < cards.length; i++) {
  createCard(cards[i]);
}

function createCard (card) {
  const { i, suit, hexColor, rank, printedRank } = card;

  const $card = document.createElement('card');
  const $topleft = document.createElement('card-topleft');
  const $bottomright = document.createElement('card-bottomright');
  const $middle = document.createElement('card-middle');
  const $back = document.createElement('card-back');

  $card.appendChild($middle);
  $card.appendChild($back);

  $back.style.opacity = 0;
  $card.style.color = hexColor;

  [$topleft, $bottomright].forEach($parent => {
    const $rank = document.createElement('card-rank');
    $rank.innerHTML = printedRank.replace(/ /g, '<br>');
    $parent.classList.add('card-corner');
    $parent.appendChild($rank);

    if (i < 52) {
      const $suit = document.createElement('card-suit');
      $suit.innerHTML = `<img src="../fa/${suit}.svg">`;
      $parent.appendChild($suit);
    }

    $card.appendChild($parent);
  });

  if (i % 13 > 9) {
    const v = rank;
    const s = suit[0];
    $card.style.backgroundImage = `url(../graphics/${v}${s}.svg)`;
  }

  if (i > 51) {
    if (i === 53) {
      $card.style.color = hexColors[1];
    }
    $card.classList.add('joker');
    $card.style.backgroundImage = `url(../graphics/joker${i === 53 ? '' : '2'}.svg)`;
  }

  i < 52 && suitPos[i % 13] && suitPos[i % 13].forEach(pos => {
    const $suit = document.createElement('card-suit');
    const [x, y, rotate] = pos;

    $suit.innerHTML = `<img src="../fa/${suit}.svg">`;

    $suit.style.top = `${50 + y * 50}%`;
    $suit.style.left = `${50 + x * 50}%`;

    if (i % 13 === 0) {
      $suit.classList.add('ace');
      $suit.style.transform = 'translate(-50%, -50%) rotate(15deg)';
    } else if (rotate) {
      $suit.style.transform = 'translate(-50%, -50%) rotate(180deg)';
    } else {
      $suit.style.transform = 'translate(-50%, -50%)';
    }
    $middle.appendChild($suit);
  });

  document.body.appendChild($card);
}

function getSuit (i) {
  if (i < 52) {
    return suits[Math.floor(i / 13)];
  } else {
    return 'joker';
  }
}
