'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('TeamChoiceCtrl',['$scope', function ($scope) {
    $scope.teams = ["Team 1","Team 2","Team 3","Team 4","Team 5","Team 6","Team 7","Team 8"];
      $scope.team={places:"5"};
      $scope.selected = null;
      $scope.select = function(team)
      {
        console.log(team);
          $scope.selected = team;
      };
  }]);
