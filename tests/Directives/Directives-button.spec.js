describe('Directive for buttons', function() {
    var rootScope, compile;
    beforeEach(module('Jedi-Fun.Directives'));
    beforeEach(inject(function($rootScope, $compile){
        rootScope = $rootScope;
        compile = $compile;
    }));

    it ('adds the default btn class to the button', function() {
        var button = compile('<button></button>')(rootScope);
        expect(button.hasClass('btn')).toBe(true);
    });

    it ('adds the primary and success classes to the button', function() {
        var button = compile('<button type="jedi"></button>')(rootScope);
        expect(button.hasClass('btn-primary')).toBe(true);
        expect(button.hasClass('btn-success')).toBe(true);
    });

    it ('adds the primary and danger classes to the button', function() {
        var button = compile('<button type="sith"></button>')(rootScope);
        expect(button.hasClass('btn-primary')).toBe(true);
        expect(button.hasClass('btn-danger')).toBe(true);
    });

    it ('adds the large class to the button', function() {
        var button = compile('<button size="lg"></button>')(rootScope);
        expect(button.hasClass('btn-lg')).toBe(true);
    });
});