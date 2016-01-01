'use strict';

angular.module('ribFrontendApp').service('apiService', ['$http','urlService', function ($http,urlService) {

    
    this.login = function(credentials,success,error)
    {
        $http({
            method: 'post',
            url: urlService.auth()
        }).success(success).error(error);
    };
    
    this.listTeam = function(credentials,success,error){
    	$http({
            method: 'get',
            url: urlService.listTeam()
        }).success(success).error(error);
    }
    
    this.createTeam = function(credentials,success,error){
    	$http({
            method: 'post',
            url: urlService.createTeam()
        }).success(success).error(error);
    }
    
    this.addTeamMember = function(id, credentials, success, error){
    	$http({
            method: 'post',
            url: urlService.addTeamMember(id)
        }).success(success).error(error);
    } 
    
    this.getResults = function(id, credentials, success, error){
    	$http({
            method: 'get',
            url: urlService.getResults(id)
        }).success(success).error(error);
    } 
    
}]);