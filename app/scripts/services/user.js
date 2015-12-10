'use strict';

angular.module('ribFrontendApp').service('userService', ['$window', '$rootScope', function ($window, $rootScope) {
    
    this.getUser = function () {
        if ($window.localStorage.user && $window.localStorage.user !== null) {
            try {
                return JSON.parse($window.localStorage.user);
            } catch (e) {
                console.log('user not in storage, will try to fetch');
            }
        }
    };

    this.setUser = function (user) 
    {
        if (typeof user !== 'undefined') {
            $window.localStorage.user = JSON.stringify(user);
            $rootScope.user = user;
            return true;
        }
        else
        {
            return false;
        }
    };

    this.emptyStorage = function () 
    {
        $rootScope.user = null;
        delete $window.localStorage.user;
    };
}]);