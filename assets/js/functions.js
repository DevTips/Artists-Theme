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
  // We treat logos as representation of our clients, so 
  // we find all elements with class of `.client-logo` and 
  // save it to a `clients` variable.
  var clients = $('.client-logo');

  // By default, we want first client to be active on page load,
  // so let's pretend we already have a function that makes a client active.
  //
  // We'll worry about how exactly it does it later, for now we just want
  // it to make sense. (Usually this approach referred to as `Top-down design`.)
  setActiveClient( clients.first().index() );
  // `clients.first()` will give us a first element from the `clients` collection.
  //
  // Calling `.index()` on it will give us it's index, which, since it's the first
  // element will always be `0` (because in programming we count from zero).

  // Why we want a function?
  // Functions let us combine set of code that does some "thing" and
  // we'd like to do that "thing" several times. Using functions forces us
  // to think in terms of steps or "modules" that our program consists of.
  // It also allows us to change what and how exactly "thing" is done 
  // more easily, since it's just in one place.
  //
  // So why we didn't simply write `setActiveClient(0)`?
  // Mainly because it explicitly tells anybody who will read this code later
  // that this function expects index and not just element.
  //
  // Why we need index of the client and not just client?
  // It's a decision we made when creating `setActiveClient` function,
  // because it allows us to easily tell `setActiveClient` to get
  // next or previous client.
  // We wouldn't know this from a get-go, it's just a matter of becoming
  // familiar with a particular problem. (You are looking at the 
  // third rewrite of this code, by the way.)

  // Now we want to specify what happens when user interacts with controls,
  // so we attach event handlers that would "fire" when users "triggers" an
  // event. Again, anonymous functions give us ability to group together 
  // a piece of code that does some "thing".
  //
  // When a user clicks on a logo, we want that client (since logos are clients)
  // to become active:
  $('.client-logo, .clients-mobile-nav span').click(function() {
    var clickedClient = $(this).index();
    setActiveClient(clickedClient);
  });
  // $(this) is a jQuery-specific thing that gives us back an element
  // with which user interacted, so in this case it will give us a logo
  // which user clicked.
  //
  // We could just write `setActiveClient( $(this).index() )`
  // but it doesn't tell the reader much.
  
  // When user clicks next/previous client arrow, we want next/previous
  // client to become active.
  //
  // What does a next/previous client mean?
  // Next client is a client after the currently active one and
  // previous client is a client before currently active one.
  //
  // Let's pretend that we have function `getActiveClient` that would 
  // find currently active client for us.
  $('.client-control-next').click(function() {
    var activeClient = getActiveClient();
    setActiveClient(activeClient + 1);
  });
  $('.client-control-prev').click(function() {
    var activeClient = getActiveClient();
    setActiveClient(activeClient - 1);
  });
  // We could write `setActiveClient( getActiveClient() + 1 )` (inline function call),
  // but I think it's harder to read.
  //
  // Notice that we do not care if we try to call `setActiveClient` function
  // with nonexistent index (1 after last logo or 1 before first logo),
  // `setActiveClient` is responsible for dealing with these nuances, since
  // we assigned it to this role.

  // Now that we are done with general outline of a program, let's implement
  // those functions we were using.

  function getActiveClient() {
    // To get active client we just find a client logo that has `active-client`
    // class and, since we are decided to work  with indexes, find out it's index.
    return $('.client-logo.active-client').index();
  }

  function setActiveClient(index) {
    // To set a client as active we need to know that passed index was
    // within the range of possible client indexes.
    //
    // We find out our bounds:
    var firstClientIndex = 0;
    var lastClientIndex = clients.length - 1;

    // And wrap around if the index is beyond out bounds.
    if (index > lastClientIndex) { index = firstClientIndex; }
    if (index < firstClientIndex) { index = lastClientIndex; }
    // Notice how if we would decide to change this behaviour to say
    // stay on the last element instead of wrapping to first and
    // vice versa, we only need to make change in one place and
    // more importantly in sole place that is responsible for this logic.

    // Now that we know `index` is a valid client index we remove `active-client`
    // class from all logos, find logo with `index` index and add `active-client`
    // class to it.
    $('.client-logo').removeClass('active-client').eq(index).addClass('active-client');
    // And we do the same with `.client-unit` elements, 
    // since each logo has a unit associated with it.
    $('.client-unit').removeClass('active-client').eq(index).addClass('active-client');
    $('.clients-mobile-nav span').removeClass('active-client').eq(index).addClass('active-client');
  }

  // While we don't deal much with JavaScript on DevTips, it's good to
  // take a note about readability, maintainability and separation of concerns
  // and apply this knowledge to other areas of web development.
}








