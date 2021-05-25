$(function () {
    $('#btn-portal').on('click', function () {
        $('#left-portal').animate({
            left: '-100%',
        }, 2000 );
        $('#right-portal').animate({
            right: '-100%',
        }, 2000);
        $('#portal').animate({
            top: '-100%',
        }, 1000);
        $('#btn-portal').css('visibility', 'hidden');
        $('.header').css('visibility', 'visible');
        $('#presentation').css('visibility', 'visible');
        $('canvas').css('visibility', 'visible');
        $('body').css('overflow', 'auto');
        $('#arrow-right').css('visibility', 'visible');
        //$('body').css('background-color', '#4ca1af');
        //$('body').css('background-image', 'linear-gradient(135deg, #4ca1af 0%, #c4e0e5 100%)');
        window.scrollTo(0,0);
    });
});