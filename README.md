# mt-face-api

Detect face, find similar,... using [Microsoft Cognitive Services](https://www.microsoft.com/cognitive-services/en-us/face-api)

## Features

 - uses [request](https://www.npmjs.com/package/request)
 - simple api

## Install

`npm install --save mt-face-api`

## Usage

```
const faceAPI = require('mt-face-api');

var photo = new faceAPI("YOUR SECRET KEY");

/***
 * Ex: Detect face in this photo: https://secure.gravatar.com/avatar/92d8de5bc1aae1250a02b1f37b92751b
 */
face.api('detect', 'POST', {}, {
  url: 'https://secure.gravatar.com/avatar/92d8de5bc1aae1250a02b1f37b92751b'
}, function(error, res, body) {
  return console.log(body);
});
```


## Contributing

Contributions welcome; Please submit all pull requests against the master branch.

## Author

Minh Thanh <nlug27@gmail.com> [http://github.com/nlug](http://github.com/nlug)

## License

 - **MIT** : http://opensource.org/licenses/MIT