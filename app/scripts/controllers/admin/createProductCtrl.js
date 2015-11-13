angular.module('ribFrontendApp')
  .controller('CreateProductCtrl', function ($scope) {
    $scope.products = ['Product 1', 'Product 2', 'Product 3' ];
    $scope.addProduct = function () {
      $scope.products.push($scope.product);
      $scope.product = '';
    };
    $scope.removeProduct = function (index) {
      $scope.products.splice(index, 1);
    };
     $scope.selected = null;
      $scope.select = function(product)
      {
        console.log(product);
          $scope.selected = product;
      };
  });