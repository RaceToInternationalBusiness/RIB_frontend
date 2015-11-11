'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:MarketCtrl
 * @description
 * # MarketCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('MarketCtrl', function () {
    
	  this.stock = {};
	  
	  this.stock.withoutBrand = 3000;
	  this.stock.middleOfTheRange = 2000;
	  this.stock.topOfTheRange = 1500;
	  
	  this.teams = 
			  [{
				  teamName: "Elronde",
				  withoutBrand: 5,
				  middleOfTheRange: 15,
				  topOfTheRange: 50
			  },
			  {
				  teamName: "Valhalla",
				  withoutBrand: 5,
				  middleOfTheRange: 15,
				  topOfTheRange: 50
			  },
			  {
				  teamName: "Ares",
				  withoutBrand: 5,
				  middleOfTheRange: 15,
				  topOfTheRange: 50
			  }];

  });
