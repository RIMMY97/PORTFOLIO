$(window).on("load", function () {
    if ($("#main").is(":visible")) {
        $(".companyArea").on("scroll", function (e) {
            if ($(this).parents(".showSection2").is(":visible")) {
                companyControl.showFocus();
            }
        });
    } else {
        $(window).on("scroll", function () {
            companyControl.showFocus();
        });
    }
});

var showInit, focusNavIdx = [],
    focusIdx = [],
    eTopInit, isNav = false,
    secIdx = 0,
    secIdx2 = 0,
    headMove = 0,
    nextIdx = 0,
    currentIdx, wheelStateCompany, isCompany = false;
var sTop, contentTarget, contentTargetHeight;
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
var companyControl = {
    init: function init() {
        isCompany = true;
        $('.content.focus').each(function (i) {
            if ($("#main").is(":visible")) {
                focusNavIdx[i] = parseInt($(this).position().top);
            } else {
                focusNavIdx[i] = parseInt($(this).offset().top);
            }
        });
        $(".focus:not(.content)").each(function (i) {
            if ($("#main").is(":visible")) {
                focusIdx[i] = parseInt($(this).position().top);
            } else {
                focusIdx[i] = parseInt($(this).offset().top);
            }
        });
        setTimeout(companyControl.showFocus, 500);
        if ($("#main").is(":visible")) {
            $("#wrapper").removeClass().addClass("showSection2");
        }
        eTopInit = parseInt($(".emblem").offset().top + $(".emblem").height());
        $(".companyArea .nav li a").on("click", function (i) {
            var idx = $(this).parents("li").index();
            if ($("#main").is(":visible")) {
                $(".companyArea").stop().animate({
                    scrollTop: focusNavIdx[idx]
                }, 500, "easeInOutQuint");
            } else {
                $("html, body").stop().animate({
                    scrollTop: focusNavIdx[idx]
                }, 500, "easeInOutQuint");
            }
            return false;
        });
        if ($("#main").is(":visible")) {
            currentIdx = 0;
            wheelStateCompany = false;
            $(".companyArea").off(mousewheelevt);
            $(".companyArea").on(mousewheelevt, function (e) {
                var wheelDelta = e.originalEvent.wheelDelta;
                if (!wheelDelta) { //firefox
                    wheelDelta = -event.detail;
                }
                var cHeight = 0;
                $(".companyArea .content").each(function (i) {
                    cHeight = cHeight + $(this).height();
                });
                var dHeight = $(this).scrollTop() + $(window).height();
                if (wheelDelta < 0) { //�꾨옒濡�
                    if (cHeight <= dHeight) { //movie section�쇰줈
                        goSection(3);
                    } else { //company-awards-client 
                        if (!wheelStateCompany) {
                            if (currentIdx < 2) {
                                wheelStateCompany = true;
                                currentIdx += 1;
                                $(".companyArea").stop().animate({
                                    scrollTop: focusNavIdx[currentIdx]
                                }, 500, "easeInOutQuint", function () {
                                    wheelStateCompany = false;
                                });
                                e.preventDefault();
                            } else { //留덉�留� client�먯꽌�� wheelscrollMotion �뺤�
                                wheelStateCompany = true;
                            }
                        }
                    }
                } else if (wheelDelta > 0) { //�꾨줈
                    if ($(this).scrollTop() <= 0) { //visual section�쇰줈
                        if (!wheelStateCompany) {
                            goSection(1);
                            wheelStateCompany = true;
                        }
                    } else {
                        if (!wheelStateCompany) {
                            if (currentIdx > 0) {
                                wheelStateCompany = true;
                                currentIdx -= 1;
                                $(".companyArea").stop().animate({
                                    scrollTop: focusNavIdx[currentIdx]
                                }, 500, "easeInOutQuint", function () {
                                    wheelStateCompany = false;
                                });
                            }
                        } else { //client�먯꽌 wheelscrollMotion �뺤����꾨븣
                            $(".companyArea").stop().animate({
                                scrollTop: focusNavIdx[currentIdx]
                            }, 500, "easeInOutQuint", function () {
                                wheelStateCompany = false;
                            });
                        }
                        e.preventDefault();
                    }
                }
            });
        }
    },
    showFocus: function showFocus() {
        if ($("#main").is(":visible")) {
            sTop = $(".companyArea").scrollTop();
            showInit = parseInt(sTop + ($(window).height() / 5) * 4);
        } else {
            sTop = $(window).scrollTop();
            showInit = parseInt(sTop + ($(window).height() / 5) * 4);
        }
        $('.content.focus').each(function (i) {
            if (focusNavIdx[i] <= sTop) {
                secIdx = i;
            }
        });
        contentTarget = $('.content.focus:eq(' + secIdx + ')');
        if ($("#main").is(":visible")) {
            contentTargetHeight = focusNavIdx[secIdx] + contentTarget.height();
        } else {
            contentTargetHeight = focusNavIdx[secIdx] + contentTarget.height();
        }

        if (!contentTarget.hasClass('show')) {
            contentTarget.addClass('show').siblings(".content").removeClass("show directGo");
            contentTarget.siblings(".content").find(".head").removeClass("fix end").removeAttr("style");
        }
        $(".companyArea .nav li:eq(" + secIdx + ")").addClass("on").siblings().removeClass("on");

        if (!$("#main").is(":visible")) {
            if ((sTop + $(window).height()) > contentTargetHeight) {
                //���댄� �щ씪媛�硫댁꽌 �щ씪吏��� �쒖젏
                headMove = -(sTop + $(window).height() - contentTargetHeight);
                if (contentTarget.attr("id") != "recruit") {
                    contentTarget.find('.head').addClass("fix end").css("transform", "translateY(" + headMove + "px)");
                    if (contentTarget.attr("id") == "awards") {
                        contentTarget.find('.thumb.logo').addClass("fix end").css("transform", "translateY(" + headMove + "px)");
                    }
                }
            } else {
                //���댄� 怨좎젙�섎뒗 �쒖젏
                contentTarget.find('.head').addClass("fix").removeClass("end").removeAttr("style");
                if (contentTarget.attr("id") == "awards") {
                    contentTarget.find('.thumb.logo').addClass("fix").removeClass("end").removeAttr("style");
                }
            }
        }

        $('.focus:not(.content)').each(function (i) {
            if (focusIdx[i] < showInit) {
                if (!$(this).hasClass('show')) {
                    $(this).addClass('show');
                }
            } else {
                if ($(this).hasClass('show')) {
                    $(this).removeClass('show');
                }
            }
            if (!$("#main").is(":visible")) {
                var logoTop, logoTop2
                if ($(this).parents("#awards").hasClass("show")) { //awards
                    logoTop2 = $(".awardsList .logo2").is(":visible") ? parseInt($(".awardsList .logo2").offset().top) : 0;
                    logoTop = $(".awardsList .logo1").is(":visible") ? parseInt($(".awardsList .logo1").offset().top) : 0;
                    if (parseInt(sTop + $(window).height() - 100) > logoTop2) {
                        $("#awards .thumb").addClass("step2");
                    } else {
                        $("#awards .thumb").removeClass("step2");
                    }
                }
            }
        });
        if (!$("#main").is(":visible")) {
            if ((sTop + $(window).height() - 30) < eTopInit) {
                $(".emblem").addClass("fix");
            } else {
                $(".emblem").removeClass("fix");
            }
        }
        if (!$("#main").is(":visible")) {
            var focusStep = []
            $(".step").each(function (i) {
                focusStep[i] = parseInt($(this).offset().top);
                if (focusStep[i] < showInit) {
                    if (i < 5) {
                        $(".emblem").addClass("step" + i);
                    }
                } else {
                    $(".emblem").removeClass("step" + i);
                }
            });
        }
    },
    destroy: function destroy() {
        $(".companyArea").scrollTop(0);
        //setTimeout(function(){
        $(".companyArea .focus").removeClass("show");
        $(".companyArea .nav li").removeClass("on");
        //$(".companyArea .emblem").removeClass("step0 step1 step2 step3");
        $(".companyArea").off(mousewheelevt);
        nextIdx = 0;
        //}, 800)
        isCompany = false;
    }
}
