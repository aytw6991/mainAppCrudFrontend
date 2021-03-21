(function(){
    'use strict';

    angular.module('mainApp.employee')
            .controller('EmployeeEditController', EmployeeEditController);

    EmployeeEditController.$inject = ['employeeService', '$stateParams', '$state', 'unitService'];

    function EmployeeEditController(employeeService, $stateParams, $state, unitService){
        var vm = this;

        vm.childBack = childBack;
        vm.editUser = editUser;
        vm.getById = getById;
        vm.getUnits = getUnits;
        vm.id = $stateParams.id
        vm.units = [];
        vm.user = {};

        activate();

        function activate(){
            getById();
            getUnits();
        };

        function childBack(){
            return $state.go('^.view');
        };

        function editUser(){
            return employeeService.editUser(vm.id, vm.user)
                .then(function(){
                    return $state.go('^.view');
                });
        };

        function getUnits(){
            return unitService.getUnits()
                .then(function(data){
                    vm.units = data;
                    return vm.units;
                });
        };

        function getById(){
            return employeeService.getById(vm.id)
                .then(function(data){
                    vm.user = data;
                });
        };  
    };

})();