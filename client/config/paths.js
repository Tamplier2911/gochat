const path = require('path');

module.exports = {
  // source files
  src: path.resolve(__dirname, '../src'),

  // production build files
  build: path.resolve(__dirname, '../dist'),

  // static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
};
