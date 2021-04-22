// when the document is ready 
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideMe').each( function(i){
            // find the bottom of the element and the bottom of the window 
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                // this element which is on the page now will animate to be visible over the course of half a second
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    
});