var path = require('path');
var webpack = require('webpack');

module.exports = {

  context : path.resolve('public/js'),
  entry : [ 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
              "./app"],

  output : {
      
      path: path.resolve('build/'),
		  publicPath: '/build/',
		  filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devtool: 'source-map',


  module: {

      loaders:[{
        test :  /\.js$/ ,
        loader: ['babel-loader'],
        exclude: '/node_modules/'

      }, {
        test :  /\.(png|jpg|gif)$/ ,
        loader: ['file-loader'],
        exclude: '/node_modules/'

      }, {
        test :  /\.css$/ ,
        loader: ['style-loader' , 'css-loader'],
        exclude: '/node_modules/'

      }, {
        test : /\.scss$/,
        loader : ['style-loader' , 'css-loader', 'sass-loader'],
        exclude:'/node_modules/'
      }, {
        test : /\.html$/,
        loader : ['raw-loader'],
        exclude: '/node_modules/'

      }]

    },

}
