'use strict';

/**
 * @ngdoc filter
 * @name angularCourseApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularCourseApp.
 */
angular.module('angularCourseApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
