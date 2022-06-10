// JavaScript source code

$(function () {


    $('#menu a[href ^= "#"]').click(function () {
        //�������邱��
        let adjust = 50;

        let speed = 400;
        // �A���J�[�̒l�Z�b�g
        let href = $(this).attr("href");
        // �ړ�����擾����
        let target = $(href == "#" || href == "" ? "html" : href)
        //�ړ���̒���
        let position = target.offset().top - adjust;

        //�X�N���[���̃A�j���[�V�����ύX
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