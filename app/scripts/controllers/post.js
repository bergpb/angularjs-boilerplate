'use strict';

/**
 * @ngdoc function
 * @name angularCourseApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the angularCourseApp
 */
angular.module('angularCourseApp')
  .controller('PostCtrl', ["$scope", "$rootScope", "baseService", function ($scope, $rootScope, baseService) {
    $scope.url = "http://127.0.0.1:3000";
    $scope.posts = [];

    $scope.getData = function(){
      console.log('get data');
      baseService.list($scope.url)
      if (response.status = 200) {
          $scope.post = response.data;
          console.log($scope.post);
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.showData = function(id){
      baseService.show($scope.url + "/show/", id)
      .success(function (response) {
        if (response.status = 200) {
          $scope.post = response.data;
          console.log($scope.post);
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.sendData = function(){
      data = {
        'title': $scope.title,
        'description': $scope.description
      }
      baseService.create($scope.url + "/create", data)
      .success(function (response) {
        if (response.status = 200) {
          $scope.message = response.message;
          console.log($scope.message);
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.updateData = function(id){
      data = {
        'title': $scope.title,
        'description': $scope.description
      }
      baseService.update($scope.url + "/update/" + $scope.id, data)
      .success(function (response) {
        if (response.status = 200) {
          $scope.posts = response.data;
          console.log($scope.posts);
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.destroyData = function(id){
      baseService.destroy($scope.url + "/destroy/" + $scope.id, data)
      .success(function (response) {
        if (response.status = 200) {
          console.log('destroyed');
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

  }]);
