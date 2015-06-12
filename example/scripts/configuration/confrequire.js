
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

define({
  baseUrl: '/scripts',

  paths: {
    'angular' : '/jspm_packages/github/angular/bower-angular@1.4.0/angular.js',
    'reqyreA' : '/scripts/configuration/requireapp.js',
    'launchR' : '/scripts/configuration/launchrequire.js',
    'control' : '/scripts/controllers/controllerName.js'
  },

  shim: {
    'angular' : {
      'exports' : 'angular'
    }
  }
});
