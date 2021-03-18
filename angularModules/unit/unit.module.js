(function(){
    'use strict';

    angular.module('mainApp.unit', [])
            .config(config);

    function config($stateProvider){
        
        $stateProvider
            .state('main.unit', {
                url: 'unit',
                template:
                '<div ui-view>'+
                    '<a ui-sref="main.unit.view"><button>View all units</button></a> '+
                    '<a ui-sref="main.unit.create"><button>Add new unit</button></a>'+
                '</div>'
                ,
            })
            .state('main.unit.view', {
                url: '/view',
                template:
                '<button ng-click="viewCtrl.parentBack()">Back</button><br><br>'+
                '<div ui-view>'+
                    '<table>'+
                        '<tr>'+
                            '<th>ID</th>'+
                            '<th>Unit</th>'+
                            '<th>Actions</th>'+
                        '</tr>'+
                        '<tr ng-repeat="unit in viewCtrl.units">'+
                            '<td>{{unit.id}}</td>'+
                            '<td>{{unit.name}}</td>'+
                            '<td>'+
                                '<a ui-sref="main.unit.edit({id:unit.id})"><button>Edit</button></a> '+
                                '<a ui-sref="main.unit.delete({id:unit.id})"><button>Delete</button></a>'+
                            '</td>'+
                        '</tr>'+
                    '</table>'+
                '</div>'
                ,
                controller: 'UnitController',
                controllerAs: 'viewCtrl'
            })
            .state('main.unit.create', {
                url: '/create',
                template:
                '<button ng-click="createCtrl.parentBack()">Back</button><br><br>'+
                '<form ng-submit="createCtrl.createUnit()">'+
                    'Enter Unit name: <input type="text" ng-model="createCtrl.unit.name" required> '+
                    '<button>Submit</button>'+
                '</form>'
                ,
                controller: 'UnitController',
                controllerAs: 'createCtrl'
            })
            .state('main.unit.edit', {
                url: '/edit/{id:int}',
                template:
                '<button ng-click="editCtrl.childBack()">Back</button><br><br>'+
                '<form ng-submit="editCtrl.editUnit()">'+
                    'Edit Unit: <input type="text" ng-model="editCtrl.unit.name" required> '+
                    '<button>Submit</button>'+
                '</form>'
                ,
                controller: 'UnitController',
                controllerAs: 'editCtrl',
                params: {
                    id: null
                }
            })
            .state('main.unit.delete', {
                url: '/delete/{id:int}',
                template: 
                'Really delete? <button ng-click="deleteCtrl.deleteUnit()">Yes</button> '+
                '<button ng-click="deleteCtrl.childBack()">No</button>'
                ,
                controller: 'UnitController',
                controllerAs: 'deleteCtrl',
                params: {
                    id: null
                }
            });
    };
})();