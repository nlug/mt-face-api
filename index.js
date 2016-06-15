var face, faceAPI, request;

request = require('request');

faceAPI = (function() {
  function faceAPI(key) {
    this.key = key;
  }

  faceAPI.prototype.apiURL = 'https://api.projectoxford.ai/face/v1.0/';

  faceAPI.prototype.api = function(url, method, option, data, cb) {
    console.log('Sending api to ' + this.apiURL + url);
    return request({
      url: this.apiURL + url,
      method: method,
      qs: option,
      json: data,
      headers: {
        'Ocp-Apim-Subscription-Key': this.key
      }
    }, function(error, res, body) {
      return cb(error, res, body);
    });
  };

  return faceAPI;

})();

face = new faceAPI("c29d2cb8069044fdabdd193daf697f76");

face.api('detect', 'POST', {}, {
  url: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12744693_882653671851863_1422113926291615538_n.jpg?oh=9a6745308e7324ae70b91a55a93f1a92&oe=580300AC'
}, function(error, res, body) {
  return console.log(body);
});

module.exports = faceAPI;
