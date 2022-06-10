const pptr = require('puppeteer');

async function categoryScraper(url) {
  const browser = await pptr.launch({});
  const page = await browser.newPage();

  await page.goto(url);

  const categories = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        '.card.card_xs.card_link.card_outer.travel-ideas--i'
      ),
      (category) => ({
        link: category.href,
        title: category.innerText,
        image:
          category.querySelector('img').attributes['data-srcset'].value || null,
      })
    )
  );

  browser.close();

  return categories;
}

module.exports = { categoryScraper };
