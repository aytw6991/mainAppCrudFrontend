(function(){
    'use strict';

    angular.module('mainApp', [
        'ui.router',
		//Custom Modules
        'mainApp.employee',
        'mainApp.unit',
        'mainApp.attendance'
		]).config(config);

    function config($stateProvider){ 
		$stateProvider
            .state('main', {
                url: '/',
                template:
					'<div ui-view>'+
                        '<a ui-sref="main.employee"><button>Employee</button></a> '+
                        '<a ui-sref="main.unit"><button>Unit</button></a>'+
					'</div>'
            });
    };

})();