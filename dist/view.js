export class StandardCard {
  constructor ({ game }) {
    this.game = game;
    this.el = document.createElement('img');
    this.el.draggable = false;
    this.el.style.touchAction = 'none';
    this.el.style.position = 'absolute';
  }

  update (card) {
    const { game } = this;
    const { i, side, graphics, width, height } = card;
    const { front, back } = graphics;
    const { x, y } = game.getPos(card, true);

    this.card = card;

    const src = side === 'back' ? back : front[i];
    const transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;

    if (src !== this.src) {
      this.el.src = src;
      this.src = src;
    }

    if (width !== this.width || height !== this.height) {
      this.el.width = width;
      this.el.height = height;
      this.el.style.marginLeft = -width / 2 + 'px';
      this.el.style.marginTop = -height / 2 + 'px';
      this.width = this.width;
      this.height = this.height;
    }

    if (transform !== this.transform) {
      this.el.style.transform = transform;
      this.transform = transform;
    }
  }
}
