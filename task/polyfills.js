'use strict';
// promise polyfill 
if (typeof Promise === 'undefined') {
  window.Promise = require('core-js/es/promise') ;
}


