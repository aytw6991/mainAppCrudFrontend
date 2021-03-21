(function(){
    'use strict';

    angular.module('mainApp.attendance')
            .controller('AttendanceController', AttendanceController);

    AttendanceController.$inject = ['attendanceService', 'employeeService', '$state'];

    function AttendanceController(attendanceService, employeeService, $state){
        var vm = this;

        vm.childBack = childBack;
        vm.checkIn = checkIn;
        vm.getAll = getAll;
        vm.getUsers = getUsers;
        vm.loggedData = [];
        vm.parentBack = parentBack;
        vm.user = {};
        vm.users = [];

        activate();

        function activate(){
            getAll();
            getUsers();
        };

        function childBack(){
            $state.go('^');
        };
        
        function checkIn(){
            return attendanceService.checkIn(vm.user);
        };

        //get all attendance data
        function getAll(){
            return attendanceService.getAll()
                .then(function(data){
                    vm.loggedData = data;
                    return vm.loggedData;
                });
        };

        //get users for dropdown
        function getUsers(){
            return employeeService.getUsers()
                .then(function(data){
                    vm.users = data;
                    return vm.getUsers;
                });
        };

        function parentBack(){
            $state.go('^');
        };
    };
})();