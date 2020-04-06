const suitPos = getSuitPos();
const suits = 'spade heart club diamond'.split(' ');
const colors = '#333 #c22'.split(' ');
const values = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ');

for (let i = 0; i < 54; i++) {
  createCard(i);
}

function createCard (index) {
  const suit = suits[index / 13 | 0];
  const value = index < 52 ? values[index % 13] : 'J O K E R';
  const color = colors[(index / 13 | 0) % 2];
  const $card = document.createElement('card');
  const $topleft = document.createElement('card-topleft');
  const $bottomright = document.createElement('card-bottomright');
  const $middle = document.createElement('card-middle');
  const $back = document.createElement('card-back');

  $card.appendChild($middle);
  $card.appendChild($back);

  $back.style.opacity = 0;
  $card.style.color = color;

  [$topleft, $bottomright].forEach($parent => {
    const $value = document.createElement('card-value');
    $value.innerHTML = value.replace(/ /g, '<br>');
    $parent.classList.add('card-corner');
    $parent.appendChild($value);

    if (index < 52) {
      const $suit = document.createElement('card-suit');
      $suit.innerHTML = `<img src="fa/${suit}.svg">`;
      $parent.appendChild($suit);
    }

    $card.appendChild($parent);
  });

  if (index % 13 > 9) {
    const v = value.toLowerCase()[0];
    const s = suit.toLowerCase()[0];
    $card.style.backgroundImage = `url(graphics/${v}${s}.svg)`;
  }

  if (index > 51) {
    if (index === 53) {
      $card.style.color = colors[1];
    }
    $card.classList.add('joker');
    $card.style.backgroundImage = 'url(graphics/joker.svg)';
  }

  index < 52 && suitPos[index % 13] && suitPos[index % 13].forEach(pos => {
    const $suit = document.createElement('card-suit');
    const [x, y, rotate] = pos;

    $suit.innerHTML = `<img src="fa/${suit}.svg">`;

    $suit.style.top = `${50 + y * 50}%`;
    $suit.style.left = `${50 + x * 50}%`;

    if (index % 13 === 0) {
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

function getSuitPos () {
  return [
    [
      [0, 0]
    ],
    [
      [0, -1],
      [0, 1, true]
    ],
    [
      [0, -1],
      [0, 0],
      [0, 1, true]
    ],
    [
      [-1, -1], [1, -1],
      [-1, 1, true], [1, 1, true]
    ],
    [
      [-1, -1], [1, -1],
      [0, 0],
      [-1, 1, true], [1, 1, true]
    ],
    [
      [-1, -1], [1, -1],
      [-1, 0], [1, 0],
      [-1, 1, true], [1, 1, true]
    ],
    [
      [-1, -1], [1, -1],
      [0, -0.5],
      [-1, 0], [1, 0],
      [-1, 1, true], [1, 1, true]
    ],
    [
      [-1, -1], [1, -1],
      [0, -0.5],
      [-1, 0], [1, 0],
      [0, 0.5, true],
      [-1, 1, true], [1, 1, true]
    ],
    [
      [-1, -1], [1, -1],
      [-1, -1 / 3], [1, -1 / 3],
      [0, 0],
      [-1, 1 / 3, true], [1, 1 / 3, true],
      [-1, 1, true], [1, 1, true]
    ],
    [
      [-1, -1], [1, -1],
      [0, -2 / 3],
      [-1, -1 / 3], [1, -1 / 3],
      [-1, 1 / 3, true], [1, 1 / 3, true],
      [0, 2 / 3, true],
      [-1, 1, true], [1, 1, true]
    ]
  ];
}
