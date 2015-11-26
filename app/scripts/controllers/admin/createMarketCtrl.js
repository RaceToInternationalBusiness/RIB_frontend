angular.module('ribFrontendApp')
  .controller('CreateMarketCtrl', function ($scope) {
    $scope.markets = ['Marché 1', 'Marché 2', 'Marché 3' ];
    $scope.addMarket = function () {
      $scope.markets.push($scope.market);
      $scope.market = '';
    };
    $scope.removeProduct = function (index) {
      $scope.markets.splice(index, 1);
    };
     $scope.selected = null;
      $scope.select = function(market)
      {
        console.log(market);
          $scope.selected = market;
      };
  });