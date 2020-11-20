/*
	intro : webpack config setting
	Author : chenchao
	Date : 2019-06-13
*/

var path = require("path") ;
var env = (process.env.NODE_ENV || "development").trim();
var rootPath = process.cwd() ;
var config = {} ;

console.log('----------------------------') ;
console.log(`temp NODE_ENV is ${env}`) ;
console.log('----------------------------') ;

switch(env){
  case "production" :
    var dir = path.join(rootPath, "task/webpack.prod.js") ;
    config = Object.assign({}, require(dir)) ;
    break ;
  case "development" :
  default :
    var dir = path.join(rootPath, "task/webpack.dev.js") ;
    config = Object.assign({}, require(dir)) ;
    break ;
}

module.exports = config ;