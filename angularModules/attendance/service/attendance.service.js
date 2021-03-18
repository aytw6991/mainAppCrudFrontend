(function(){
    'use strict';

    angular.module('mainApp.attendance')
            .factory('attendanceService', attendanceService);

    attendanceService.$inject = ['$http']

    function attendanceService($http){
        var vm = this;

        vm.service = {
            checkIn: checkIn,
            getAll: getAll,
        };
        
        vm.url = 'http://localhost:8080/HRIS-web/webresources/attendance';

        return vm.service;

        function checkIn(){
            return $http.post(vm.url)
                .then(handleSuccess)
                .catch(handleError);
        };

        function getAll(){
            return $http.get(vm.url)
                .then(handleSuccess)
                .catch(handleError);
        };

        function handleSuccess(response){
            return response.data;
        };

        function handleError(error){
            return error.data;
        };

    };

})();