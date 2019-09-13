
  jQuery(document).ready(function($) {


        $("#switcher-handle > #handle").toggle
  (
    function()
    {
      $('#switcher-handle').animate({left:'0px'}, {queue:false,duration:200});
      $('#switcher-handle > #handle').addClass('out');
    }
    ,function()
    {
      $('#switcher-handle').animate({left:'-212px'}, {queue:false,duration:200});
      $('#switcher-handle > #handle').removeClass('out');
    }
  );
    
    $('#style-switcher a.color-box').each(function (i) {
        var a = $(this);
        a.css({
            backgroundColor: '#' + a.attr('data-rel')
        })
    })  
 

$('select#layout').change(function () { 
  var b = $(this).children(":selected").val();
  if (b == 'boxed') {
    $(".body").attr('style', 'width:1040px;');
	$("body.boxed").attr('style', 'padding: 40px 0 50px;');

    }
	
  else if (b == 'wide') {
    $(".body").attr('style', 'width:100%; ');
	$("body.boxed").attr('style', 'padding:0;'); 
  }
});

  
    
    $('#style-switcher a.color-box').each(function (i) {
        var a = $(this);
        a.css({
       
          backgroundRepeat: "repeat",
          backgroundPosition: "49% 50%"
        })
    })    

   var switcher_skins = $('#style-switcher a.color-box');
   var switcher_link = $('#main-color');
   switcher_skins.each(function(i) {
    var color = $(this).attr('data-rel');      
   });  
   
     /*STYLESHEETS LOAD STARTS*/ 
   switcher_skins.click(function(e) {
    var color = $(this).attr('data-rel');
    var skins;
    var defaultPattern = $.cookie("portable_cookie_defaultBg");
    
	if (color == "0E8FAB") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-bluedark.css");
      var atrrHref = switcher_link.attr('href');       
    }
	
	
      if (color == "33bee5") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-blue.css");
      var atrrHref = switcher_link.attr('href');        
    }


    if (color == "44cfc8") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-bluelight.css");
      var atrrHref = switcher_link.attr('href');        
    }

     if (color == "9DC500") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-green.css");
      var atrrHref = switcher_link.attr('href');       
    }
 

    if (color == "76719a") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-lilac.css");
      var atrrHref = switcher_link.attr('href');        
    }



    if (color == "f2a020") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-orange.css");
      var atrrHref = switcher_link.attr('href');       
    }

     if (color == "e44884") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-pink.css");
      var atrrHref = switcher_link.attr('href');
       
    }


     if (color == "e7402f") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-red.css");
      var atrrHref = switcher_link.attr('href');         
    }

    if (color == "18adb5") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-teal.css");
      var atrrHref = switcher_link.attr('href');        
    }

     if (color == "f0b70c") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-yellow.css");
      var atrrHref = switcher_link.attr('href');        
    }
		
	
	 if (color == "346b7f") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-bluedark2.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	
	 if (color == "aecdcf") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-bluelight2.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "be9869") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-brown.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "bf6c2f") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-brown2.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "1abc9c") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-green2.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "7f8c8d") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-grey.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "b4ad7f") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-khaki.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "fe6c6c") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-red2.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "e66a47") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-redbrown.css");
      var atrrHref = switcher_link.attr('href');        
    }
	
	 if (color == "50e9f3") {
      switcher_link.attr('href',"https://static.upare.com/upare/css/skin-teal2.css");
      var atrrHref = switcher_link.attr('href');        
    }

  /*STYLESHEETS LOAD ENDS*/
  
  
  
  
     
    $.cookie("portable_cookie_pattern", null);   
    $.cookie("portable_cookie_bgimage",null);

    $.cookie("portable_cookie_color", color);  
    $.cookie("portable_cookie_skins", atrrHref);
    $.cookie("portable_cookie_defaultBg", defaultPattern);    
    return false;
  
   });  
   
  var color = $.cookie("portable_cookie_color");
  var portable_skins = $.cookie("portable_cookie_skins");
  var defaultPattern = $.cookie("portable_cookie_defaultBg");
  var pattern = $.cookie("portable_cookie_pattern");
  
  if (portable_skins) {
    $("#main-color").attr("href",portable_skins);
    
	$('body').css({		
          backgroundRepeat: "repeat",
          backgroundPosition: "49% 50%"
    });
	
  }
  
  

  $('#style-switcher a.bg-box').click(function (e) {
      e.preventDefault();
      var patternUrl = 'url(https://static.upare.com/upare/img/bg/' + $(this).attr('data-rel') + '.png)';
      $('body').css({
          backgroundImage: patternUrl,
          backgroundRepeat: "repeat"
      });
      $.cookie("portable_cookie_bgimage",null);
      $.cookie("portable_cookie_pattern", patternUrl)
  });
  
  var defaultPattern = $.cookie("portable_cookie_defaultBg");
  var color = $.cookie("portable_cookie_color");
  var background = $.cookie("portable_cookie_bgimage");
 if (color) {
      $('body').css({
          backgroundColor: '#' + color,
          backgroundImage : defaultPattern
      });
  }
  var pattern = $.cookie("portable_cookie_pattern");
  if (pattern) {
      $('body').css({
          backgroundImage: pattern,
          backgroundRepeat: "repeat",
		  backgroundPosition: "49% 50%",
		  backgroundSize: "auto"
		  
		  
      });
  } else {
    if (background) {
        $('body').css({
          backgroundImage: background,
          backgroundRepeat: "repeat",
          backgroundPosition: "49% 50%",
		   backgroundSize: "cover"
        
        });
    }    
  }  

  $('#style-switcher a.bg-box').each(function (i) {
    var backgroundUrl = 'url(https://static.upare.com/upare/img/bg/' + $(this).attr('data-rel') + '.png)';
    var a = $(this);
      a.css({
          backgroundImage: backgroundUrl,
		   backgroundRepeat: "repeat",
		  backgroundAttachment: "local",
		  backgroundSize: "auto"
      })
  })
    
  $('#style-switcher a.bg-box').click(function (e) {
      e.preventDefault();
      var backgroundUrl = 'url(https://static.upare.com/upare/img/bg/' + $(this).attr('data-rel') + '.png)';
      $('body').css({
          backgroundImage: backgroundUrl,
          backgroundRepeat: "repeat",
		  backgroundAttachment: "local",
		  backgroundSize: "auto"
        
        
      });
    $.cookie("portable_cookie_pattern",backgroundUrl)
  });
  
  
  
  
  
  
  
  
  var pattern = $.cookie("portable_cookie_bgimage");
  if (pattern) {
      $('body').css({
          backgroundImage: pattern,
          backgroundRepeat: "repeat",
		  backgroundPosition: "49% 50%",
		  backgroundSize: "auto"
		  
		  
      });
  } else {
    if (background) {
        $('body').css({
          backgroundImage: background,
          backgroundRepeat: "repeat",
          backgroundPosition: "49% 50%",
		   backgroundSize: "cover"
        
        });
    }    
  }  
  
    $('#style-switcher a.bgimg-box').each(function (i) {
    var backgroundUrl = 'url(https://static.upare.com/upare/img/bg/' + $(this).attr('data-rel') + '.jpg)';
    var a = $(this);
      a.css({
          backgroundImage: backgroundUrl,
          backgroundRepeat: "no-repeat",
		  backgroundAttachment: "fixed",
		   backgroundSize: "cover",
		   backgroundPosition: "49% 50%"
      })
  })
    
  $('#style-switcher a.bgimg-box').click(function (e) {
      e.preventDefault();
      var backgroundUrl = 'url(https://static.upare.com/upare/img/bg/' + $(this).attr('data-rel') + '.jpg)';
      $('body').css({
          backgroundImage: backgroundUrl,
          backgroundRepeat: "no-repeat",
		  backgroundAttachment: "fixed",
		   backgroundSize: "cover",
		   backgroundPosition: "49% 50%"
		 
        
        
      });
    $.cookie("portable_cookie_bgimage",backgroundUrl)
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  var background = $.cookie("portable_cookie_bgimage");
  if (background) {
      $('body').css({
        backgroundImage: background,
          backgroundRepeat: "no-repeat",
		  backgroundAttachment: "fixed",
		   backgroundSize: "cover",
		   backgroundPosition: "49% 50%"
      
      
      });
  }
         
});   
