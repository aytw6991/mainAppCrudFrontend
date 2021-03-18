(function(){
    'use strict';

    angular.module('mainApp.unit')
            .controller('UnitController', UnitController);

    UnitController.$inject = ['unitService', '$stateParams', '$log', '$state'];

    function UnitController(unitService, $stateParams, $log, $state){
        var vm = this;
        
        vm.childBack = childBack;
        vm.createUnit = createUnit;
        vm.deleteUnit = deleteUnit;
        vm.editUnit = editUnit;
        vm.getById = getById;
        vm.getUnits = getUnits;
        vm.id = $stateParams.id;
        vm.parentBack = parentBack;
        vm.unit = {};
        vm.units = [];

        activate();

        function activate(){
            getById();
            getUnits();
        };

        function createUnit(){
            return unitService.createUnit(vm.unit)
                .then(function(){
                    $state.go('^.view');
                });
        };

        function childBack(){
            return $state.go('^.view');
        };

        function deleteUnit(){
            return unitService.deleteUnit(vm.id)
                .then(function(){
                    $state.go('^.view');
                });
        };

        function editUnit(){
            return unitService.editUnit(vm.id, vm.unit)
                .then(function(){
                    $state.go('^.view');
                });
        };

        function getById(){
            return unitService.getById(vm.id)
                .then(function(data){
                    vm.unit = data;
                });
        };

        function getUnits(){
            return unitService.getUnits()
                .then(function(data){
                    vm.units = data;
                    return vm.units;
                });
        }
        function parentBack(){
            return $state.go('^');
        };
    };
})();