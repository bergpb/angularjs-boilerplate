'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplate.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the angularBoilerplate
 */
angular.module('angularBoilerplate')
  .controller('PostCtrl', ['$scope', 'swangular', 'baseService',
  function ($scope, swangular, baseService) {
    $scope.url = 'http://127.0.0.1:3000/';

    $scope.getAll = function(){
      updateData();
    };

    function updateData(){
      $scope.post = '';
      $scope.refreshing = true;
      baseService.list($scope.url)
      .success(function (response) {
        if(response.status === "SUCCESS") {
          $scope.posts = response.data;
          $scope.refreshing = !$scope.refreshing;
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
        $scope.refreshing = !$scope.refreshing;
      })
    }

    $scope.new = function(){
      $scope.post = '';
      actions(false, true, false, false);
    }

    $scope.editPost = function(){
      actions(false, false, false, true);
    }

    $scope.showPost = function(id){
      actions(true, false, true, false);
      baseService.show($scope.url + 'show/', id)
      .success(function (response) {
        if (response.status === "SUCCESS") {
          $scope.post = response.data;
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
      })
    };

    $scope.newPost = function(){
      actions(false, true, false, false);
      let data = {
        'title': $scope.post.title,
        'content': $scope.post.content
      }
      $scope.refreshing = true;
      baseService.create($scope.url + 'create', data)
      .success(function (response) {
        if (response.status === "SUCCESS") {
          updateData();
          swangular.success('Post created.')
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
        $scope.refreshing = !$scope.refreshing;
      })
    };

    $scope.updatePost = function(){
      let data = {
        'title': $scope.post.title,
        'content': $scope.post.content
      }
      actions(false, false, false, false);
      $scope.refreshing = true;
      baseService.update($scope.url + 'update/' + $scope.post.id, data)
      .success(function (response) {
        if (response.status === "SUCCESS") {
          $scope.posts = response.data;
          updateData();
          swangular.success('Post updated.')
        }
      })
      .error(function (response, status, headers, config, scope) {
        console.log(response);
        $scope.refreshing = !$scope.refreshing;
      })
    };

    $scope.destroyPost = function(id){
      $scope.refreshing = true;
      swangular.swal({
        title: 'Are you sure?',
        text: 'Delete post? ',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, i\'m sure!'
      }).then((result) => {
        if (result.value) {
          baseService.destroy($scope.url + 'delete/', id)
          .success(function (response) {
            if (response.status === "SUCCESS") {
              updateData();
              swangular.success('Post removed.');
            }
          })
          .error(function (response, status, headers, config, scope) {
            console.log(response);
            swangular.warning(response);
            $scope.refreshing = !$scope.refreshing;
          })
        }
      })



      $scope.refreshing = !$scope.refreshing;
    }


    // executado ao fechar o modal
    $scope.cancel = function(){
      actions(true, false, false, false);
    }

    function actions(show, create, edit, update){
      $scope.show = show;
      $scope.create = create;
      $scope.edit = edit;
      $scope.update = update;
    }

  }]);
