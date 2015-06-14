/*********************************************
* Configuration file for --A.R.S.E.--        *
* @author:                                   *
*         abyss-outpost (Maeoll Kim)         *
*********************************************/
import           angular   from              'bower_components/angular/angular'
const      BOTH_SELECTED = true              ;
const       NOT_SELECTED = false             ;
const  SYSTEMJS_SELECTED = 0                 ;
const REQUIREJS_SELECTED = 1                 ;

/*********************************************
* Here is where you select which starts first*
*               SystemJS v RequireJS         *
* Replace __selected__ with the capitalized  *
* selected module loader, i.e.:              *
            var selected = REQUIREJS_SELECTED;
* or                                         *
            var both_selected = BOTH_SELECTED;
* Choose... but choose wisely...             *
*********************************************/

var            selection = SYSTEMJS_SELECTED ;
var	   both_selected = NOT_SELECTED      ;

/*############################################
# Here is where you place the location of your
# app configuration file.
# Note: don't forget to add all your services,
# controllers, and directives to it!
############################################*/

var               startSystemJS
                                = function() {
console.log(angular);
System.import('/scripts/configuration/confangularbysystem.js').catch(console.error.bind(console));

                                             }
var             startRequireJS
                                = function() {

System.config({
  meta: { '/scripts/configuration/configangularbyrequire.js': { format: 'cjs'}},
  meta: { '/scripts/configuration/confrequire.js'           : { format: 'cjs'}}


});
//System.import('/angular.js').catch(console.error.bind(console));
//System.import('/scripts/configuration/confrequire.js').catch(console.error.bind(console));
console.log('Starting require');
window.define = System.amdDefine                                           ;
window.require = window.requirejs = System.amdRequire                       ;
console.log(angular);
define(['require'], function(require) {


require(['angular.js'], function(angular) {
         return                    angular.module('app', [
                                                         ]
                                                 )
        .config (
                  [ '$routeProvider',
                                      function($routeProvider) {


        $routeProvider.when('/', {



        templateUrl    :              '../../pages/main.html',
        //controller     : require('/scripts/controllers/controllerName.js')
                                                               }
                           )
                                                               }
                  ]
                )
        .bootstrap(document, ['app']);
})
})
console.log(angular);
//System.import('/scripts/configuration/confangularbyrequire.js').catch(console.error.bind(console));
                                             }
/*********************************************
* Here is where your selection is executed   *
*********************************************/
                          if (both_selected) {

startSystemJS()                              ;
startRequireJS()                             ;

                                             }
                    else
                         switch  (selection) {

                    case(SYSTEMJS_SELECTED): {

startSystemJS()                              ;
break                                        ;

	                                     }

                   case(REQUIREJS_SELECTED): {

startRequireJS()                             ;
break                                        ;

	                                     }

                                             };
