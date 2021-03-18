(function (){
    'use strict';

    angular.module('mainApp.employee', [])
            .config(config);

    function config($stateProvider){
        $stateProvider
            .state('main.employee', {
                url: 'employee',
                template:
                '<div ui-view>'+
                    '<a ui-sref="main.employee.view"><button>View all employees</button></a> '+
                    '<a ui-sref="main.employee.create"><button>Add new employee</button></a><br><br>'+
                '</div>'
                ,
                controller: 'EmployeeController',
                controllerAs: 'empCtrl'
            })
            .state('main.employee.view', {
                url: '/view',
                template:
                '<button ng-click="viewCtrl.parentBack()">Back</button><br><br>'+
                '<div ui-view>'+
                    '<div>'+
                        'Search by Id: <input type="text" ng-model="search.id">|| '+
                        'Search by name: <input type="text" ng-model="search.name">|| '+
                        'Search by unit: <input type="text" ng-model="search.vertical">'+
                        '<br><br>'+
                    '</div>'+
                    '<table>'+
                        '<tr>'+
                            '<th>ID</th>'+
                            '<th>Name</th>'+
                            '<th>Gender</th>'+
                            '<th>Unit</th>'+
                            '<th>Salary</th>'+
                            '<th>Actions</th>'+
                        '</tr>'+
                        '<tr ng-repeat="user in viewCtrl.users | filter:search">'+
                            '<td>{{user.id}}</td>'+
                            '<td>{{user.name}}</td>'+
                            '<td>{{user.gender}}</td>'+
                            '<td>{{user.vertical}}</td>'+
                            '<td>{{user.salary}}</td>'+
                            '<td>'+
                                ' <a ui-sref="main.employee.edit({id:user.id})"><button>Edit</button></a> '+
                                ' <a ui-sref="main.employee.delete({id:user.id})"><button>Delete</button></a> '+
                            '</td>'+
                        '</tr>'+
                    '</table>'+
                '</div>'
                ,
                controller: 'EmployeeController',
                controllerAs: 'viewCtrl'
            })
            .state('main.employee.create', {
                url: '/create',
                template:
                '<button ng-click="createCtrl.parentBack()">Back</button><br><br>'+
                '<form ng-submit="createCtrl.createUser()">'+
                    '<label>Name:</label><br>'+
                    '<input type="text" ng-model="createCtrl.user.name" required><br>'+
                    '<div>'+
                        '<label>Gender:</label><br>'+
                        '<input type="radio" name="gender" value="Male" ng-model="createCtrl.user.gender" required>'+
                        '<label>Male</label><br>'+
                        '<input type="radio" name="gender" value="Female" ng-model="createCtrl.user.gender">' +
                        '<label>Female</label><br>'+
                        '<input type="radio" name="gender" value="Other" ng-model="createCtrl.user.gender">'+
                        '<label>Other</label><br>'+
                    '</div>'+
                    '<label>Unit:</label><br>' +
                    '<select ng-model="createCtrl.user.vertical" required>'+
                        '<option value="">--Please select one--</option>'+
                        '<option ng-repeat="unit in createCtrl.units">{{unit.name}}</option>">'+ 
                    '</select><br>'+
                    '<label>Salary:</label><br>' +
                    '<input type="number" ng-model="createCtrl.user.salary" required><br><br>'+
                    '<button>Submit</button>'+
                '</form>'
                ,
                controller: 'EmployeeController',
                controllerAs: 'createCtrl'
            })
            .state('main.employee.edit', {
                url: '/edit/{id:int}',
                template:
                '<button ng-click="editCtrl.childBack()">Back</button><br><br>'+
                '<form ng-submit="editCtrl.editUser()">'+
                    '<label>Name:</label><br>'+
                    '<input type="text" ng-model="editCtrl.user.name" required><br>' +
                    '<div>'+
                        '<label>Gender:</label><br>'+
                        '<input type="radio" name="gender" value="Male" ng-model="editCtrl.user.gender" required>'+
                        '<label>Male</label><br>'+
                        ' <input type="radio" name="gender" value="Female" ng-model="editCtrl.user.gender">'+
                        '<label>Female</label><br>'+
                        ' <input type="radio" name="gender" value="Other" ng-model="editCtrl.user.gender">'+
                        '<label>Other</label><br>'+
                    '</div>'+
                    '<label>Business Unit:</label><br>'+
                    '<select ng-model="editCtrl.user.vertical" required>'+
                        '<option value="">--Please select one--</option>'+
                        '<option ng-repeat="unit in editCtrl.units">{{unit.name}}</option>'+
                    '</select><br>'+
                    '<label>Salary:</label><br>'+
                    '<input type="number" ng-model="editCtrl.user.salary" required><br><br>'+
                    '<button>Submit</button>'+
                '</form>'
                ,
                controller: 'EmployeeEditController',
                controllerAs: 'editCtrl',
                params: {
                    id : null
                }
            })
            .state('main.employee.delete', {
                url: '/delete/{id:int}',
                template: 
                    'Really delete user? <button ng-click="deleteCtrl.deleteUser()">Yes</button> '+
                    '<button ng-click="deleteCtrl.childBack()">No</button>'
                ,
                controller: 'EmployeeController',
                controllerAs: 'deleteCtrl',
                params: {
                    id : null
                }
            });
    };
})();