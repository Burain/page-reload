/*
	intro : npm development settting
	Author : chenchao
	Date : 2019-06-13
*/

const webpack = require("webpack") ;
const paths = require("./path") ;
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const ignoredFiles = require('react-dev-utils/ignoredFiles') ;
const merge = require('webpack-merge') ;
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin') ;


const proxySetting = require(paths.appPackageJson).proxy || {} ;
const devPublic = '/' ;
const webpackBaseConfig = require("./webpack.base.js") ;

// base dev setting
const devHost = "127.0.0.1" ;
const devPort = '8000' ;
// setting
module.exports = merge(webpackBaseConfig , {
  mode : 'development' ,
	devtool: '#source-map' ,
  entry : [
    // Include an alternative client for WebpackDevServer. A client's job is to
    // connect to WebpackDevServer by a socket and get notified about changes.
    // When you save a file, the client will either apply hot updates (in case
    // of CSS changes), or refresh the page (in case of JS changes). When you
    // make a syntax error, this client will display a syntax error overlay.
    // Note: instead of the default WebpackDevServer client, we use a custom one
    // to bring better experience for Create React App users. You can replace
    // the line below with these two lines if you prefer the stock client:
    // require.resolve('webpack-dev-server/client') + '?/',
    // require.resolve('webpack/hot/dev-server'),
    require.resolve('react-dev-utils/webpackHotDevClient') ,
    // webapck single entry pointer  
    paths.entryDevPointer
  ] ,
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename : 'static/js/bundle.js' ,
    // path : path.join(rootPath , 'dist') ,
    // This is the URL that app is served from. We use "/" in development.
    publicPath: devPublic ,
  },
  plugins: [
    // new ExtractTextPlugin("main.css") ,
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'main' ,
    //   filename: 'main.js'
    // }),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.indexPage ,
    }) ,
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebookincubator/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ] ,
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty' ,
    // fs: 'empty',
    net: 'empty' ,
    tls: 'empty' ,
    child_process: 'empty' ,
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false ,
  } ,
  devServer: {
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true ,
    } ,
    // control pack process message wether show on browser console  
    clientLogLevel: "none" ,
    // setting webapck error on web page
    overlay: {
      warnings: false ,
      errors: true
    } ,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: false ,
    // Reportedly, this avoids CPU overload on some systems.
    // https://github.com/facebookincubator/create-react-app/issues/293
    // src/node_modules is not ignored to support absolute imports
    // https://github.com/facebookincubator/create-react-app/issues/1065
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc) ,
    },
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: devPublic ,
    // proxy setting
    proxy : proxySetting ,
    // noInfo: true ,
    host : devHost ,
    port : devPort ,
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true ,
    stats : {
      colors : true
    }
  }
}) ;