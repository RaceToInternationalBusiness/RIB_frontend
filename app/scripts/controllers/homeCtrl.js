'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('HomeCtrl',['$scope', '$location', 'apiService', 'teamProfile', function($scope, $location, apiService, teamProfile) {
        
	  $scope.connectionIsPossible = true;
	  
      $scope.login = function()
      {
          apiService.login({login:$scope.username,password:$scope.password},function(data)
          {
              if(data.authenticated){
            	  $scope.connectionIsPossible = true;
            	  if(data.isAdmin){
                	  $location.path('admin/create-session');
            	  }
            	  else{
                	  $location.path('client/dashboard');
                	  teamProfile.teamName = "Test";
            	  }
              }
              else{
            	  $scope.connectionIsPossible = false;
              }
          },function(err)
          {
              console.error(err);
              $scope.connectionIsPossible = false;
          });
      };

  }]);
