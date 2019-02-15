'use strict';

/**
 * @ngdoc directive
 * @name angularCourseApp.directive:botoes
 * @description
 * # botoes
 */
angular.module('angularCourseApp')
  .directive('botoes', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the botoes directive');
      }
    };
  });
