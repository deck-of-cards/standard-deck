const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/src/cards.html`);

  await page.setViewport({
    width: 100,
    height: 140,
    deviceScaleFactor: 4
  });

  const cardsCount = await page.evaluate(() => {
    document.body.style.background = 'transparent';

    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      card.style.opacity = 0;
      card.style.margin = 0;
      card.style.position = 'absolute';
      card.style.left = 0;
      card.style.top = 0;
    }

    return cards.length;
  });

  for (let i = 0; i < cardsCount; i++) {
    await page.evaluate((i) => {
      const cards = document.querySelectorAll('.card');
      const card = cards[i];

      card.style.opacity = '';
    }, i);
    const path = i > 0 ? `dist/standard-deck/front-${i - 1}.png` : 'dist/standard-deck/back.png';
    await page.screenshot({ path, omitBackground: true });
    console.log(`rendered ${path}`);
    await page.evaluate((i) => {
      const cards = document.querySelectorAll('.card');
      const card = cards[i];

      card.style.opacity = 0;
    }, i);
  }

  await browser.close();
})();
