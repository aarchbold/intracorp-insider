/* eslint-disable */

// mobile menu toggle
$.fn.menuToggle = function(){
    var menuBtn = $(this),
        menuContainer = $('.nav-tools__menu');

    menuBtn.click(function(e) {
        e.preventDefault();
        // fa-times fa-bars
        if (menuBtn.hasClass('fa-bars')) {
            menuBtn.addClass('fa-times');
            menuBtn.removeClass('fa-bars');
            menuContainer.show();
        } else {
            menuBtn.addClass('fa-bars');
            menuBtn.removeClass('fa-times');
            menuContainer.hide();
        }
    })

}

$(function(){
    $('.-menu-bars').menuToggle();
    $('.carousel-now-selling').slick({
        // setting-name: setting-value
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="btn-carousel-control -prev"><i class="carousel-control__btn fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="btn-carousel-control -next"><i class="carousel-control__btn fa fa-chevron-right"></i></div>'
    });
});