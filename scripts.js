
  $(function() {
    // Document is ready! All your code goes inside.
    

    $('.about').on('click', function(){
    	$(".button1").css( "display", "block" );
    	$(".button2").css( "display", "none" );
    	$(".button3").css( "display", "none" );
});
    $('.unknown').on('click', function(){
    	$(".button2").css( "display", "block" );
    	$(".button1").css( "display", "none" );
    	$(".button3").css( "display", "none" );
});
    $('.specials').on('click', function(){
    	$(".button3").css( "display", "block" );
    	$(".button1").css( "display", "none" );
    	$(".button2").css( "display", "none" );
    });

    $('.main-gallery').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });

  }); 

