'use strict';

/**********************************************
*               Here is where you select      *
*                 SystemJS v RequireJS        *
**********************************************/

const    SYSTEMJS_SELECTED = 0                ;
const   REQUIREJS_SELECTED = 1                ;
const        BOTH_SELECTED = 2                ;

var              selection = SYSTEMJS_SELECTED;

switch (selection)                            {
	                    case(SYSTEMJS_SELECTED):{
	                	                            //Launch angularJS using sys
		                                            System.import('~/scripts/app').catch(console.error.bind(console)) ;
		                                            (selection === BOTH_SELECTED ) 
		                                                        ?  selection++ 
		                                                        :  null          ;
	                                            }
	                   case(REQUIREJS_SELECTED):{
		                                              // ToDo: Loading requireJS
		                                              //
		                                              //
	                                            }
                                              }