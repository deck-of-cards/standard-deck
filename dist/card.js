export const card = {
  type: 'Card',
  style: 'standard',
  add (card) {
    card.width = 100;
    card.height = 140;
  },
  render (card) {
    const { i, side, el } = card;

    if (side === 'front') {
      el.style.backgroundImage = `url(standard-deck/front-${i}.png)`;
    } else {
      el.style.backgroundImage = 'url(standard-deck/back.png)';
    }

    return card;
  }
}
;
