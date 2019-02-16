'use strict';

/**
 * @ngdoc function
 * @name angularCourseApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the angularCourseApp
 */
angular.module('angularCourseApp')
  .controller('PostCtrl', ['$scope', '$rootScope', 'baseService', function ($scope, $rootScope, baseService) {
    $scope.url = 'http://127.0.0.1:3000/';

    $scope.getAll = function(){
      updateData();
    };

    function updateData(){
      $scope.refreshing = true;
      baseService.list($scope.url)
      .success(function (response) {
        if (response.status = 200) {
          $scope.posts = response.data;
          $scope.refreshing = false;
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    }

    $scope.new = function(){
      $scope.post = '';
      $scope.showing = false;
      $scope.creating = true;
    }

    $scope.edit = function(){
      $scope.creating = false;
      $scope.showing = false;
      $scope.updating = true;
    }

    $scope.show = function(id){
      $scope.refreshing = true;
      $scope.showing = true;
      baseService.show($scope.url + 'show/', id)
      .success(function (response) {
        if (response.status = 200) {
          $scope.post = response.data;
          $scope.refreshing = !$scope.refreshing;
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.create = function(action){
      let data = {
        'title': $scope.post.title,
        'content': $scope.post.content
      }
      $scope.refreshing = true;
      baseService.create($scope.url + 'create', data)
      .success(function (response) {
        if (response.status = 200) {
          $scope.message = response.message;
          updateData();
          utilService.show();
          $scope.refreshing = !$scope.refreshing;
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.update = function(){
      console.log($scope.post);
      let data = {
        'title': $scope.post.title,
        'content': $scope.post.content
      }
      $scope.showing = false;
      $scope.refreshing = true;
      baseService.update($scope.url + 'update/' + $scope.post.id, data)
      .success(function (response) {
        if (response.status = 200) {
          $scope.posts = response.data;
          updateData();
          $scope.refreshing = !$scope.refreshing;
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.destroy = function(id){
      $scope.refreshing = true;
      baseService.destroy($scope.url + 'delete/', id)
      .success(function (response) {
        if (response.status = 200) {
          updateData();
          $scope.post = '';
          $scope.refreshing = !$scope.refreshing;
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    // executado ao fechar o modal
    $scope.cancel = function(){
      $scope.creating = false;
      $scope.showing = true;
      $scope.updating = false;
    }

  }]);
