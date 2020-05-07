$("document").ready(function () {
    var circle = $("#rotaction");

    circle.hide

    $(window).scroll(function () {
        var height = $(document).scrollTop(),
            m = matchMedia("screen and (min-width: 767px)");

        if (height > 600 && matchMedia("screen and (min-width: 767px)").matches) {
            circle.show(500)
        } else {
            circle.hide(500)
        }
    })

    circle.click(function () {
        history.go(-1);
    })
})
