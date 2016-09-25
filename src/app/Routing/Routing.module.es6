(function() {
    'use strict';

    angular.module('Jedi-Fun.Routing', ['ui.router'])
        .config(function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider
                .when('', '/')
                .otherwise(function($injector) {
                    $injector.get('$state').go('404', {}, { location: false});
                });
            $stateProvider
                .state('home', {
                    url: '/'
                })
                .state('404', {
                    templateUrl: 'app/Views/Partials/404.html'
                })
                .state('jedi', {
                    url: '/jedi/',
                    views: {
                        'jediView': {
                            templateUrl: 'app/Views/Partials/partial-jedi.html'
                        }
                    }
                })
                .state('sith', {
                    url: '/sith/',
                    views: {
                        'sithView': {
                            templateUrl: 'app/Views/Partials/partial-sith.html'
                        }
                    }
                })
                .state('planets', {
                    url: '/planets/:planet',
                    templateUrl: 'app/Views/Partials/partial-planets.html',
                    controller: 'PlanetsController',
                    controllerAs: 'Planet'
                })
                .state('jedi.list', {
                    url: 'jediList/',
                    templateUrl: 'app/Views/Partials/partial-jedi-list.html',
                    name: 'jediList',
                    controller: 'JediController',
                    controllerAs: 'Jedi'
                })
                .state('sith.list', {
                    url: 'sithList/',
                    templateUrl: 'app/Views/Partials/partial-sith-list.html',
                    resolve: {
                        sithData: SithService => {
                            return SithService.getSith();
                        }
                    },
                    controller: 'SithController',
                    controllerAs: 'Sith'
                });

        }) ;
})();