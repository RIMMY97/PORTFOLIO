$("document").ready(function () {

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    $(".swiper-container").hover(function () {
        (this).swiper.autoplay.stop();
    }, function () {
        (this).swiper.autoplay.start();
    });
    
    //main slider
    $(window).scroll(function () {
        var pos = $(window).scrollTop();

        if (pos >= 500) {
            $("nav").addClass("fixed");
            $(".bg").addClass("on");
        } else {
            $("nav").removeClass("fixed");
            $(".bg").removeClass("on");
        }
    })
    //nav

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });

    //금융 소비자 보호 JS

    var footer = $("footer .footer_inner .sel_box"),
        footer_sel = $("footer .footer_inner .sel_box p"),
        footer_ul = $("footer .footer_inner .sel_box ul");

    footer.click(function () {
        footer_sel.toggleClass("on");
        footer_ul.toggleClass("on");
    })

    //footer End
})
