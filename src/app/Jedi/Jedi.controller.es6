/**
 *     Created by dandersh on 7/25/16
 **/

(function() {
    'use strict';

    let JediFunJedi = angular.module('Jedi-Fun.Jedi');

    JediFunJedi.controller('JediController', JediController);

    JediController.$inject = ['JediService'];

    function JediController(JediService) {
        let vm = this;
        JediService.getJedi().then(function(data) {
            console.table(data);
            vm.jediList = data.data;
        });
        vm.showDescription = (desc, color) => {
            vm.color = color;
            vm.descriptionText = desc;
        };
    }
})();
