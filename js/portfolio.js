$("document").ready(function () {

    $('.logo').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    //logo click smooth End

    var offset = 0;

    function navScroll(href, offset) {
        $('body,html').animate({
            scrollTop: $(href).offset().top - offset
        }, "slow");
    }
    $("a").click(function () {

        navScroll($(this).attr("href"), offset);

        return false;
    });

    //nav scroll 
    
    var modal = document.getElementById("modal_05"),
        img = document.getElementById("work_05"),
        modal_2 = document.getElementById("modal_06"),
        img_2 = document.getElementById("work_06"),
        span = document.getElementsByClassName("close")[0],
        span_2 = document.getElementsByClassName("close_2")[0];

    img.onclick = function () {
        modal.style.display = "block";
        $("html, body").css("overflow", "hidden");
    }
    
    img_2.onclick = function () {
        modal_2.style.display = "block";
        $("html, body").css("overflow", "hidden");
    }

    span.onclick = function () {
        modal.style.display = "none";
        $("html, body").css("overflow", "auto");
    }
    
    span_2.onclick = function () {
        modal_2.style.display = "none";
        $("html, body").css("overflow", "auto");
    }
    
    //modal
})
