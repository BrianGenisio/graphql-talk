var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");

var loaders = [
  {
    "test": /\.jsx?$/,
    "exclude": /node_modules/,
    "loader": "babel-loader",
    "query": {
      "presets": [
        "babel-preset-es2015",
        "babel-preset-react",
        "babel-preset-stage-0"
      ],
      "plugins": [
        "babel-plugin-transform-class-properties"
      ]
    }
  },
  {
    "test": /\.html?$/,
    "loader": "raw-loader"
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('build'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      filename: 'index.html',
      inject: false
    }),
    new CopyWebpackPlugin([
        {
            from: "images/*",
            to: "./",
        },
        {
            from: "favicon.ico",
            to: "./",
        },
    ]),
  ],
  module: {
    loaders: loaders
  }
};
