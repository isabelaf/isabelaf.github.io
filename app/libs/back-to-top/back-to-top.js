const backToTop = angular.module('backToTop', []);

backToTop.directive('backToTop', function () {
  return {
    restrict: 'A',
    controller: [function BackToTopController() {
      var self = this;

      self.css = {
        'z-index': '2',
        'display': 'none',
        'bottom': '0',
        'position': 'fixed',
        'margin-left': '1em',
        'margin-bottom': '1em',
        'transition': 'transform .5s'
      };
    }],
    link: function (scope, element, attrs, controller) { 
      element.css(controller.css);

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