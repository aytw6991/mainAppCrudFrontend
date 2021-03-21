(function(){

    angular.module('mainApp.employee')
            .factory('employeeService', employeeService);

    employeeService.$inject = ['$http', '$log'];

    function employeeService($http, $log){
        var vm = this;
        
        vm.service = {
            createUser: createUser,
            deleteUser: deleteUser,
            editUser: editUser,
            getById: getById,
            getUsers: getUsers
        };

        vm.url = 'http://localhost:8080/HRIS-web/webresources/employee';

        return vm.service;

        function createUser(user){
            return $http.post(vm.url, user)
                .then(handleSuccess)
                .catch(handleError);
        };

        function deleteUser(id){
            return $http.delete(vm.url + '/' + id)
                .then(handleSuccess)
                .catch(handleError);
        };

        function editUser(id, user){
            return $http.put(vm.url + '/' + id, user)
                .then(handleSuccess)
                .catch(handleError);
        };

        function getById(id){
            return $http.get(vm.url + '/' + id)
                .then(handleSuccess)
                .catch(handleError);
        };

        function getUsers(){
            return $http.get(vm.url)
                .then(handleSuccess)
                .catch(handleError);
        };

    
        function handleSuccess(response){
            // $log.info(response)
            return response.data;
        };

        function handleError(error){
            return $log.error(error.data)
        };
    };
})();