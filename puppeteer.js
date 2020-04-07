const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/src/cards.html`);

  await page.setViewport({
    width: 104,
    height: 144,
    deviceScaleFactor: 4
  });

  const cardsCount = await page.evaluate(() => {
    document.body.style.background = 'transparent';

    const cards = document.querySelectorAll('card');

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      card.style.opacity = 0;
      card.style.margin = 0;
      card.style.position = 'absolute';
      card.style.top = '2px';
      card.style.left = '2px';
    }

    return cards.length;
  });

  await page.evaluate(() => {
    const cards = document.querySelectorAll('card');
    const card = cards[0];

    card.style.opacity = '';

    card.querySelector('card-topleft').style.opacity = 0;
    card.querySelector('card-bottomright').style.opacity = 0;
    card.querySelector('card-middle').style.opacity = 0;
    card.querySelector('card-back').style.opacity = '';
  });

  await page.screenshot({ path: 'dist/back.png', omitBackground: true });
  console.log('Rendered dist/back.png');

  await page.evaluate(() => {
    const cards = document.querySelectorAll('card');
    const card = cards[0];

    card.style.opacity = 0;

    card.querySelector('card-topleft').style.opacity = '';
    card.querySelector('card-bottomright').style.opacity = '';
    card.querySelector('card-middle').style.opacity = '';
    card.querySelector('card-back').style.opacity = 0;
  });

  for (let i = 0; i < cardsCount; i++) {
    await page.evaluate((i) => {
      const cards = document.querySelectorAll('card');
      const card = cards[i];

      card.style.opacity = '';
    }, i);
    await page.screenshot({ path: `dist/front-${i}.png`, omitBackground: true });
    console.log(`rendered dist/front-${i}.png`);
    await page.evaluate((i) => {
      const cards = document.querySelectorAll('card');
      const card = cards[i];

      card.style.opacity = 0;
    }, i);
  }

  await browser.close();
})();
