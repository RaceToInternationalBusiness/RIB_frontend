'use strict';

/**
 * @ngdoc overview
 * @name ribFrontendApp
 * @description
 * # ribFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('ribFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'HomeCtrl'
      })
      .when('/client/dashboard', {
        templateUrl: 'views/client/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/client/signup', {
        templateUrl: 'views/client/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
        .when('/client/signup/team', {
        templateUrl: 'views/client/team-choice.html',
        controller: 'TeamChoiceCtrl',
        controllerAs: 'teamChoice'
      })
      .when('/client/decision', {
        templateUrl: 'views/client/decision.html',
        controller: 'DecisionCtrl',
        controllerAs: 'decision'
      })
      .when('/client/messages', {
        templateUrl: 'views/client/messages.html',
        controller: 'MessagesCtrl',
        controllerAs: 'messages'
      })
      .when('/client/results', {
        templateUrl: 'views/client/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .when('/client/market', {
        templateUrl: 'views/client/market.html',
        controller: 'MarketCtrl',
        controllerAs: 'market'
      })
      .when('/client/team-choice', {
        templateUrl: 'views/client/teamChoice.html',
        controller: 'TeamchoiceCtrl',
        controllerAs: 'teamChoice'
      })
      .when('/admin/create-session', {
        templateUrl: 'views/admin/create-session.html',
        controller: 'CreateSessionCtrl'
      })
     .when('/admin/create-product', {
        templateUrl: 'views/admin/create-product.html',
        controller: 'CreateProductCtrl'
      })
     .when('/admin/create-market', {
        templateUrl: 'views/admin/create-market.html',
        controller: 'CreateMarketCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('ribFrontendApp').provider('teamProfile', function(){
	this.$get = function(){
		return{
			teamName : 'Shark team',
			ca : 200000,
			profit : -30000,
			yearNumber : 3
		};		
	};
});
