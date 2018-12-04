$(function(){
    //Full screen background image
    $(window).on('load resize',function(){
        $('.fill-screen').css('height',window.innerHeight);
    });
    
    //Photos slides show - Carousel
    $('#myCarousel').on('slide.bs.carousel', function () {
        $('.carousel').carousel();
    })
    
   
              
    //Scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset:160
    })
    
    //Smooth scrolling
    $('nav a, .down-button a').bind('click',function(){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top-100},1500,'easeInOutExpo');
        event.preventDefault();
    });
    
    //initialise Wow for animated element
    new WOW().init();
    
    
});

