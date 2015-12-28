'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('SignupCtrl', ['apiService', '$location', '$routeParams', '$scope', function (apiService, $location, $routeParams, $scope) {

	  /*
	   * signup part
	   */
	  this.showTeam = false;
	  this.errorSignup = false;
	  
	  this.inscription = function(){
		  if(!angular.isUndefined(this.nom) && !angular.isUndefined(this.prenom) && !angular.isUndefined(this.email) && !angular.isUndefined(this.etablissement)){
			  this.showTeam = true;
			  this.errorSignup = false;
		  }
		  else{
			  this.errorSignup = true;
		  }
	  };
	  
	  
	  /*
	   * team part
	   */
	  
	  this.test = [
	               {
	            	    "_id": "aze153dsfsdfa1ea53",
	            	    "name": "team1",
	            	    "session": "ab512354c354e5b54f5c3a",
	            	    "created": "2015-08-05T08:40:51.620Z",
	            	    "members": [
	            	      {
	            	        "firstname": "Taylor",
	            	        "lastname": "Swift",
	            	        "email": "taylor.swift@gmail.com",
	            	        "institution": "university"
	            	      },
	            	      {
	            	        "firstname": "Nicolas",
	            	        "lastname": "Loyd",
	            	        "email": "nicolas.loyd@gmail.com"
	            	      },
	            	      {
	            	        "firstname": "Paul",
	            	        "lastname": "Klein",
	            	        "email": "paul.klein@gmail.com"
	            	      },
	            	      {
	            	        "firstname": "Alwin",
	            	        "lastname": "Vouix",
	            	        "email": "alwin.vouix@gmail.com"
	            	      }
	            	    ]
	            	  },
	            	  {
	            	    "_id": "hgfhfg4fdgsfd12",
	            	    "name": "JackTeam",
	            	    "session": "ab512354c354e5b54f5c3a",
	            	    "created": "2015-08-05T08:40:51.620Z",
	            	    "members": [
	            	      {
	            	        "firstname": "Jacques",
	            	        "lastname": "Black",
	            	        "email": "jacques.black@gmail.com"
	            	      },
	            	      {
	            	        "firstname": "Jack",
	            	        "lastname": "Brel",
	            	        "email": "jack.brel@gmail.com"
	            	      },
	            	      {
	            	        "firstname": "Jake",
	            	        "lastname": "Dexter",
	            	        "email": "jake.dexter@gmail.com"
	            	      },
	            	      {
	            	        "firstname": "Jak",
	            	        "lastname": "Three",
	            	        "email": "jak.three@gmail.com"
	            	      }
	            	    ]
	            	  }
	            	];
	  
	  this.teams = [];
	  this.selected = '';
	
	  this.select = function(team){
		  console.log(team);
		  this.selected = team.name;
		  console.log(this.selected);

	  };
	  
	  this.isSelected = function(team){
		  return (team.name == this.selected);
	  }
    
	  this.listTeam = function(){
		  //apiService.listTeam({},function(data){
        	
			  angular.forEach(this.test, function(value, key){
				  var temp = {};
				  temp.name = value.name;
				  temp.id = value._id;
				  this.push(temp);
			  }, this.teams);
        	console.log(this.teams);
		 /* },function(err){
			  console.error(err);
		 });*/
	  };
	  this.listTeam();
	  
	  $scope.errorTeamName = false;
	  $scope.errorValidation = false;
	  
	  this.createTeam = function(){
		  if(angular.isUndefined(this.teamName)){
			  $scope.errorTeamName = true;
		  }
		  else{
			  $scope.errorTeamName = false;
			  apiService.createTeam({name:this.teamName,session:$routeParams.session_id},function(data){
				  $scope.errorTeamName = false;
				  var temp = {};
				  temp.name = data.name;
				  temp.id = data._id;
				  this.teams.push(temp);
			  },function(err){
				  console.error(err);
				  $scope.errorTeamName = true;
			  });
		  }        
	  };
	  
	  this.selectTeam = function(){
		  apiService.addTeamMember(this.selected, {firstname:this.prenom,lastname:this.nom, email:this.email},function(data){
			  $scope.errorValidation = false;
			  $location.path('client/dashboard');
          },function(err){
              console.error(err);
              $scope.errorValidation = true;
          });
	  }
    
  }]);
