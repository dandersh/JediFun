/**
 *     Created by dandersh on 7/25/16
 **/

(function() {
    'use strict';

    let JediFunJedi = angular.module('Jedi-Fun.Jedi');

    JediFunJedi.service('JediService', JediService);

    JediService.$inject = ['$http'];

    function JediService($http) {
        let jediUrl = '../app/Models/jedis.json';
        let getJedi = () => {
            return $http.get(jediUrl)
        };
        
        return {
            getJedi : getJedi
        }
    }
})();