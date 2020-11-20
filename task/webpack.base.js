/*
	intro : webpack base common setting
	Author : chenchao
	Date : 2019-06-10
*/
const webpack = require("webpack") ;
const path = require("path") ;
const eslintAutoFix = true ;
module.exports = {
	resolve: {
    extensions: ['.tsx', '.ts', '.js'] ,
    alias: {
    }
  } ,
  module: {
    rules : [
      {
        test: /\.ts|.tsx$/ ,
        use: [
          { loader : "ts-loader" } ,
          { 
            loader : "eslint-loader" ,
            options : { 
              fix : eslintAutoFix  // 开启自动修复
            }
          }
        ] ,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ] 
      } ,
      {
        test: /\.js$/ ,
        use: [
          { loader : "babel-loader" } ,
          { 
            loader : "eslint-loader" ,
            options : { 
              fix : eslintAutoFix 
            }
          }
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ]
      }
    ]
  }
} ;