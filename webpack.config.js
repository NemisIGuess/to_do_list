const path = require('path');

module.exports = {
  entry: './src/app-module.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // resolve: {
  //   fallback: {
  //     util: false,
  //     path: false,
  //     crypto: false,
  //     buffer: false,
  //     https: false,
  //     url: false,
  //     http: false,
  //     vm: false,
  //     querystring: false,
  //     os: false,
  //     stream: false,
  //     assert: false,
  //     constants: false,
  //   }},
};