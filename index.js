// Don't forget to run -> npm install request
var request = require('request');

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
