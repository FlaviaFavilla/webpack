// autoreload browser in dev mode
process.env.NODE_ENV === 'development' && require('./index.html.twig')

// import sass file
import './scss/main.scss';

console.log('ok');


// TEST TWIG
// var template = require("./help.html.twig");
// var html = template({title: 'Twig element'});
// console.log(html)



