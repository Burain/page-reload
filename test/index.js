/*
  intro : core function test
  Author : chenchao
  Date : 2019-05-22
*/
"use strict" ;

// var path   = require("path") ;
var assert = require("assert") ;
var Info = require("../index").default ;

var PageReload = Info.PageReload ;
// run Types unit test
describe("PageReload" , function(){
  it("is a function" , function(){
    assert.equal(typeof PageReload , "function") ;
  }) ;
}) ;