//////----TO TOP---////////
jQuery(document).ready(function ($) {
jQuery('.totop').click(function(){
	jQuery('html, body').animate({ scrollTop: 0 }, "slow");
});
});	

//////----MENU---////////
jQuery(document).ready(function ($) {
$('.navbar .dropdown').hover(function() {
	$(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
	var na = $(this)
	na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function(){ na.removeClass('extra-nav-class') })
});

$('.dropdown-submenu').hover(function() {
	$(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
	var na = $(this)
	na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function(){ na.removeClass('extra-nav-class') })
});

});	



//////----TEXT ROTATOR---////////
jQuery(document).ready(function ($) {
$('.textItem').quovolver();
  });

//////----Tiny Nav Responsive Menu---////////
 $(function () {
    $("#nav").tinyNav({
  active: 'selected', // String: Set the "active" class
  header: 'NAVIGATION', // String: Specify text for "header" and show header instead of the active item
  label: '' // String: Sets the <label> text for the <select> (if not set, no label will be added)
});
  });
  
  
//////----Placeholder for IE---////////
$(function() {
    // Invoke the plugin
    $('input, textarea').placeholder();
  });