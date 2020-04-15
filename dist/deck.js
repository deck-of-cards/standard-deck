export const deck = {
  type: 'Deck',
  style: 'standard',
  createCards (deck, { Card }) {
    const count = 54;

    for (let i = 0; i < count; i++) {
      const card = new Card({
        x: -i / 4,
        y: -i / 4,
        i: count - i - 1
      });

      deck.add(card);
    }
  }
};
