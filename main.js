const pptr = require('puppeteer');
const { categoryScraper } = require('./utils/categories');

async function main() {
  // const browser = await pptr.launch({});
  // const page = await browser.newPage();

  // await page.goto('https://en.halalbooking.com/');

  const categories = await categoryScraper('https://en.halalbooking.com/');

  // const categories = await page.evaluate(() =>
  //   Array.from(
  //     document.querySelectorAll(
  //       '.card.card_xs.card_link.card_outer.travel-ideas--i'
  //     ),
  //     (category) => ({
  //       link: category.href,
  //       title: category.innerText,
  //       image:
  //         category.querySelector('img').attributes['data-srcset'].value || null,
  //     })
  //   )
  // );

  console.log(categories);

  // await browser.close();
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
