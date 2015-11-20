var _       = require('lodash');
var async   = require('async');
var options = require('./config/options');
var request = require('request');
var secrets = require('./config/secrets');

// Your API key, and  URL
var api_key = 'SECRET',
    url = 'foxsports.com';

// Request to the embed endpoint
request('https://embedkit.com/api/v1/embed?api_key='+api_key+'&url='+url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});

// Request to the extract endpoint
request('https://embedkit.com/api/v1/extract?api_key='+api_key+'&url='+url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
