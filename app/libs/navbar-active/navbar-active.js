const navbarActive = angular.module('navbarActive', []);

navbarActive.directive('navbarActive', function () {
  return {
    restrict: 'A',
    scope: {
      navbarPath: '@',
      navbarActiveClass: '@'
    },
    controller: ['$location', '$scope', function navbarController($location, $scope) {
      this.isCurrentPath = function() {
        return $location.path() === $scope.navbarPath;
      }
    }],
    link: function (scope, element, attrs, controller) {
      scope.$on('$locationChangeStart', function() {
        if (controller.isCurrentPath())
          element.addClass(scope.navbarActiveClass);
        else
          element.removeClass(scope.navbarActiveClass);
      });
    }
  };
});