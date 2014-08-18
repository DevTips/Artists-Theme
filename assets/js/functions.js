$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
	
	clientStuff();
	
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
    $('.work-belt').addClass("slided");
    $('.work-container').show();
  });
  
  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
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
  // We treat logos as representation of our clients.
  var clients = $('.client-logo');

  // Set first client as active.
  setActiveClient(clients.first().index());

  $('.client-logo').click(function() {
    var clickedClient = $(this).index();
    setActiveClient(clickedClient);
  });
  $('.client-control-next').click(function() {
    var activeClient = getActiveClient();
    setActiveClient(activeClient + 1);
  });
  $('.client-control-prev').click(function() {
    var activeClient = getActiveClient();
    setActiveClient(activeClient - 1);
  });

  function getActiveClient() {
    return $('.client-logo.active-client').index();
  }

  function setActiveClient(index) {
    var firstClientIndex = 0; // Indexes are zero-based
    var lastClientIndex = clients.length - 1;

    // Wrap around, don't look for nonexistent clients.
    if (index > lastClientIndex) { index = firstClientIndex; }
    if (index < firstClientIndex) { index = lastClientIndex; }

    $('.client-logo').removeClass('active-client').eq(index).addClass('active-client');
    $('.client-unit').removeClass('active-client').eq(index).addClass('active-client');
  }
}








