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
      .when('/client/results', {
        templateUrl: 'views/client/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .when('/admin/create-session', {
        templateUrl: 'views/admin/create-session.html',
        controller: 'CreateSessionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
