const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/src/cards.html`);

  await page.setViewport({
    width: 1100,
    height: 700,
    deviceScaleFactor: 4,
  });

  const path = "dist/standard-deck/sprite.png";

  await page.screenshot({ path });
  console.log(`rendered ${path}`);

  await browser.close();
})();
