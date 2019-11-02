"use strict";


//set up
var fs = require('fs');
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var handlebars = require('express-handlebars');

var app = express();

app.engine('hbs', handlebars({
   extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./router');
app.use('/', routes);

console.log('Express started. Listening on port', process.env.PORT || 3005);
app.listen(process.env.PORT || 3005);
