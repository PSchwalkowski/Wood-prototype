var APP_MODULE = function($) {

    var publicObject = {

      init: function() {

      },

			initScreenScroll: function() {
				this.animateSectionDecorators();
			},

			/**
			 * Add class to decorators which will animate them
			 * @return {void}
			 */
			animateSectionDecorators: function() {
				var decorators = $('.section-decorator');
				var _self = this;
				decorators.each(function() {
					if (_self._isInViewport(this)) {
						$('svg', this).addClass('section-decorator-load');
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
