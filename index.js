var express = require('express');
var path    = require('path');
var app     = express();
var bodyParser = require('body-parser');
var hbs     = require('hbs');
var method  = require('method-override');
var port    = process.env.PORT || 4000;

// Database setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wittily')

// Set up view engins
app.set('views', './views');
app.set('view engine', 'hbs');

// app setup
app.use(express.static(__dirname + '/public'));

// our routes
app.get('/', function(req, res) {
  res.render('index');
});


app.listen(port);
console.log('Listening on port: ', port);
