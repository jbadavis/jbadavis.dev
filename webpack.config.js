const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/js'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dis/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ["transform-class-properties"]
          },
        },
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  }
};
