'use strict';

angular.module('ribFrontendApp').service('urlService', function () {

    //this.host = 'http://localhost:9000';
    this.host = 'http://private-162dd-ribapi.apiary-mock.com';
    
    this.auth = function(){ return this.host + '/auth/';};

    this.listTeam = function(){ return this.host + '/teams/';};

    this.createTeam = function(){ return this.host + '/teams/';};

    this.addTeamMember = function(id){ return this.host + '/teams/' + id + '/members/';};
    
    this.getResults = function(id){return this.host + '/teams/' + id + '/results/';};

});