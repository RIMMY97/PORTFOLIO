        $("document").ready(function () {

            var $picker = $(".region_picker"),
                $util = $(".gnb .gnb_util .gnb_util_l"),
                $util_img = $(".gnb .gnb_util .gnb_util_l img"),
                $close = $(".region_picker .close"),
                $close_event = $close.click(function () {
                    $picker.hide();
                    $util_img.show();
                });

            $picker.hide();

            $util.on("click", function ($close_event) {
                $picker.toggle();
                $util_img.toggle();
            })

            //gnb menu End

            var i = 0,
                d = 0,
                time = false,
                $arrow = $("main").find("a"),
                $slide = $("main").find(".slide"),
                $countBox = $("main .paging ul li"),
                leng_indi = $("main").find(".slide").length - 1,
                count = [
                    "01", "02", "03", "04"
                ],
                timer = setInterval(auto_play, 3000);

            function auto_play() {

                $slide.eq(i).stop().animate({
                    left: "-100%"
                }, 1500)
                i++;
                if (i > leng_indi) i = 0;
                $slide.eq(i).stop().css("left", "100%").animate({
                    left: "0"
                }, 1500)

                $countBox.text(count[i])

                d = i;
            }

            $arrow.click(function (e) {
                e.preventDefault();
                var index = $arrow.index(this);
                if (time == true) {
                    return;
                }
                setTimeout(function () {
                    time = false;
                }, 300)
                time = true;

                if (index == 0) {
                    $slide.eq(i).stop().animate({
                        left: "100%"
                    }, 1000)
                    i--;
                    if (i < 0) i = leng_indi;
                    $slide.eq(i).stop().css("left", "-100%").animate({
                        left: "0"
                    }, 1000)

                    $countBox.text(count[i])

                } else {
                    $slide.eq(i).stop().animate({
                        left: "-100%"
                    }, 1000)
                    i++;
                    if (i > leng_indi) i = 0;
                    $slide.eq(i).stop().css("left", "100%").animate({
                        left: "0"
                    }, 1000)

                    $countBox.text(count[i])
                }

                d = i;
            })

            //메인 슬라이더 루프 영역 End

            $arrow.hover(function(){
                clearInterval(timer);
            },function(){
                clearInterval(timer);
                timer = setInterval(auto_play,3000);
            })
            //arrow hover 시 자동슬라이드 멈춤 End


            var a = 0,
                leng = $("#sec5 .sec5-bottom .sec5-bottom-wrap .js-leng").length - 10,
                // 넘어가서(슬라이드 되어서) 보여질 박스의 갯수
                slideWrap = $("#sec5 .sec5-bottom .sec5-bottom-wrap .js-slideWrap"),
                // 나열된 슬라이드 박스 틀 ← 이게 옆으로 100%씩 이동함.
                slideBtn = $("#sec5 .sec5-bottom .sec5-bottom-wrap .slide-btn img"),
                time = false;

            var noticeTitleBtn = $("#sec5 .sec5-bottom .sec5-bottom-wrap .notice-wrap .box img");
            var asideUp = $('aside');

            slideBtn.click(function (e) {
                e.preventDefault();
                var i = slideBtn.index(this);

                if (time == true) {
                    return;
                }
                setTimeout(function () {
                    time = false;
                }, 1000)

                time = true;

                if (i == 0) {
                    // 왼쪽 화살표 ( < ) 클릭 시 설정
                    a--;
                    if (a < 0) a = leng;
                } else {
                    // 오른쪽 화살표 ( > ) 클릭 시 설정
                    a++;
                    if (a > leng) a = 0; // 마지막 슬라이드에서 첫 슬라이드로 돌아감.         
                }

                slideWrap.stop().animate({
                    left: "-100" * a + "%"
                }, 1000)

            }) // 슬라이드 설정 끝    

            noticeTitleBtn.click(function () {
                $(this).next().slideToggle(500).siblings(".notice.content").slideUp(500);
                $(this).toggleClass('js-rotate')
            }) // 공지사항 밑으로 더 보기 버튼 설정

            $(window).scroll(function () {

                var height = $(document).scrollTop();

                if (height > 500) {
                    asideUp.show(500)
                } else {
                    asideUp.hide(500)
                } // 어사이드 표시 설정
            }) // 스크롤 이벤트

            asideUp.click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 400);
            }) // 어사이드 클릭 이벤트

        })
