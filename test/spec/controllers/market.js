'use strict';

describe('Controller: MarketCtrl', function () {

  // load the controller's module
  beforeEach(module('ribFrontendApp'));

  var MarketCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarketCtrl = $controller('MarketCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarketCtrl.awesomeThings.length).toBe(3);
  });
});
