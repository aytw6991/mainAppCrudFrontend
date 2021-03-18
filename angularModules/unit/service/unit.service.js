(function(){

    angular.module('mainApp.unit')
            .factory('unitService', unitService);

    unitService.$inject = ['$http', '$log'];

    function unitService($http, $log){
        var vm = this;

        vm.service = {
            createUnit: createUnit,
            deleteUnit: deleteUnit,
            editUnit: editUnit,
            getById: getById,
            getUnits: getUnits
        };

        vm.url = 'http://localhost:8080/HRIS-web/webresources/unit';
        
        return vm.service;

        function createUnit(unit){
            return $http.post(vm.url, unit)
                .then(handleSuccess)
                .catch(handleError);
        };

        function deleteUnit(id){
            return $http.delete(vm.url + '/' + id)
                .then(handleSuccess)
                .catch(handleError);
        };

        function editUnit(id, unit){
            return $http.put(vm.url + '/' + id, unit)
                .then(handleSuccess)
                .catch(handleError);
        };

        function getById(id){
            return $http.get(vm.url + '/' + id)
                .then(handleSuccess)
                .catch(handleError);
        };

        function getUnits(){
            return $http.get(vm.url)
                .then(handleSuccess)
                .catch(handleError);
        };

        function handleSuccess(response){
            // $log.info(response);
            return response.data;
        };

        function handleError(error){
            return $log.error(error.data);
        };
    };
})();