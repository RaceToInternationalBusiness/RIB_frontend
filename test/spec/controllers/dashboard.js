'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('ribFrontendApp'));

  var DashboardcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardcontrollerCtrl = $controller('DashboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should define some basic value', function () {
//    expect(DashboardcontrollerCtrl.username).toBeDefined();
//    expect(DashboardcontrollerCtrl.ca).toBeDefined();
//    expect(DashboardcontrollerCtrl.profit).toBeDefined();
//    expect(DashboardcontrollerCtrl.yearNumber).toBeDefined();
//    expect(DashboardcontrollerCtrl.numberOfMachines).toBeDefined();
  });
});
