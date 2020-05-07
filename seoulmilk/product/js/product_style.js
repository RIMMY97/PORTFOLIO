$("document").ready(function () {
    
    var sel = $(".selection .sel_wrap .location .sel_dept"),
        sel_ul = $(".selection .sel_wrap .location li > ul");

    sel_ul.css("display", "none");
    sel.addClass("on");

    sel.mouseover(function () {
        sel_ul.css("display", "block")
    })
    sel.mouseout(function () {
        sel_ul.css("display", "none")
    })
    sel_ul.mouseover(function () {
        $(this).css("display", "block")
    })
    sel_ul.mouseout(function () {
        $(this).css("display", "none")
    })

    //brand sel 펼치기 End
})
