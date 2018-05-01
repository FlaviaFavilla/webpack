// autoreload browser in dev mode
process.env.NODE_ENV === 'development' && require('./index.html')

// import sass file
import './scss/main.scss';


// TEST TWIG
var template = require("./prova.html.twig");
var html = template({title: 'dialog title'});


console.log('ok')
console.log(html)
