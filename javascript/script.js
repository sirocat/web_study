jQuery(document).ready(function(){
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });


    setInterval(function(){
        $('.slidelist').delay(1000);
        $('.slidelist').animate({marginTop:-300});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginTop:-600});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginTop:0});
        $('.slidelist').delay(2000);
    });
});