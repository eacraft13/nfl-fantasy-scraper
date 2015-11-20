var request = require('request');
var options = require('options');
var secrets = require('./config/secrets');

function getAccessToken(callback) {
  request({
    url: options.nfl.host +
      '/auth/login?app_key=' +
      secrets.nfl.application_key +
      '&' +
      secrets.nfl.application_secret
  }, callback);
}

var module.exports = {
  accessToken: getAccessToken(function(err, data) {
      if (err) throw err;
      return data;
  })
};
