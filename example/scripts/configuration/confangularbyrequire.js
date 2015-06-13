                    window.define = System.amdDefine ;
window.require = window.requirejs = System.amdRequire;

  System.config('/scripts/configuration/confrequire');

define (       ['angular.js'
               ,'/scripts/controllers/controllerName.js'
               ],
                                   function(angular) {

'use strict';

angular.module ('app', [
                       ]
               )
       .config (       ['$routeProvider',
                            function($routeProvider) {


 $routeProvider.when   ('/',
                                                     {



templateUrl    : '../../pages/main.html',
controller     : require('/scripts/controllers/controllerName.js')
                                                     }
                       )
                                                     }
                       ]
               )
       .bootstrap(document, ['app']);
                                                     }
      );
