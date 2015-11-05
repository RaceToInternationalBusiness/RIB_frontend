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
        templateUrl: 'views/client/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
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
      .when('/admin/create-session', {
        templateUrl: 'views/admin/create-session.html',
        controller: 'CreateSessionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
