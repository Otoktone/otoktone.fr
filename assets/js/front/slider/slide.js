$(function () {
    $('#arrow-right').on('click', function () {
        $('canvas').animate({
            left: '-100%',
        }, 1000 );
        $('.main-title').animate({
            left: '-100%',
        }, 1000 );
        $('#presentation2').animate({
            right: '0',
        }, 1000 );
        $('#arrow-right').css('visibility', 'hidden').animate({opacity: '0'}, "slow");
        $('#arrow-left').css('visibility', 'visible').animate({opacity: '1'}, "slow");
    });

    $('#arrow-left').on('click', function () {
        $('canvas').animate({
            right: '0%',
        }, 1000 );
        $('.main-title').animate({
            left: '5%',
        }, 1000 );
        $('#presentation2').animate({
            right: '-100%',
        }, 1000 );
        $('#arrow-right').css('visibility', 'visible').animate({opacity: '1'}, "slow");
        $('#arrow-left').css('visibility', 'hidden').animate({opacity: '0'}, "slow");
    });

});