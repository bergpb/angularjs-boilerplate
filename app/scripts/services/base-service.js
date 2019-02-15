'use strict';

/**
 * @ngdoc service
 * @name angularCourseApp.baseService
 * @description
 * # baseService
 * Service in the angularCourseApp.
 */
angular.module('angularCourseApp')
  .service('BaseService', ["$http", "$location", "$rootScope", "Config", function ($http, $location, $rootScope, config) {
    this.create = function create(url, entity) {
        var url_base = config.api + url;
        return $http.post(url_base, entity);
    }

    this.update = function update(url, id, entity) {
        var url_base = config.api + url + id;
        return $http.put(url_base, entity);
    }

    this.show = function show(url, idEntity) {
        var url_base = config.api + url;
        return $http.get(url_base + idEntity);
    }

    this.list = function list(url, params) {
        var url_base = config.api + url + "pesquisar";
        return $http.post(url_base, params);
    }

    this.destroy = function destroy(url, idEntity) {
        var url_base = config.api + url
        return $http.delete(url_base + "/" + idEntity);
    }

    return {
        create: this.create,
        update: this.update,
        show: this.show,
        list: this.list,
        destroy: this.destroy
    }
}]);
