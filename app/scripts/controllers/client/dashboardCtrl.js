'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('DashboardCtrl', function () {

    this.userName = "Coucou c'est moi !";
    this.ca = 200000;
    this.profit = -30000;
    this.yearNumber = 4;
    this.year = 3;
    this.numberOfMachines = 4;
    
    this.getRemainTime = function(){
    	return "6 Heures 38 Minutes";
    };
    
    this.buyMachine = function(){
    	
    };
    
    this.askQuetion = function(){
    	
    }
  });