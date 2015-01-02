$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
	clientStuff();
	
	$("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
	$(".biglink").fitText(1.5);
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function workBelt() {
  
  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit').click(function() {
    $.when($('.work-container').show()).then(function() {
      $('.work-belt').addClass("slided");
    });
  });
  
  $('.work-return').click(function() {
    $.when($('.work-container').hide()).then(function () {
      $('.work-belt').removeClass("slided");
    });
  });

}


function  workLoad() {
  
  $.ajaxSetup({ cache: true });
  
  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newfolder;
      
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
  
}




function clientStuff() {
  var position = 0;
  
  function setActiveClient() {
      var activeClass = 'active-client';
      $('.client-unit').removeClass(activeClass).eq(position).addClass(activeClass);
      $('.client-logo').removeClass(activeClass).eq(position).addClass(activeClass);
      $('.clients-mobile-nav span').removeClass(activeClass).eq(position).addClass(activeClass);
  }

  // Set the first active client
  setActiveClient();
  
  $('.client-logo, .clients-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children();

    position = $siblings.index($this);
    setActiveClient();
  });
  
  $('.client-control-next').click(function() {
    position = (position + 1) % $('.client-unit').length;
    setActiveClient();
  });
  
  $('.client-control-prev').click(function() {
    position = (position - 1) % $('.client-unit').length;
    setActiveClient();
  });
  
}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );





