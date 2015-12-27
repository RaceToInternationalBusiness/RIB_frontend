'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('TeamChoiceCtrl',['apiService', function (apiService) {
	
    this.teams = [];
    this.teamChoice.team.name = "";
    this.team={places:"5"};
    this.selected = null;

    this.select = function(team){
    	console.log(team);
    	this.selected = team;
    };
    
    
    this.listTeam = function(){
        apiService.listTeam({},function(data){
        	
        	angular.forEach(data, function(value, key){
        	    this.teams.push(value.name);
    	    });
        	
        },function(err){
            console.error(err);
        });
    };
    
    this.createTeam = function(){
        apiService.createTeam({name:this.teamChoice.team.name,session:$scope.password},function(data){
        	

        	
        },function(err){
            console.error(err);
        });
    };
    
    this.listTeam();
    
}]);
