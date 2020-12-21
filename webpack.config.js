const path = require('path');

module.exports = {
  entry: './src/app-module.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};