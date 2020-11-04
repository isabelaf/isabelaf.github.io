'use strict';

const app = angular.module('isaApp', [
  'ngRoute',
  'ngSanitize',
  'navbarActive',
  'backToTop'
]);

app.config(['$locationProvider', function($locationProvider) { 
  $locationProvider.hashPrefix('');
}]);

app.config(['$routeProvider', function($routeProvider) { 
  $routeProvider
    .when('/home', {
      templateUrl: '/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm',
      title: 'Home'
    })
    .when('/projects', {
      templateUrl: '/projects/projects.html',
      controller: 'ProjectsController',
      controllerAs: 'vm',
      title: 'Projects'
    })
    .when('/', {
      redirectTo: '/home'
    })
    .otherwise({
      templateUrl: '404.html'
    });
}]);

app.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route ? current.$$route.title : '404';
  });
}]);