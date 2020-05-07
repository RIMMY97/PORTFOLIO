$("document").ready(function () {

    var gnb_nav = $(".gnb .gnb_wrap .gnb_box ul li"),
        gnb_bg = $(".gnb .gnb_bg_sidemenu");

    gnb_nav.mouseover(function () {
        $(this).addClass("on");
        gnb_bg.addClass("on")
    })

    gnb_nav.mouseout(function () {
        gnb_bg.removeClass("on");
    })

    //gnb End

    var footer = $("footer .foot_info .select_box"),
        footer_sel = $("footer .foot_info .select_box .sel_box p"),
        footer_ul = $("footer .foot_info .select_box ul");

    footer.click(function () {
        footer_sel.toggleClass("on");
        footer_ul.toggleClass("on");
    })

    //footer End
    
     $(window).scroll(function () {
        var pos = $(window).scrollTop();
        if (pos > 100) {
            $("aside").fadeIn(500)
        } else {
            $("aside").fadeOut(500)
        }
        //scroll aside
    })

    $("aside").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500)
    })

    //aside
})
