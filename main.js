const wait = require('wait');
const fs = require('fs');
const { categoryScraper } = require('./utils/categories');
const { hotelScraper } = require('./utils/hotels');

async function main() {
  const categories = await categoryScraper('https://en.halalbooking.com/');
  const hotels = {};

  for (const category of categories) {
    await wait(500);
    hotels[category.title] = await hotelScraper(category.link);
  }

  fs.writeFile(
    'hotels.json',
    JSON.stringify(hotels, null, 2),
    'utf-8',
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Data Exported');
      }
    }
  );
}

main();
