const pptr = require('puppeteer');
const { categoryScraper } = require('./utils/categories');
const { hotelScraper } = require('./utils/hotels');

async function main() {
  const categories = await categoryScraper('https://en.halalbooking.com/');
  const h = await hotelScraper(categories[0].link);

  console.log(h);
}

main();

// await page.goto('https://en.halalbooking.com/fl/181');

//   const hotels = await page.evaluate(() =>
//     Array.from(document.querySelectorAll('.search-i-content'), (hotel) => ({
//       name: hotel.querySelector('.search-i-title').innerText,
//       image: hotel.previousElementSibling.querySelector('img').src,
//       rating: hotel.querySelector(
//         '.aggregate-score--val.property-score.property-score_m.search-i--score'
//       ).innerText,
//       location: hotel.querySelector('.search-i-location').innerText,
//       price: hotel.querySelector('.rateplan--price--value').innerText,
//       price_type: hotel.querySelector('.rateplan--price--notes').innerText,
//     }))
//   );

//   console.log(hotels);
