//实现鼠标点击上页、下页按钮时的图片切换
$("#rightSection a")[0].onclick =
function () {
    var temp = $('.currentNews');
    temp.removeClass('currentNews');
    temp.addClass('previousNews');

    var temp2 = $('.followingNews');
    if (temp2.length != 0) {
        $(temp2[0]).removeClass('followingNews');
        $(temp2[0]).addClass('currentNews');
    }
    else {
        temp = $('.previousNews');
        $(temp[0]).removeClass('previousNews');
        $(temp[0]).addClass('currentNews');
        for (var i = 1; i < 6; i++) {
            $(temp[i]).removeClass('previousNews');
            $(temp[i]).addClass('followingNews');
        }
    }
    $('.currentNews img').css('-webkit-animation', 'appear 2s');
}

$("#leftSection a")[0].onclick =
function () {
    var temp = $('.currentNews');
    temp.removeClass('currentNews');
    temp.addClass('followingNews');

    var temp2 = $('.previousNews');
    var l = temp2.length;
    if (l != 0) {
        $(temp2[l - 1]).removeClass('previousNews');
        $(temp2[l - 1]).addClass('currentNews');
    }
    else {
        temp = $('.followingNews');
        $(temp[5]).removeClass('followingNews');
        $(temp[5]).addClass('currentNews');
        for (var i = 0; i < 5; i++) {
            $(temp[i]).removeClass('followingNews');
            $(temp[i]).addClass('previousNews');
        }
    }
    $('.currentNews img').css('-webkit-animation', 'appear 2s');

}