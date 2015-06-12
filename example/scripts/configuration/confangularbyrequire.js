// System.config({
//   meta: {
//     '~/scripts/configuration/configangularbyrequire.js': {
//       format: 'cjs'
//     }
//   }
// });
// configure require
window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;
console.log(require);
System.config('/scripts/configuration/confrequire');

// move this to another file. works ok
window.angMod = null;
define(['angular'], function (angular) {
  'use strict';
  console.log('Welcome my son, to the Machine');
  //angMod =
  angular.module('app', []);
  //console.log(angMod);
  // Now I just need to launch it
  //angular.bootstrap(document, ['/scripts/controllers/controllerName.js']);
});
