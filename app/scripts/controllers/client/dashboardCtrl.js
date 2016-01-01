'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp').controller('DashboardCtrl', ['$location', 'teamProfile', function ($location, teamProfile) {

	this.teamProfile = teamProfile;

	this.numberOfMachines = 4;

	this.getRemainTime = function(){
		teamProfile
	};
	
	this.sendMessage = function(){
		$location.path('client/messages');
	};
	
	
	this.accessToDecisionSheet = function(){
		$location.path('client/decision');
	};
	
	this.allYear = function(){
		return new Array(teamProfile.maxYear);
	}
	
	this.getYearResult = function(year){
		$location.path('client/results/').search({choosenYear: year});;
	}
}]);
