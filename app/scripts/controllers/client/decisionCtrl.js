'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('DecisionCtrl',['$scope', function ($scope) {
      $scope.products = [{"name":"cheap"},{"name":"normal"},{"name":"expensive"}];
      $scope.selected = $scope.products[0].name;
      $scope.select = function(product)
      {
          console.log(product);
          $scope.selected = product;
      };
  }]);
