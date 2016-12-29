var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './web_app/main'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'main.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.json', '.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ]
};