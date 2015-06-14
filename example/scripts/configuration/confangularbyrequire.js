//System.config  ('/scripts/configuration/confrequire.js');
window.define = System.amdDefine                                           ;
window.require = window.requirejs = System.amdRequire                       ;
console.log(angular)
define(['require'], function(require) {


require(['angular.js'], function(angular) {
        return                     angular.module('app', [
                                                         ]
                                                 )
        // .config (
        //           [ '$routeProvider',
        //                               function($routeProvider) {
        //
        //
        // $routeProvider.when('/', {
        //
        //
        //
        // templateUrl    :              '../../pages/main.html',
        // //controller     : require('/scripts/controllers/controllerName.js')
        //                                                        }
        //                    )
        //                                                        }
        //           ]
        //         )
        //.bootstrap(document, ['app']);
})
})
