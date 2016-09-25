(function() {
    'use strict';

    let JediFunSith = angular.module('Jedi-Fun.Sith');

    JediFunSith.service('SithService', SithService);

    SithService.$inject = ['$http'];

    function SithService($http) {
        let sithUrl = '../app/Models/sith.json';
        let getSith = () => {
            return $http.get(sithUrl)
        };

        let formatName = (val) => {
            if (val.name.indexOf(' ') !== -1) {
                val.formattedName = val.name.replace(' ', '_');
            }
        };

        let createFormattedName = (data) => {
            return R.map(formatName, data)
        };

        return {
            getSith : getSith,
            createFormattedName: createFormattedName
        }
    }

})();
