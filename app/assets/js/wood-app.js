var APP_MODULE = function($) {

    var publicObject = {

      settings: {

      },

      elements: {

      },

      init: function() {

      }

    };

    return publicObject;

  };

var app = new APP_MODULE(jQuery);
(function($) {
  $(document).ready(function() {
    app.init();
  });
})(jQuery);
