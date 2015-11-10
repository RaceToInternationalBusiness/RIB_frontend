'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('ResultsCtrl', function () {
    
	  	this.yearNumber = 3;
		this.userName = "Coucou c'est moi !";
		this.ca = 200000;
		this.profit = -30000;
		
		this.productionCapacity = 1000;
		
		this.stocks = {};
		this.stocks.quantity = 1000;
		this.stocks.value = 1000;
		
		this.sales = {};
		this.sales.proposition = 1000;
		this.sales.potential = 1000;
		this.sales.real = 1000;
		
		this.taxe = {};
		this.taxe.ht = 1000;
		this.taxe.htva = 1000;
		
		this.salePrice = {};
		this.salePrice.ttc = 1000;
		this.salePrice.ht = 1000;
		
		this.results = {};
		this.results.commercial = 1000;
		this.results.exercise = 1000;
		
		this.marketShare = 10;
	    
		this.getRemainTime = function(){
			return "6 Heures 38 Minutes";
		}
  
  });
