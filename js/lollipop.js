$(document).ready(function(){
  $("#team-slider").owlCarousel({
    items : 4,
    itemsCustom : false,
    itemsDesktop : [5000,4],
    itemsDesktopSmall : [1200,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [350,1],
  });
   $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
});