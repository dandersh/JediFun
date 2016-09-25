
describe('Tests for Jedi controller', function() {
    var scope, controller, jediData, createPromise, createMock, mockJediModel, $state;
    beforeEach(module('Jedi-Fun.Jedi', function($provide) {
        $provide.value('jediData', jediData = {});
    }));

    beforeEach(module('ui.router'));

    beforeEach(inject(function($controller, _$state_, $rootScope, $templateCache, $q) {
        scope = $rootScope.$new();
        
        $state = _$state_;

        createPromise = function(data) {
            var deferred = $q.defer();
            deferred.resolve(data);
            return deferred.promise;
        };

        createMock = function() {
            mockJediModel =  {
                getAll: function() {
                    return createPromise({data: [
                        {"name": "Luke Skywalker", "id": 1, "rank": "Master", "color": "green", "description": "The best ever"}
                    ]})
                }
            };
        };
        
        var createSpies = function() {
            spyOn(mockJediModel, 'getAll').and.callThrough();
        };

        createMock();
        createSpies();

        $templateCache.put('app/Views/Partials/partial-jedi-list.html', '');

        controller = $controller('JediController as Jedi', {$scope: scope, mockJediModel: mockJediModel});
        controller.jediList = [
            {"name": "Luke Skywalker", "id": 1, "rank": "Master", "color": "green", "description": "The best ever"}
        ]
    }));

    it('Jedi controller should be defined', function() {
        expect(controller).toBeDefined();
    });
    
    it('should have correct data', function() {
        expect(controller.jediList).toBeDefined();
        expect(controller.jediList.length).toBeGreaterThan(0)
    });

    it('should show description', function() {
        expect(controller.showDescription).toBeDefined();
        spyOn(controller, 'showDescription');
        controller.showDescription('updated', 'blue');
        expect(controller.showDescription).toHaveBeenCalled();
    })
});