// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data');

// create your express server below
const app = express();

// add your routes and middleware below

app.use(morgan('dev'));
app.get('/', function (req, res) {
    res.status(200).send('express server running');
})

app.get('/data', function (req, res) {
    res.status(200).send(data);
})

app.get('*', function(req, res) {
    res.status(404).send('Page not found')
})
  

// finally export the express application
module.exports = app;
