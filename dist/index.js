export const standardDeck = {
  style: 'standard',
  width: 100,
  height: 140,
  side: 'front',
  createEl () {
    const el = document.createElement('div');

    el.style.position = 'absolute';
    el.style.backgroundColor = '#fff';
    el.style.backgroundPosition = '50% 50%';
    el.style.backgroundSize = 'contain';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.borderRadius = `${6 / 1}% ${6 / 1.4}%`;
    el.style.overflow = 'hidden';
    el.style.willChange = 'transform';

    return el;
  },
  render () {
    const { i, width, height, side, absolutePosition, _moving } = this;
    const { x, y } = absolutePosition;

    this.el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    this.el.style.width = width + 'px';
    this.el.style.height = height + 'px';
    this.el.style.marginLeft = -width / 2 + 'px';
    this.el.style.marginTop = -height / 2 + 'px';
    if (side === 'front') {
      this.el.style.backgroundImage = `url(standard-deck/front-${i}.png)`;
    } else {
      this.el.style.backgroundImage = 'url(standard-deck/back.png)';
    }
    if (_moving) {
      this.el.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.25)';
    } else {
      this.el.style.boxShadow = '0px 1px 1px rgba(0, 0, 0, 0.05)';
    }
  }
};
