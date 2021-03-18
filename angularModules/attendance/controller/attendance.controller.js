(function(){
    'use strict';

    angular.module('mainApp.attendance')
            .controller('AttendanceController', AttendanceController);

    AttendanceController.$inject = ['attendanceService', '$state'];

    function AttendanceController(attendanceService, $state){
        var vm = this;

        vm.back = back;
        vm.checkIn = checkIn;
        vm.getAll = getAll;
        vm.times = [];

        activate();

        function activate(){
            getAll();
        };

        function back(){
            $state.go('^');
        };

        function getAll(){
            return attendanceService.getAll()
                .then(function(data){
                    vm.times = data;
                    return vm.times;
                });
        };

        function checkIn(){
            return attendanceService.checkIn();
        };
    }
})();