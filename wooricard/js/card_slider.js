$(function() {
            var leftValue = 0;
            var maxLeft = 0;
            setInterval(function() {
                maxLeft = -($(".imgs_wrap > ul").outerWidth() - $("#card_slide").outerWidth());
                if (leftValue <= maxLeft) {
                    leftValue = maxLeft;
                    $(".imgs_wrap > ul").css({
                        left: leftValue
                    });
                } else {
                    $("#card_slide > .btn_next").css({
                        backgroundImage: "url(img/icon_next.png)"
                    });
                }
            }, 50);

            $("#card_slide > .btn_next").click(function() {
                $("#card_slide > .btn_prev").css({
                    backgroundImage: "url(img/icon_prev.png)"
                });
                leftValue -= 265;
                //만약 left에 적용된 속성이 maxLeft가 되면 더이상 증가하거나 감소하지 않게
                if (leftValue <= maxLeft) {
                    leftValue = maxLeft;
                    $("#card_slide > .btn_next").css({
                        backgroundImage: "url(img/icon_next.png)"
                    });
                }
                $(".imgs_wrap > ul").css({
                    left: leftValue
                });
            });

            $("#card_slide > .btn_prev").click(function() {
                $("#card_slide > .btn_next").css({
                    backgroundImage: "url(img/icon_next.png)"
                });
                leftValue += 265;
                if (leftValue >= 0) {
                    leftValue = 0;
                    $("#card_slide > .btn_prev").css({
                        backgroundImage: "url(img/icon_prev.png)"
                    });
                }
                $(".imgs_wrap > ul").css({
                    left: leftValue
                });
            });
        });