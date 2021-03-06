// JavaScript source code

$(function () {


    $('#menu a[href ^= "#"]').click(function () {
        //調整すること
        let adjust = 50;

        let speed = 400;
        // アンカーの値セット
        let href = $(this).attr("href");
        // 移動先を取得する
        let target = $(href == "#" || href == "" ? "html" : href)
        //移動先の調整
        let position = target.offset().top - adjust;

        //スクロールのアニメーション変更
        $("body,html").animate({ scrollTop: position }, speed, "swing");

        return false;

    });

    $("#history-container").scroll(function () {
        $(".history-list").hide().fadeIn("slow");
    });

    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.element').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});