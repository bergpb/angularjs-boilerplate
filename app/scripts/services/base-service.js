'use strict';

/**
 * @ngdoc service
 * @name angularBoilerplate.baseService
 * @description
 * # baseService
 * Service in the angularBoilerplate.
 */
angular.module('angularBoilerplate')
  .service('baseService', ['$http',
    function ($http) {
    this.create = function create(url, data) {
        return $http.post(url, data);
    };

    this.show = function show(url, id) {
        return $http.get(url + id);
    };

    this.list = function list(url, params) {
      return $http.get(url, params);
    };

    this.update = function update(url, data) {
      return $http.put(url, data);
    };

    this.destroy = function destroy(url, id) {
        return $http.delete(url + id);
    };

    return {
        create: this.create,
        show: this.show,
        list: this.list,
        update: this.update,
        destroy: this.destroy
    };
}]);
