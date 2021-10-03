const path = require('path');
const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // where webpack looks to start building the bundle
  entry: ['whatwg-fetch', paths.src + '/index.js'],
  target: 'web',

  // where webpack outputs the assets and bundles
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles
    chunkFilename: '[name].[contenthash].js',
    // `path` is the folder where Webpack will place your bundles
    path: paths.build,
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: '/',
  },

  resolve: {
    alias: {
      '~': paths.src,
    },
    extensions: ['.js', '.vue'],
  },

  // determine how modules within the project are treated
  module: {
    rules: [
      // js: use babel to transpile js files
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      // scss: inject css into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          // 'vue-style-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      // assets: copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // fonts and svg: inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  // customize the webpack build process
  plugins: [
    // vue plugin for the magic
    new VueLoaderPlugin(),

    // cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/*.DS_Store', '**/*.html'],
          },
        },
      ],
    }),

    // generates an html file from a template
    new HtmlWebpackPlugin({
      title: 'gochat',
      // favicon: paths.public + '/favicon.png',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    }),
  ],
};
