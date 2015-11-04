'use strict';

/**
 * @ngdoc function
 * @name ribFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardcontrollerCtrl
 * Controller of the ribFrontendApp
 */
angular.module('ribFrontendApp')
  .controller('CreateSessionCtrl',['$scope','$filter', function ($scope,$filter) {
      
    $scope.selectedProducts = function () {
        $scope.session.products = $filter('filter')($scope.session.market.products, {checked: true});
    }
    
    $scope.processEmails = function()
    {
        $scope.session.participants = $scope.session.participants.concat($scope.emails.split(','));
        //ne pas valider si email non correcte
        $scope.emails="";
    };

    $scope.markets = [
        {
            "_id":"sd35f34d1v6d5g43f1f",
            "name":"Champagne",
            "products":[
                {"name":"Cheap",
                 },
                {"name":"Moyen",
                },
                {"name":"Luxe",
                }
            ]
        },
        {
            "_id":"fd35g4dfx6sdg534fvc1wf",
            "name":"Café",
            "years":5,
            "products":[
                {"name":"Cheap",
                "configuration":[
                     {},
                     {},
                     {},
                     {},
                 ]},
                {"name":"Moyen",
                },
                {"name":"Luxe",
                }
            ]
        }];
      
      $scope.session = {"market":{},"products":[],"years":"1",participants:[]};
  }]);
