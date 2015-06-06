import 	angular 					from 				'angular';
import	Data 							from				'./data';
import 	{controllerName} 	from 				'./controllerName'

const 	appName 											= 'appName';
const 	dependencies 									= [];

const 	App 													= angular.module(appName,dependencies);

													App.service	('data', 						             Data);
												App.controller('controllerName',     controllerName);

										 angular.bootstrap(document, 				          [appName]);
