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
	
	this.buyMachine = function(){
	
	};
	
	this.askQuetion = function(){
	
	};
	
	this.accessToDecisionSheet = function(){
		$location.path('client/decision');
	};
}]);
