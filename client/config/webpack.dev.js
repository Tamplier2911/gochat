// const paths = require('./paths');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // set the mode to development
  mode: 'development',

  // control how source maps are generated
  devtool: 'inline-source-map',

  // spin up a server for quick development
  devServer: {
    // contentBase: paths.build,
    compress: false,
    port: 3000,
    historyApiFallback: true,
    open: false,
    hot: true,
    // publicPath: '/',
    // proxy: ,
  },

  plugins: [
    // only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
