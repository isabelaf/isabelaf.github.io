const backToTop = angular.module('backToTop', []);

backToTop.directive('backToTop', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.addClass('back-to-top');

      $(element).on('click', () => {
				$('html, body').animate({ scrollTop: 0 }, 'fast');
      });
      
      $(window).scroll(() => {
				if ($(window).scrollTop() <= 0) {
					$(element).fadeOut();
				} else {
					$(element).fadeIn();
				}
			});
    }
  };
});