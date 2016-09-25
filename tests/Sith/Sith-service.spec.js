describe('Tests for Sith service', function() {
    var SithService, $httpBackend, deferred, mockSithData, sithValue, rootScope, sithPromise;
    beforeEach(module('Jedi-Fun.Sith'));

    beforeEach(inject(function($injector, $q, $rootScope) {
        SithService = $injector.get('SithService');
        $httpBackend = $injector.get('$httpBackend');
        deferred = $q.defer();
        rootScope = $rootScope;

        mockSithData = [
            {"name": "Darth Sidious", "id": 1, "rank": "Lord", "color" : "red", "description": "Really should have been more prominent in prequels"}
        ];
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Sith service mock should be defined', function() {
        expect(SithService).toBeDefined();
    });

    it('Should successfully resolve a promise', function() {
        spyOn(SithService, 'getSith').and.returnValue(deferred.promise);

        // Could probably call this after setting the sithValue in the promise as the operation is async and requires a
        // a digest update, but it is placed here to be explicit.
        expect(sithValue).toBeUndefined();

        sithPromise = deferred.promise;
        sithPromise.then(function(value) {
            sithValue = value;
        });

        deferred.resolve('sith');
        rootScope.$apply();
        expect(sithValue).toBe('sith')
    });

    it('Should make a successful GET', function() {
        $httpBackend.when('GET', '../app/Models/sith.json').respond(mockSithData);
        $httpBackend.expectGET('../app/Models/sith.json');
        spyOn(SithService, 'getSith').and.callThrough();
        SithService.getSith();
        $httpBackend.flush();
        expect(SithService.getSith).toHaveBeenCalled();
    });

});
