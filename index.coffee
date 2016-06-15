request = require 'request';
class faceAPI
    constructor: (@key) ->
    apiURL: 'https://api.projectoxford.ai/face/v1.0/'
    api: (url, method, option, data, cb)->
        console.log 'Sending api to '+@apiURL+url
        request({
            url: @apiURL+url
            method: method
            qs: option
            json: data
            headers: {'Ocp-Apim-Subscription-Key': @key},
        }, (error, res, body) ->
            return cb(error, res, body);
        );

face = new faceAPI "c29d2cb8069044fdabdd193daf697f76"
face.api('detect', 'POST', {}, {url: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12744693_882653671851863_1422113926291615538_n.jpg?oh=9a6745308e7324ae70b91a55a93f1a92&oe=580300AC'}, (error, res, body) -> 
    console.log body;
);
module.exports = faceAPI;