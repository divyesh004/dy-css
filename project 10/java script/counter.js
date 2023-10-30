$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 232,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 521,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 1463,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 15,duration: 2500});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });

$(document).ready(function() {
        setTimeout(function() {
          $('#container').addClass('loaded');
          // Once the container has finished, the scroll appears
          if ($('#container').hasClass('loaded')) {
            // It is so that once the container is gone, the entire preloader section is deleted
            $('#preloader').delay(9000).queue(function() {
              $(this).remove();
            });}
        }, 3000);});