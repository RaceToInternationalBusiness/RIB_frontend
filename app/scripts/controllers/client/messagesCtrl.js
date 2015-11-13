'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('MessagesCtrl', function () {
	  
	  this.messages = [
	                   {
	                	 author:"admin",
	                	 date:2,
	                	 message:"qsdfh f sqldf q"
	                   },
	                   {
	                	 author:"admin",
	                	 date:2,
	                	 message:"qsdfh f sqldf q"   
	                   },
	                   {
	                	 author:"team",
	                	 date:2,
	                	 message:"qsdfh QG QFD qg dfg sfd g sdf g sfg s g sf g f gs df gs dfg s dfg sdf g q fgs f gs dfg  GD SFG SDF s hs dh sd hs gfh sfgh f sqldf q"	                   },
	                   {
	                	 author:"admin",
	                	 date:2,
	                	 message:"qsdfh f sqldf q"	                   }	                   
	                   
	                   ];
	  
	  this.create = function(){
		  
	  }
	  
  });
