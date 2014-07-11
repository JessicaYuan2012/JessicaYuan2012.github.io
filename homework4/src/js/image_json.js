//数据获取和异步刷新

var picInfo;

$(document).ready(function () {
    $("#div1").load("http://jessicayuan2012.github.io/homework4/src/image_info.json", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            picInfo = eval("(" + responseTxt + ")");
            $("#div1").remove();
        }
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});

var imgs = $('#content img');
$(imgs[0]).attr('src', picInfo.image1.url);
$(imgs[1]).attr('src', picInfo.image2.url);
$(imgs[2]).attr('src', picInfo.image3.url);
$(imgs[3]).attr('src', picInfo.image4.url);
$(imgs[4]).attr('src', picInfo.image5.url);
$(imgs[5]).attr('src', picInfo.image6.url);

var titles = $('#content h3');
titles[0].innerHTML = '1/6 ' + picInfo.image1.title;
titles[1].innerHTML = '2/6 ' + picInfo.image2.title;
titles[2].innerHTML = '3/6 ' + picInfo.image3.title;
titles[3].innerHTML = '4/6 ' + picInfo.image4.title;
titles[4].innerHTML = '5/6 ' + picInfo.image5.title;
titles[5].innerHTML = '6/6 ' + picInfo.image6.title;

var imgLinks = $('#content a');
$(imgLinks[0]).attr('href', picInfo.image1.link);
$(imgLinks[1]).attr('href', picInfo.image2.link);
$(imgLinks[2]).attr('href', picInfo.image3.link);
$(imgLinks[3]).attr('href', picInfo.image4.link);
$(imgLinks[4]).attr('href', picInfo.image5.link);
$(imgLinks[5]).attr('href', picInfo.image6.link);

var imgDes = $('#content p');
imgDes[0].innerHTML = picInfo.image1.description;
imgDes[1].innerHTML = picInfo.image2.description;
imgDes[2].innerHTML = picInfo.image3.description;
imgDes[3].innerHTML = picInfo.image4.description;
imgDes[4].innerHTML = picInfo.image5.description;
imgDes[5].innerHTML = picInfo.image6.description;