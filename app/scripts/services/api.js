'use strict';

angular.module('ribFrontendApp').service('apiService', ['$http','urlService', function ($http,urlService) {

    
    this.login = function(credentials,success,error)
    {
        $http({
            method: 'post',
            url: urlService.auth()
        }).success(success).error(error);
    };
    
    
}]);