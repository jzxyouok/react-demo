var path = require('path');
var webpack = require('webpack');
// var pxtorem = require('postcss-pxtorem');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style','css','autoprefixer','sass'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['css'],
      },
      {
        test: /\.(jpeg|jpg|png|gif|mp3)$/,
        loaders: ['file-loader'],
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loaders: ['url-loader?limit=50000'],
      }
    ]
  },
  // resolve: {
  //   modulesDirectories: ['node_modules', path.join(__dirname, './node_modules')],
  //   extensions: ['', '.web.js', '.js', '.json'],
  // },
};



