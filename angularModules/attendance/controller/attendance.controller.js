(function(){
    'use strict';

    angular.module('mainApp.attendance')
            .controller('AttendanceController', AttendanceController);

    AttendanceController.$inject = ['attendanceService', 'employeeService', '$state'];

    function AttendanceController(attendanceService, employeeService, $state){
        var vm = this;

        vm.childBack = childBack;
        vm.checkIn = checkIn;
        vm.earlyUsers = [];
        vm.getAll = getAll;
        vm.getEarly = getEarly;
        vm.getLate = getLate;
        vm.getUsers = getUsers;
        vm.lateUsers = [];
        vm.loggedData = [];
        vm.parentBack = parentBack;
        vm.user = {};
        vm.users = [];

        activate();

        function activate(){
            getAll();
            getEarly();
            getLate();
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

        function getEarly(){
            return attendanceService.getEarly()
                .then(function(data){
                    vm.earlyUsers = data;
                    return vm.earlyUsers;
                });
        };

        function getLate(){
            return attendanceService.getLate()
                .then(function(data){
                    vm.lateUsers = data;
                    return vm.lateUsers;
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