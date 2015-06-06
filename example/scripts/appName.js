//import 	angular 					       from	'/bower_components/angular/angular.js';
import angular from 'angular';
console.log(angular.version);
import	{Data}						       from	'/scripts/data.js'                    ;
import 	{controllerName} 	       from	'/scripts/controllerName.js'					;

const 	appName 											= 'appName'                           ;
const 	dependencies 									= []                                  ;

const 	App 													= angular.module(appName,dependencies);

													 App.service('data', 						             Data);
												App.controller('controllerName',     controllerName);
										 angular.bootstrap(document, 				          [appName]);
