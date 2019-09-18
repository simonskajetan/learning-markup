$(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('.header').addClass("scroll");
        $('main').addClass("scroll");
    }
    else{
        $('.header').removeClass("scroll");
        $('main').removeClass("scroll");
    }
});