var comments_json = '{ "number": 13, "comment1": { "gravatar": "http://q1.qlogo.cn/g?b=qq&k=y3mbsVt0U8aicDF7Yrktn8Q&s=40&t=540", "username": "呆呆更健康(╯▽╰)", "content": "假扮僧人骗钱骗喝的，死后下无间地狱。" }, "comment2": { "gravatar": "http://q1.qlogo.cn/g?b=qq&k=ZjoNdVzrTZ4LXBnLXzIc4g&s=40&t=1384926807", "username": "独步天涯", "content": "以后看到和尚乞讨一律不给！因为真和尚都富的流油，不会出来乞讨化缘的！" }, "comment3": { "gravatar": "http://q1.qlogo.cn/g?b=qq&k=lt3gt2icuz5Z3Agu6llHW0A&s=40&t=1403972024", "username": "经济适用型宅哥", "content": "怎么又丢人都丢出国门了！悲哀！" }, "comment4": { "gravatar": "http://q1.qlogo.cn/g?b=qq&k=Tots5rWCLgoCH3ib4ZMKyUw&s=40&t=1400510315", "username": "雨水一盒", "content": "去过北京，一点都不习惯，空气差，人多，城市太大了，去哪儿都老半天。吃的也不习惯，还是南方好，雨水充足，森林多。多好呀" }, "comment5": { "gravatar": "http://q2.qlogo.cn/g?b=qq&k=hOH4o5RkQDCODxA4wDApeQ&s=40&t=1382846097", "username": "品味人生", "content": "日报社大楼勃起，央视大楼叉腿在等待，可笑的建筑！！！" }, "comment6": { "gravatar": "http://q4.qlogo.cn/g?b=qq&k=2y4qLuMKarNKicGssUI18Xg&s=40&t=1396060311", "username": "生活如此乏味", "content": "对敌人的仁慈就是对自己的残忍。" }, "comment7": { "gravatar": "http://q2.qlogo.cn/g?b=qq&k=ReTy8sz0LxrbsibribYONXicA&s=40&t=1404108492", "username": "钕钕、硪鈈帥", "content": "虽然我憎恨日本战犯，憎恨日本军国主义。激励国民不忘国耻，最好的办法是实际行动，就八个字：壮我中华、抵制日货！" }, "comment8": { "gravatar": "http://q4.qlogo.cn/g?b=qq&k=p532fWSJy3SyEbptxkh4Xw&s=40&t=0", "username": "落叶戏秋风", "content": "海南村民做得对，全国各地都应该效仿。要以倭贼跪地石像时刻警醒国人：勿忘国耻，自强不息！" }, "comment9": { "gravatar": "http://q3.qlogo.cn/g?b=qq&k=eLlKd1pHOAZS9AI8sgqaWg&s=40&t=1373757265", "username": "菩提", "content": "单反，手机微薄，电脑，银行数不清的存款，还有金屋那娇滴滴的小尼姑！佛门的还是清静之地吗、" }, "comment10": { "gravatar": "http://q4.qlogo.cn/g?b=qq&k=XoBuicXTZ2Lqd47lCmcPmOA&s=40&t=1394441491", "username": "非吻宝贝", "content": "传销害人害己!做业务员就像一张白纸，整天跟着瞎起哄!一但你级别越高，你就发现自己真的走错路了，早回头是对的。" }, "comment11": { "gravatar": "http://q2.qlogo.cn/g?b=qq&k=cEI8WPuL60O7MHp6W2Z8Ww&s=40&t=1370635069", "username": ".o爛熳┊ˊ", "content": "有一线希望，就要全力以赴！加油小宝宝！加油宝宝哒爸爸妈妈！" }, "comment12": { "gravatar": "http://q1.qlogo.cn/g?b=qq&k=pF1VxqMusibhqpMn5NDNuuw&s=40&t=1370500295", "username": "．恋妖。", "content": "终于看到了一丝新的希望，希望父母和狗狗都要坚持住，打败病魔，加油狗狗，我们支持你。" }, "comment13": { "gravatar": "http://q3.qlogo.cn/g?b=qq&k=KPYVCNUX7Uf7q8RUib3J27w&s=40&t=1371684159","username": "短笛花仙子", "content": "真好！有一丝希望！祈愿这个可怜可爱的孩子恢复健康驱走病魔！" }}';

var comment_info = JSON.parse(comments_json);

var pageSize = 5;

var pageNum;
if (comment_info.number % pageSize === 0) {
    pageNum = comment_info.number / pageSize;
}
else {
    pageNum = parseInt(comment_info.number / pageSize) + 1;
}

function gotoPage(value) {

    //修改分页控件内部的值
    $('.paginator b')[0].innerHTML = comment_info.number;
    $('.paginator b')[1].innerHTML = pageNum;
    $('.paginator b')[2].innerHTML = value;

    var firstCommentNum = value * pageSize - 4;
    var commentNum = firstCommentNum;

    //修改评论（需要考虑不同条数的情况 修改值hidden=true）
    if (firstCommentNum + 4 <= comment_info.number) {
        for (var i = 0; i < 5; i++, commentNum++) {
            if ($($('.post')[i]).attr('hidden') == true) {
                $($('.post')[i]).removeAttr('hidden');
            }
            $($('.post')[i].children[0]).attr('src', comment_info['comment' + String(commentNum)].gravatar);
            $('.post')[i].children[1].children[0].children[0].innerHTML = comment_info['comment' + String(commentNum)].username;
            $('.post')[i].children[1].children[1].children[0].innerHTML = comment_info['comment' + String(commentNum)].content;
        }
    }
    else {
        for (var i = 0; i < comment_info.number - firstCommentNum + 1; i++, commentNum++) {
            if ($($('.post')[i]).attr('hidden') == true) {
                $($('.post')[i]).removeAttr('hidden');
            }
            $($('.post')[i].children[0]).attr('src', comment_info['comment' + String(commentNum)].gravatar);
            $('.post')[i].children[1].children[0].children[0].innerHTML = comment_info['comment' + String(commentNum)].username;
            $('.post')[i].children[1].children[1].children[0].innerHTML = comment_info['comment' + String(commentNum)].content;
        }
        for (; i < 5; i++, commentNum++) {
            $($('.post')[i]).attr('hidden', 'true');
        }
    }

    currentPage = value;
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
