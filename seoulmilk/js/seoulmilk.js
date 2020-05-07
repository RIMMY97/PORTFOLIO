$("document").ready(function () {

    $(".player").click(function () {
        var mediaVideo = $("video").get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(this).removeClass("on");
        } else {
            mediaVideo.pause();
            $(this).addClass("on");
        }
    });

    //player
    
    $(".sound").click(function () {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
            $(this).addClass("on");
        } else {
            $("video").prop('muted', true);
            $(this).removeClass("on");
        }
    });

    //sound

    //main controls

    var Slider = $('.product .product_section .product-slide .slider').lightSlider({
        pauseOnHover: true,
        item: 7
    });

    // best_menu

    $(".story .story_wrap .story_img #milk").addClass("on");

    $(".story .story_wrap .story_img #milk").mouseover(function () {
        var i = $(this).index();
        $(this).addClass("on");
        $(".story .story_wrap .story_img #cheese").removeClass("on")
        $(".story .story_wrap .story_img #excur").removeClass("on")
    })

    $(".story .story_wrap .story_img #cheese").mouseover(function () {
        var i = $(this).index();
        $(this).addClass("on");
        $(".story .story_wrap .story_img #milk").removeClass("on")
        $(".story .story_wrap .story_img #excur").removeClass("on")
    })

    $(".story .story_wrap .story_img #excur").mouseover(function () {
        var i = $(this).index();
        $(this).addClass("on");
        $(".story .story_wrap .story_img #milk").removeClass("on")
        $(".story .story_wrap .story_img #cheese").removeClass("on")
    })

    // story mouse over
})
