process.env.NODE_ENV === 'development' && require('./index.html')
import './scss/main.scss';

var template = require("./prova.html.twig");
var html = template({title: 'dialog title'});

console.log('ok')
