'use strict';

/**
 * @ngdoc overview
 * @name angularCourseApp
 * @description
 * # angularCourseApp
 *
 * Main module of the application.
 */
angular
  .module('angularCourseApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/posts', {
          templateUrl: 'views/posts.html',
          controller: 'PostCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
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
