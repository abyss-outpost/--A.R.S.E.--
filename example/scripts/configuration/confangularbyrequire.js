System.config({
  meta: {
    '~/scripts/configuration/configangularbyrequire.js': {
      format: 'amd'
    }
  }
});
window.define = System.amdDefine;
window.require = window.requirejs = System.amdRequire;

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

// define([
//   'angular',
//   '/scripts/requireapp'
// ], function (angular) {
//   'use strict';
//
//
//   angular.bootstrap(document, ['app']);
// })
