(function(){
    'use strict';

    angular.module('mainApp.employee')
            .controller('EmployeeEditController', EmployeeEditController);

    EmployeeEditController.$inject = ['employeeService', '$stateParams', '$state'];

    function EmployeeEditController(employeeService, $stateParams, $state){
        var vm = this;

        vm.childBack = childBack;
        vm.editUser = editUser;
        vm.getById = getById;
        vm.id = $stateParams.id
        vm.user = {};

        activate();

        function activate(){
            getById();
        };

        function childBack(){
            $state.go('^.view');
        }

        function editUser(){
            return employeeService.editUser(vm.id, vm.user);
        };

        function getById(){
            return employeeService.getById(vm.id)
                .then(function(data){
                    vm.user = data;
                });
        };
    };

})();