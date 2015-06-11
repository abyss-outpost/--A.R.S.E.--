
// console.log("Hearing chinese in a sushi place");
// window.require([
//   'require',
//   '/scripts/configuration/confrequire',
//   function(require, config) {
//     console.log("Hearing chinese in a sushi place");
//     window.require.config(config);
//     require(['/scripts/launchrequire']);
//
//   }
//
// ]);
// console.log("Hearing chinese in a sushi place");
console.log('Reached confrequire');
if (typeof define !== 'function') {
  console.log(define);
  var define = require('amdefine')(module);
}
console.log('Post typeof');
define({
  baseUrl: '/',

  paths: {
    'angular' : '/jspm_packages/github/angular/bower-angular@1.4.0/angular.js'

  },

  shim: {
    'angular' : {
      'exports' : 'angular'
    }
  }
});
