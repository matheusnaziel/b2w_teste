const fetch = require('node-fetch');
const cheerio = require('cheerio');

fetch('https://www.americanas.com.br/produto/133718358')
  .then(res => res.text())
  .then(body => {
    const $ = cheerio.load(body);
    const JSON_OUTPUT = {};

    JSON_OUTPUT.id = $('span.product-id').text();
    JSON_OUTPUT.breadcrumb = $('div.product-breadcrumb').text();
    JSON_OUTPUT.name = $('h1.product-name').text();
    JSON_OUTPUT.img = ($('div.gallery-product.swiper-wrapper').children('figure').eq(0).children('a').attr('href'));
    JSON_OUTPUT.seller = $('span.seller-00776574000660').text();
    console.log(JSON_OUTPUT)
  });