'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp').controller('DashboardCtrl', function (teamProfile) {

	this.teamProfile = teamProfile;
	  
	this.numberOfMachines = 4;

	this.getRemainTime = function(){
		return "6 Heures 38 Minutes";
	};
	
	this.buyMachine = function(){
	
	};
	
	this.askQuetion = function(){
	
	}
});
