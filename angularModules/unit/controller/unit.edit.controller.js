(function(){
    'use strict';

    angular.module('mainApp.unit')
            .controller('UnitEditController', UnitEditController);

    UnitEditController.$inject = ['unitService', '$stateParams', '$state'];

    function UnitEditController(unitService, $stateParams, $state){
        var vm = this;

        vm.childBack = childBack;
        vm.editUnit = editUnit;
        vm.getById = getById;
        vm.id = $stateParams.id;
        vm.unit = {};

        activate();

        function activate(){
            getById();
        };

        function childBack(){
            return $state.go('^.view');
        };

        function editUnit(){
            return unitService.editUnit(vm.id, vm.unit)
                .then(function(){
                    return $state.go('^.view');
                });
        };

        function getById(){
            return unitService.getById(vm.id)
                .then(function(data){
                    vm.unit = data;
                    return vm.unit;
                });
        };
    
    };

})();