angular.module('ribFrontendApp')
  .controller('CreateMarketCtrl', function ($scope) {
    
    $scope.myVar = false;
    $scope.ajouterDelaiPaiement = function() {
        $scope.myVar = !$scope.myVar;
    };
    
    $scope.products = ['Product 1', 'Product 2', 'Product 3' ];
    $scope.markets = ['Marché 1', 'Marché 2', 'Marché 3' ];
    $scope.sessions =['Session1','Session2','Session3'];
     $scope.indicemarchandises =  [
        { nbr: '0', indice: '0.30' },
        { nbr: '1', indice: '0.60' } 
      ];
    $scope.indiceprix =  [
        { prix: '10', indicep: '2' },
        { prix: '30', indicep: '0.15' } 
      ];
       $scope.indicepaiements =  [
        { delai: '0', indicedel: '0.65' },
        { delai: '1', indicedel: '0.95' } 
      ];
    $scope.indicpourcentagepub =  [
        { pourcentage: '20', indicepub: '0.90' },
        { pourcentage: '30', indicepub: '12' } 
      ];
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
    $scope.removepub = function (index) {
      $scope.indicpourcentagepub.splice(index, 1);
    }; 

      $scope.addindicepub = function (prpub, indicepb) {
        $scope.indicpourcentagepub.push({
          pourcentage: prpub,
          indicepub: indicepb,
        });
        
      }
    
   $scope.removeprix = function (index) {
      $scope.indiceprix.splice(index, 1);
    }; 
  
      $scope.addindiceprix = function (price, indicprix) {
        $scope.indiceprix.push({
          prix: price,
          indicep: indicprix,
        });
        
      }
      
    $scope.removepaiement = function (index) {
      $scope.indicepaiements.splice(index, 1);
    }; 
       
      $scope.addindicepaiement = function (delais, indicedel) {
        $scope.indicepaiements.push({
          delai: delais,
          indicedel: indicedel,
        });
        
      }  
      $scope.removemarchandise = function (index) {
      $scope.indicemarchandises.splice(index, 1);
    }; 

      $scope.addindicemarchandise = function (nombre, indicemarch) {
        $scope.indicemarchandises.push({
          nbr: nombre,
          indice: indicemarch,
        });
        
      }
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