'use strict';

angular.module('ribFrontendApp').filter('contains',[ function () {
    return function(items, searchText) {
        var filtered = [];            

        items.forEach(function(item) {
            if(item.indexOf(searchText) !==-1) 
            {
                filtered.push(item);
            }
        });
        return filtered;
    };
}]);