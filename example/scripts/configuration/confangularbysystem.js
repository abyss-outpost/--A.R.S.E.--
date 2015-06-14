import  {Data}                    from   'scripts/services/Data'             ;
import  {controllerName}          from   'scripts/controllers/controllerName';

const                          appName = 'myApp'                             ;
const                     dependencies = []                                  ;

const                              App = angular.module(appName,dependencies);
                          //console.log( angular)                            ;
                            App.service('Data',                         Data);
                         App.controller('controllerName',     controllerName);
                      angular.bootstrap(document,                  [appName]);
