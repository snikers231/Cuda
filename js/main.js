$(function () {
    $("#portfolio__tabs").tabs();
});

$(document).ready(function () {
    $('a.scroll-to-next ').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
            duration: 1000,
            easing: 'swing'
        });
        return false;
    });
});