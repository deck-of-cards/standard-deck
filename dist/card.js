export const card = {
  type: 'Card',
  style: 'standard',
  add (card) {
    card.width = 100;
    card.height = 140;
  },
  render (card) {
    const { x, y, i, side, el, width, height } = card;

    el.style.transform = `translate(${x}px, ${y}px)`;
    el.style.width = width + 'px';
    el.style.height = height + 'px';

    if (side === 'front') {
      el.style.backgroundImage = `url(standard-deck/front-${i}.png)`;
    } else {
      el.style.backgroundImage = 'url(standard-deck/back.png)';
    }

    return card;
  }
}
;
