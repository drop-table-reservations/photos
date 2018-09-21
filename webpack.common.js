var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      include: SRC_DIR,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ['@babel/react', '@babel/preset-env'],
          plugins: ["styled-components"]
        }
      }]
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: ['*', '.wasm', '.mjs', '.js', '.json', '.jsx'],
  },
};