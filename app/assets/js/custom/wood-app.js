var APP_MODULE = function($) {

    var publicObject = {

      init: function() {

      },

			initScreenScroll: function() {
				this.initNavbar();
				this.animateSVG();
			},

			initNavbar: function() {
				if ($(window).scrollTop() > 120) {
					$('.navbar-top').addClass('navbar-small');
				} else {
					$('.navbar-top').removeClass('navbar-small');
				}
			},

			/**
			 * Animate SVG
			 * @return {void}
			 */
			animateSVG: function() {
				var svgList = $('.svg-animate');
				var _self = this;
				svgList.each(function(i, svg) {
					if (_self._isInViewport(this)) {
						if ($(this).data('delay') > 0) {
							setTimeout(function () {
								$(svg).addClass('svg-load');
							}, $(this).data('delay'));
						} else {
							$(this).addClass('svg-load');
						}
					}
				});
			},

			/**
			 * Check if element is in viewport
			 * @see http://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport#answer-40658647
			 * @param  {DOM Element} element
			 * @return boolean
			 */
			_isInViewport: function(element) {
		    var elementTop = $(element).offset().top;
		    var elementBottom = elementTop + $(element).outerHeight();

		    var viewportTop = $(window).scrollTop();
		    var viewportBottom = viewportTop + $(window).height();

		    return elementBottom > viewportTop && elementTop < viewportBottom;
			}

    };

    return publicObject;
  };

var app = new APP_MODULE(jQuery);
(function($) {
  $(document).ready(function() {
    app.init();
  });

	$(window).on('scroll', function() {
		app.initScreenScroll();
	});
})(jQuery);
