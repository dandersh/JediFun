(function() {
    'use strict';

    let JediFunPlanets = angular.module('Jedi-Fun.Planets');

    JediFunPlanets.controller('PlanetsController', PlanetsController);

    PlanetsController.$inject = ['$stateParams'];

    function PlanetsController($stateParams) {
        var vm = this;

        vm.getPlanet = () => {
            console.info($stateParams)
        }
    }
})();