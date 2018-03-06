const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: './app/public',
    publicPath: './',
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', [ 'css-loader?-autoprefixer' ]),
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=50000&name=[path][name].[ext]',
    }, {
      test: /\.(gif|jpg|png)\??.*$/,
      loader: 'file-loader?name=img/[name].[ext]',
    }],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  watch: true,
};
