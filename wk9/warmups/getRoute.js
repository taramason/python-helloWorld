
'use strict';

var express = require('express');
var app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage

app.listen(port, function() {
  console.log("example log listening on port 3000! Go to http://localhost:3000/");
});

app.get('/home/page1', function (req, res) {
  res.send('get /home/page1')
})

app.get('/home/page2', function (req, res) {
  res.send('/home/page2')
})

app.get('/home/page3', function (req, res) {
  res.send('/home/page3')
})

app.get('/home/page4', function (req, res) {
  res.send('/home/page4')
})

app.get('/home/page5', function (req, res) {
  res.send('/home/page5')
})
