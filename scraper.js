const request = require('request');
const cheerio = require('cheerio');

const URL = 'https://api-university.com/';

request(URL, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    // load all of html into cheerio for dom manipulation
    const $ = cheerio.load(html);

    const submenu = $('.sub-menu');
    console.log(submenu.text());
  }
});