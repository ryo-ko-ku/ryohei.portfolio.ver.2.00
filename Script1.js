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


});