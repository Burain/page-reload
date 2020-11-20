/*
	intro : npm production settting
	Author : chenchao
	Date : 2019-06-13
*/

const webpack = require("webpack") ;
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const paths = require("./path") ;
const merge = require('webpack-merge') ;

const webpackBaseConfig = require("./webpack.base.js") ;
const env = (process.env.NODE_ENV || "production").trim() ;
// setting
module.exports = merge(webpackBaseConfig , {
  mode : 'production' ,
	entry : [
    // and personal polyfill
    require.resolve("./polyfills") ,
    // webapck single entry pointer  
    paths.entryPointer
  ] ,
  output: {
    path: paths.outputPointer ,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    // filename : 'static/js/[name].[hash].js' ,
    filename : '[name].js' ,
  } ,
  optimization: {
    minimize: true
  } ,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(env.trim())}
    }) ,
    // Generates an `index.html` file with the <script> injected.
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: paths.indexPage ,
    // }) ,
  ]
}) ;