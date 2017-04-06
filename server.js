var express = require('express');
// var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./api/config/router');
var app = express();
var PORT = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/sg-project-3';

mongoose.connect(MONGODB_URI, function (err) {
  if (err) {
    console.error('Could not connect to Mongo: err:', err);
    process.exit(1);
  }
  console.log('Connected to database:', mongoose.connection.name);
});

app.use(function (req, res, next) {
 // simple middleware logging
  console.log(req.method, req.path);
  next();
});

// app.use(cors());
app.use(express.static('node_modules')); // looks straight into the node modules
app.use(express.static('frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, function() {
  console.log('App is running on port', PORT);
});

module.exports = app;
