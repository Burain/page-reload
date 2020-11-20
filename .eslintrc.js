/*
	intro : eslint config defination
	Author : 
	Date :
*/
module.exports = {
    parser:  '@typescript-eslint/parser', //定义ESLint的解析器
    extends: [
        'plugin:@typescript-eslint/recommended' //定义文件继承的子规范
    ] ,
    parserOptions : {
        "sourceType": 'module'
    } ,
    plugins: [
        '@typescript-eslint' //定义了该eslint文件所依赖的插件
    ],
    "extends": "eslint:recommended" ,
    env:{                          //指定代码的运行环境
      browser: true ,
      node: true ,
      "es6": true
    } ,
    rules : {
      "semi" : ["error", "always"] , // 句末尾使用分号
      "eqeqeq" : ["error", "always"] , // 强制使用 === 和 !== 
      "no-eval" : ["error", {"allowIndirect": true}] , // 禁止使用eval
    }                            
  }
  