$(function () {
    $('#arrow-right').on('click', function () {
        $('canvas').animate({
            left: '-100%',
        }, 1000 );
        $('.main-title').animate({
            left: '-100%',
        }, 1000 );
        $('#presentation2').animate({
            left: '0',
        }, 1000 );
        $('#arrow-right').css('visibility', 'hidden');
        $('#arrow-left').css('visibility', 'visible');
    });

    $('#arrow-left').on('click', function () {
        $('canvas').animate({
            left: '0%',
        }, 1000 );
        $('.main-title').animate({
            left: '5%',
        }, 1000 );
        $('#presentation2').animate({
            left: '-100%',
        }, 1000 );
        $('#arrow-right').css('visibility', 'visible');
        $('#arrow-left').css('visibility', 'hidden');
    });
});