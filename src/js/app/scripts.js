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
});