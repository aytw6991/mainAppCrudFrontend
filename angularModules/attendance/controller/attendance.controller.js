(function(){
    'use strict';

    angular.module('mainApp.attendance')
            .controller('AttendanceController', AttendanceController);

    AttendanceController.$inject = ['attendanceService', '$state'];

    function AttendanceController(attendanceService, $state){
        var vm = this;

        vm.childBack = childBack;
        vm.checkIn = checkIn;
        vm.getAll = getAll;
        vm.parentBack = parentBack;
        vm.times = [];

        activate();

        function activate(){
            getAll();
        };

        function childBack(){
            $state.go('^');
        };
        
        function checkIn(){
            return attendanceService.checkIn();
        };

        function getAll(){
            return attendanceService.getAll()
                .then(function(data){
                    vm.times = data;
                    return vm.times;
                });
        };

        function parentBack(){
            $state.go('^');
        };
    }
})();