describe('Tests for Jedi service', function() {
    var JediService, $httpBackend, deferred, mockJediData, jediValue, rootScope, jediPromise;
    beforeEach(module('Jedi-Fun.Jedi'));

    beforeEach(inject(function($injector, $q, $rootScope) {
        JediService = $injector.get('JediService');
        $httpBackend = $injector.get('$httpBackend');
        deferred = $q.defer();
        rootScope = $rootScope;

        mockJediData = [
            {"name": "Luke Skywalker", "id": 1, "rank": "Master", "color": "green", "description": "The best ever"}
        ];
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Jedi service mock should be defined', function() {
        expect(JediService).toBeDefined();
    });

    it('Should successfully resolve a promise', function() {
        spyOn(JediService, 'getJedi').and.returnValue(deferred.promise);

        // Could probably call this after setting the jediValue in the promise as the operation is async and requires a
        // a digest update, but it is placed here to be explicit.
        expect(jediValue).toBeUndefined();

        jediPromise = deferred.promise;
        jediPromise.then(function(value) {
            jediValue = value;
        });

        deferred.resolve('jedi');
        rootScope.$apply();
        expect(jediValue).toBe('jedi')
    });

    it('Should make a successful GET', function() {
        $httpBackend.when('GET', '../app/Models/jedis.json').respond(mockJediData);
        $httpBackend.expectGET('../app/Models/jedis.json');
        spyOn(JediService, 'getJedi').and.callThrough();
        JediService.getJedi();
        $httpBackend.flush();
        expect(JediService.getJedi).toHaveBeenCalled();
    });

});
