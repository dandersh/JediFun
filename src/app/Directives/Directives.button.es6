(function() {
    'use strict';

    let JediFunDirectives = angular.module('Jedi-Fun.Directives');

    JediFunDirectives.directive('button', button);

    function button() {
        return {
            restrict: 'E',
            compile: function(el, attrs) {
                el.addClass('btn');
                if (attrs.type === 'jedi') {
                    el.addClass('btn-primary btn-success');
                }

                if (attrs.type === 'sith') {
                    el.addClass('btn-primary btn-danger');
                }

                if (attrs.size) {
                    el.addClass('btn-' + attrs.size);
                }
            }
        }
    }
})();