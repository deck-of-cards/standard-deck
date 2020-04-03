const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/cards.html`);

  await page.setViewport({
    width: 80,
    height: 112,
    deviceScaleFactor: 4
  });

  const cardsCount = await page.evaluate(() => {
    const cards = document.querySelectorAll('card');

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      card.style.opacity = 0;
      card.style.position = 'absolute';
    }

    return cards.length;
  });

  for (let i = 0; i < cardsCount; i++) {
    await page.evaluate((i) => {
      const cards = document.querySelectorAll('card');
      const card = cards[i];

      card.style.opacity = '';
    }, i);
    await page.screenshot({ path: `dist/${i}.jpg` });
    console.log(`rendered dist/${i}.jpg`);
  }

  await browser.close();
})();
