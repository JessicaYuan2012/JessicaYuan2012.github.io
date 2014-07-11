//数据获取和异步刷新
var picInfo;

$(document).ready(function () {
    $("#div1").load("http://jessicayuan2012.github.io/homework4/src/json/image_info.json", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {

            picInfo = eval("(" + responseTxt + ")");

            var imgs = $('#content img');//图片内容
            var titles = $('#content h3');//图片标题
            var imgLinks = $('#content a');//图片链接
            var imgDes = $('#content p');//图片描述

            for(var i=0; i<6; i++){
            	$(imgs[i]).attr('src', picInfo["image"+String(i+1)].url);
            	titles[i].innerHTML = String(i+1) + "/6 " + picInfo["image"+String(i+1)].title;
            	$(imgLinks[i]).attr('href', picInfo["image"+String(i+1)].link);
            	imgDes[i].innerHTML = picInfo["image"+String(i+1)].description;
            }
        }
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});

