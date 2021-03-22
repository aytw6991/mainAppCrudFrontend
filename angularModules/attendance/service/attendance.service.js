(function(){
    'use strict';

    angular.module('mainApp.attendance')
            .factory('attendanceService', attendanceService);

    attendanceService.$inject = ['$http']

    function attendanceService($http){
        var vm = this;

        vm.service = {
            log: log,
            getAll: getAll,
            getEarly: getEarly,
            getLate: getLate
        };
        
        vm.url = 'http://localhost:8080/HRIS-web/webresources/attendance';

        return vm.service;

        function log(user){
            return $http.post(vm.url, user)
                .then(handleSuccess)
                .catch(handleError);
        };

        function getAll(){
            return $http.get(vm.url)
                .then(handleSuccess)
                .catch(handleError);
        };

        function getEarly(){
            return $http.get(vm.url + '/early')
                .then(handleSuccess)
                .catch(handleError);
        };

        function getLate(){
            return $http.get(vm.url + '/late')
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