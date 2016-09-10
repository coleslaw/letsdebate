var express = require('express');
var path    = require('path');
var app     = express();
var bodyParser = require('body-parser');
var hbs     = require('hbs');
var method  = require('method-override');
var port    = process.env.PORT || 4000;
var uri     = process.env.MONGOLAB_URI || "mongodb://localhost/wittily";
var mongoose = require('mongoose');

// Database setup
mongoose.connect(uri);

app.set('port', (port));
// Set up view engins
app.set('views', './views');
app.set('view engine', 'hbs');
// app setup
app.use(express.static(__dirname + '/public'));
// require('dotenv').load();

// our routes
app.get('/', function(req, res) {
  res.render('index');
});


app.listen(port);
console.log('Listening on port: ', port);
