/*
	intro : base path setting
	Author : chenchao
	Date : 2019-06-13
*/
const path = require('path') ;
const fs = require('fs') ;

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd()) ;
const resolveApp = relativePath => path.resolve(appDirectory, relativePath) ;

module.exports = {
	// webpack dev pointer
	entryDevPointer : resolveApp('dev/index') ,
	// webpack entry pointer 
	entryPointer : resolveApp('src/entry') ,
	// webpack output pointer
	outputPointer :  resolveApp('dist') ,
	// util entry
	utilSrc : resolveApp('src') ,

	// index page entry
	indexPage : resolveApp('public/index.html') ,
	indexFile : resolveApp('index.html') ,

	// node module 
	appNodeModules: resolveApp('node_modules') ,

	// package 
	appPackageJson : resolveApp('package.json')
} ;