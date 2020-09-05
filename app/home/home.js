'use strict';

angular.module('isaApp')
  .factory('HomeService', function ($http) {
    const HomeService = {};

    HomeService.getDetails = function() {
      return $http({
        method: 'GET',
        url: 'data/details.json'
      });
    }

    return HomeService;
  })
  .controller('HomeController', function(HomeService) {
    const self = this;

    self.init = function () {
      HomeService.getDetails().then(function (response) {
        self.details = response.data;
      });
    }
  });