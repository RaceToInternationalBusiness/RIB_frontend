'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('HomeCtrl',['$scope','apiService', function ($scope,apiService) {
      
      $scope.login = function()
      {
          console.log('lol');
          apiService.login({login:$scope.username,password:$scope.password},function(data)
          {
              console.log(data);
          },function(err)
          {
              console.error(err);
          });
      };

  }]);
