'use strict';

describe('Controller: TeamchoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('ribFrontendApp'));

  var TeamchoiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamchoiceCtrl = $controller('TeamchoiceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeamchoiceCtrl.awesomeThings.length).toBe(3);
  });
});
