'use strict';

/**
 * @ngdoc overview
 * @name angularBoilerplate
 * @description
 * # angularBoilerplate
 *
 * Main module of the application.
 */
angular
  .module('angularBoilerplate', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'swangular'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
        })
        .when('/posts', {
          templateUrl: 'views/posts.html',
          controller: 'PostCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
        $locationProvider.hashPrefix('');
    })
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8";
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
