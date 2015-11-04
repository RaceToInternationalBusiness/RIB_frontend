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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    this.userName = "Coucou c'est moi !";
    this.ca = 200000;
    this.profit = -30000;
    this.yearNumber = 4;
    
    this.getRemainTime = function(){
    	return "6 Heures 38 Minutes";
    };
  });
