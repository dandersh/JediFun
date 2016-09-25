(function() {
    'use strict';

    let JediFunSith = angular.module('Jedi-Fun.Sith');

    JediFunSith.controller('SithController', SithController);

    SithController.$inject = ['SithService', 'sithData', '$stateParams'];

    function SithController(SithService, sithData, $stateParams) {
        let vm = this;
        vm.sithList = sithData.data;
        vm.sithList.isEditable = false;
        SithService.createFormattedName(vm.sithList);
        vm.canEdit = () => {
            vm.sithList.isEditable = true;
        };
    }
})();

