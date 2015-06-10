/*********************************************
* Configuration file for --A.R.S.E.--        *
* @author:                                   *
*         abyss-outpost (Maeoll Kim)         *
*********************************************/

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

var            selection = REQUIREJS_SELECTED;
var				 both_selected = NOT_SELECTED      ;

/*############################################
# Here is where you place the location of your
# app configuration file.
# Note: don't forget to add all your services,
# controllers, and directives to it!
############################################*/

var               startSystemJS
                                = function() {

System.import('~/scripts/configuration/confangularbysystem').catch(console.error.bind(console));

                                             }
var             startRequireJS
                                = function() {

// Don't actually need to do anything,
// SystemJS comes with RequireJS built in! lol
// Oh well, maybe we'll reinvent the wheel
// for fun.
System.import('~/scripts/configuration/confangularbyrequire').catch(console.error.bind(console));
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
