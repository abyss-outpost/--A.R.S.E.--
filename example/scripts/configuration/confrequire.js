
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
    window.define = System.amdDefine                                           ;
   window.require = window.requirejs = System.amdRequire                       ;

                                                                         System.config(
                                                                               {
        baseUrl   : "/"                                                        ,
        transpiler: "/jspm_packages/github/jmcriffey/bower-traceur@0.0.90.js"  ,
           paths  :                                                            {

          angular : '/angular.js'                                              ,
          contro1 : '/scripts/controllers/controllerName.js'                   ,
          traceur : '/jspm_packages/github/jmcriffey/bower-traceur@0.0.90.js'
                                                                               }
                                                                               ,
             shim :                                                            {

          angular :                                                            {


          exports : 'angular'
                                                                               }
                                                                               }
                                                                               }
                                                                               )

console.log('Welcome Here');
