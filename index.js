var _       = require('lodash');
var async   = require('async');
var options = require('./config/options');
var nflAuth = require('./lib/nfl_auth.js');
var r       = require('rethinkdb');
var request = require('request');
var secrets = require('./config/secrets');



r.connect(options.rethinkdb, function(err, conn) {
  if (err) throw err;
  r.use('nfl');

  request({
    url: options.nfl.host,
    headers: { 'Authorization': nflAuth.accessToken }
  }, function(err, response) {
    if (err) throw err;
    console.log(response);
  });

});
