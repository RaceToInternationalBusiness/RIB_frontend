'use strict';

angular.module('ribFrontendApp').service('urlService', function () {

    //this.host = 'http://localhost:9000';
    this.host = 'http://private-162dd-ribapi.apiary-mock.com';
    
    this.auth = function(){ return this.host+'/auth/';};


});