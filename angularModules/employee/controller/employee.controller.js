(function(){
    'use strict';

    angular.module('mainApp.employee')
            .controller('EmployeeController', EmployeeController);

    EmployeeController.$inject = ['employeeService', 'unitService', '$stateParams', '$state', '$log'];
    
    function EmployeeController(employeeService, unitService, $stateParams, $state, $log){
        var vm = this;

        vm.childBack = childBack;
        vm.createUser = createUser;
        vm.deleteUser = deleteUser;
        vm.editUser = editUser;
        vm.getById = getById;
        vm.getUnits = getUnits;
        vm.getUsers = getUsers;
        vm.id = $stateParams.id;
        vm.parentBack = parentBack;
        vm.units = [];
        vm.user = {};
        vm.users = [];
        
        activate();

        function activate(){
            // getById();
            getUnits();
            getUsers();
        };

        function childBack(){
            return $state.go('^.view');
        };

        function createUser(){
            return employeeService.createUser(vm.user)
                .then(function(){
                    $state.go('^.view');
                });
        };

        function deleteUser(){
            return employeeService.deleteUser(vm.id)
                .then(function(){
                    $state.go('^.view');
                });
        };

        function editUser(){
            return employeeService.editUser(vm.id, vm.user)
                .then(function(){
                    $state.go('^.view');
                });
        };

        function getById(id){
            return employeeService.getById(id)
                .then(function(data){
                    vm.user = data;
                    $log.info(vm.user);
                    return vm.user;
                });
        };

        function getUnits(){
            return unitService.getUnits()
                .then(function(data){
                    vm.units = data;
                    return vm.units;
                });
        };

        function getUsers(){
            return employeeService.getUsers()
                .then(function(data){
                    vm.users = data;
                    return vm.users;
                });
        };

        function parentBack(){
            return $state.go('^');
        };

    };
})();