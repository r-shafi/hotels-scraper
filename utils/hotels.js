const pptr = require('puppeteer');

async function hotelScraper(url) {
  console.log('STARTED HOTEL SCRAPER');

  const browser = await pptr.launch({});
  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector('.search-i-content', {
    timeout: 0,
  });

  const hotels = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.search-i-content'), (hotel) => ({
      title: hotel.children[1].innerText || null,
      image: hotel.previousElementSibling.querySelector('img').src || null,
      rating: hotel.children[0].innerText || null,
      location: hotel.children[2].innerText || null,
      price: hotel.querySelector('.rateplan--price--value').innerText || null,
      price_type:
        hotel.querySelector('.rateplan--price--notes').innerText || null,
      features:
        Array.from(
          hotel.querySelectorAll('.halal-features > li'),
          (li) => li.innerText
        ) || null,
    }))
  );

  browser.close();

  console.log('FINISHED HOTEL SCRAPING');

  return hotels;
}

module.exports = { hotelScraper };
