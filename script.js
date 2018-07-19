$(function () {
    $('.toggles button').on('click', function () {
        let get_id = this.id;
        if (get_id === 'showall') return $('.post').show(500);

        let get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });
});

$(document).ready(function(){

    let items = $(window).width() > 420 ? 8 : 3;

    $(".owl-carousel").owlCarousel({
        items,
        margin: 25
    });
});