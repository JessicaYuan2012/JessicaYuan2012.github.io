//评论的数据获取和异步刷新

$(document).ready(function () {
    $("#div1").load("http://jessicayuan2012.github.io/homework4/src/json/comment_info.json", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            var comment_info = eval("(" + responseTxt + ")");
            var pageSize = 5;

            //计算页数
            var pageNum;
            if (comment_info.number % pageSize === 0) {
                pageNum = comment_info.number / pageSize;
            }
            else {
                pageNum = parseInt(comment_info.number / pageSize) + 1;
            }

            function gotoPage(value) {
                $(document).ready(function () {
                    $("#div1").load("http://jessicayuan2012.github.io/homework4/src/json/comment_page"+String(value)+".json", function (responseTxt, statusTxt, xhr) {
                        if (statusTxt == "success") {
                            var comments;
                            comments = eval("(" + responseTxt + ")");
                            //修改分页控件内部的值
                            $('.paginator b')[0].innerHTML = comment_info.number;
                            $('.paginator b')[1].innerHTML = pageNum;
                            $('.paginator b')[2].innerHTML = value;

                            var firstCommentNum = value * pageSize - 4;
                            var commentNum = firstCommentNum;

                            //修改评论（需要考虑不同条数的情况 修改值hidden=true）
                            if (comments.number == 5) {
                                for (var i = 0; i < 5; i++, commentNum++) {
                                    if ($($('.post')[i]).attr('hidden')) {
                                        $($('.post')[i]).removeAttr('hidden');
                                    }
                                    $($('.post')[i].children[0]).attr('src', comments['comment' + String(commentNum)].gravatar);
                                    $('.post')[i].children[1].children[0].children[0].innerHTML = comments['comment' + String(commentNum)].username;
                                    $('.post')[i].children[1].children[1].children[0].innerHTML = comments['comment' + String(commentNum)].content;
                                }
                            }
                            else {
                                for (var i = 0; i < comments.number; i++, commentNum++) {
                                    if ($($('.post')[i]).attr('hidden')) {
                                        $($('.post')[i]).removeAttr('hidden');
                                    }
                                    $($('.post')[i].children[0]).attr('src', comments['comment' + String(commentNum)].gravatar);
                                    $('.post')[i].children[1].children[0].children[0].innerHTML = comments['comment' + String(commentNum)].username;
                                    $('.post')[i].children[1].children[1].children[0].innerHTML = comments['comment' + String(commentNum)].content;
                                }
                                for (; i < 5; i++, commentNum++) {
                                    $($('.post')[i]).attr('hidden', 'true');
                                }
                            }

                            currentPage = value;
                        }
                        if (statusTxt == "error")
                            alert("Error: " + xhr.status + ": " + xhr.statusText);
                    });
                });
            }

            //首页按钮
            $('.paginator span')[1].onclick = function () {
                gotoPage(1);
            }
            //上一页按钮
            $('.paginator span')[2].onclick = function () {
                if (currentPage == 1) {
                    alert('没有上一页了！');
                }
                else {
                    gotoPage(currentPage-1);
                }
            }
            //下一页按钮
            $('.paginator span')[3].onclick = function () {
                if (currentPage == pageNum) {
                    alert('没有下一页了！');
                }
                else {
                    gotoPage(currentPage+1);
                }
            }
            //末页按钮
            $('.paginator span')[4].onclick = function () {
                gotoPage(pageNum);
            }

            //初始事件
            var currentPage = 1;
            gotoPage(1);
        }
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});


