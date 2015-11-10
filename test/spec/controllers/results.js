'use strict';

describe('Controller: ResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('ribFrontendApp'));

  var ResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should define some basic value', function () {
//    expect(ResultsCtrl.username).toBeDefined();
//    expect(ResultsCtrl.ca).toBeDefined();
//    expect(ResultsCtrl.profit).toBeDefined();
//    expect(ResultsCtrl.yearNumber).toBeDefined();
//    expect(ResultsCtrl.numberOfMachines).toBeDefined();
  });
});
