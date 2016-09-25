(function() {
    'use strict';

    let JediFunDirectives = angular.module('Jedi-Fun.Directives');

    JediFunDirectives.directive('editableText', editableText);
    
    function editableText () {
        return {
            restrict: 'E',
            link: function(scope, el, attrs){
                el.addClass('sith-description');
                $(el).click(function(clickEvt){
                    el[0].contentEditable = true;
                });
            }
        };
    };
})();

