// APP - MAIN FUNCTION CONTAINER
var app = (function() {
    function smoothScroll(target) {
        if (location.pathname.replace(/^\//, '') == target.pathname.replace(/^\//, '') &&
            location.hostname == target.hostname) {

            var target = $(target.hash);
            target = target.length ? target : $('[name=' + target.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    }

    function manageActiveClass(e) {
        e.preventDefault();
        $('#navbar > ul > li').removeClass('active');
        $(e.currentTarget).parent().addClass('active');
    }

    return {
        smoothScroll: smoothScroll,
        manageActiveClass: manageActiveClass
    };

}());



// SMOOTH SCROLL & CHANGE ACTIVE BTN`
$(function() {
    $('a[href*=#]:not([href=#])').click(function(e) {
        app.manageActiveClass(e);
        app.smoothScroll(e.currentTarget);
    });
});
