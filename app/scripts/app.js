'use strict';

/**
 * @ngdoc overview
 * @name siesteAppApp
 * @description
 * # siesteAppApp
 *
 * Main module of the application.
 */
angular
  .module('siesteAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/annonces', {
        templateUrl: 'views/annonces.html',
        controller: 'AnnoncesCtrl',
        controllerAs: 'annonces'
      })
      .otherwise({
        redirectTo: '/annonces'
      });
  });
