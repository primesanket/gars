/****************** 3. COUNT FUNCTION STARTS******************/

$('.funfacts-num').appear(function() {
	  // custom formatting example
      $('.funfacts-num').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });
      // start all the timers
      $('.timer').each(count);
      
            // restart a timer when a button is clicked
    $( ".restart" ).on({
					     click: function(event) {
        event.preventDefault();
        var target = $(this).data('target');
        count.call($(target));
  }
      });
      
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });

/****************** 3. COUNT FUNCTION ENDS******************/
    
