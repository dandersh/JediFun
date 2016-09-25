describe('Tests for url routing logic', function() {
    let mockSithData, $state, templateCache, location, rootScope, deferred, $httpBackend, q, resolve;
    beforeEach(module('Jedi-Fun.Routing', function($provide) {
        $provide.value('SithService', mockSithData = {getSith: jasmine.createSpy('getSith')})
    }));
    beforeEach(module('ui.router'));
    beforeEach(inject(function($injector, $q,$templateCache, $location, $rootScope, _$state_) {
        $httpBackend = $injector.get('$httpBackend');
        deferred = $q.defer();
        q = $q;
        location = $location;
        rootScope = $rootScope;
        templateCache = $templateCache;
        $state = _$state_;

        resolve = (value) => {
            return {
                forStateAndView: function (state, view) {
                    let viewDefinition = view ? $state.get(state).views[view] : $state.get(state);
                    return $injector.invoke(viewDefinition.resolve[value]);
                }
            };
        }
    }));
    it('should load main view when not specifying url', function () {
        templateCache.put('/');
        location.url('');
        rootScope.$digest();
        expect($state.current.name).toEqual('home');
    });
    it('should redirect to 404 page when accessing invalid resource', function() {
        templateCache.put('app/Views/Partials/404.html');
        $httpBackend.expectGET('app/Views/Partials/404.html').respond('200');
        location.url('invalidUrl');
        rootScope.$digest();
        $httpBackend.flush();
        expect($state.current.name).toEqual('404');
    });
    it('should resolve sith data', function() {
        let resolved = jasmine.createSpy('resolve');
        mockSithData.getSith = () => {
            return q.when('returnedData');
        };
        resolve('sithData').forStateAndView('sith.list').then(resolved);
        rootScope.$digest();
        expect(resolved).toHaveBeenCalledWith('returnedData');

    });
});