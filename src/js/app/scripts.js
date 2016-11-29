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

// mobile menu toggle
$.fn.tableToggle = function(){
    var container = $(this),
        toggleBtn = $('.section-sales__table-toggle', container);

    toggleBtn.click(function(e) {
        e.preventDefault();
        // fa-times fa-bars
        if ($('.btn-sales',$(this)).hasClass('fa-plus')) {
            $('.btn-sales',$(this)).removeClass('fa-plus');
            $('.btn-sales',$(this)).addClass('fa-minus');
            $(this).next('.section-sales__table').show();
            $(this).addClass('-open');
        } else {
            $('.btn-sales',$(this)).removeClass('fa-minus');
            $('.btn-sales',$(this)).addClass('fa-plus');
            $(this).next('.section-sales__table').hide();
            $(this).removeClass('-open');
        }
    })
}

// scroll to sections
$.fn.scrolltoSection = function(){
    var context = $(this),
        body = $('html, body'),
        links = $('a[data-goto]', context),
        offset = 50;

    links.click(function(e) {
        e.preventDefault();
        var target = $("section[data-target='" + $(this).data('goto') +"']");
        setTimeout(function(){
            body.stop(true, true).animate({ scrollTop: target.offset().top - offset }, 600);
        }, 50);
    })
}

$(function(){
    $('.-menu-bars').menuToggle();
    $('.section-sales-container').tableToggle();
    $('.section-intro__buttons').scrolltoSection();
    $('.carousel-now-selling').slick({
        // setting-name: setting-value
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="btn-carousel-control -prev"><i class="carousel-control__btn fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="btn-carousel-control -next"><i class="carousel-control__btn fa fa-chevron-right"></i></div>',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 555,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});