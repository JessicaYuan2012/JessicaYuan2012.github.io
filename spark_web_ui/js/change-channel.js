var ChannelChangeAllOpts = {
      inGraphDataShow : true,
      datasetFill : true,
      scaleLabel: "<%=value%>",
      scaleTickSizeRight : 5,
      scaleTickSizeLeft : 5,
      scaleTickSizeBottom : 5,
      scaleTickSizeTop : 5,
      scaleFontSize : 10,
      /*canvasBorders : true,
      canvasBordersWidth : 3,
      canvasBordersColor : "black",*/
      graphTitle : "总换台次数分布图(2014.11.27-2015.5.26)",
            graphTitleFontFamily : "'Arial'",
            graphTitleFontSize : 24,
            graphTitleFontStyle : "normal",
            graphTitleFontColor : "#666",
      /*graphSubTitle : "Graph Sub Title",
            graphSubTitleFontFamily : "'Arial'",
            graphSubTitleFontSize : 18,
            graphSubTitleFontStyle : "normal",
            graphSubTitleFontColor : "#666",*/
      /*footNote : "Footnote for the graph",
            footNoteFontFamily : "'Arial'",
            footNoteFontSize : 8,
            footNoteFontStyle : "bold",
            footNoteFontColor : "#666",*/
      legend : false,
        legendFontFamily : "'Arial'",
        legendFontSize : 12,
        legendFontStyle : "normal",
        legendFontColor : "#666",
      legendBlockSize : 15,
      legendBorders : true,
      legendBordersWidth : 1,
      legendBordersColors : "#666",
      yAxisLeft : true,
      yAxisRight : false,
      xAxisBottom : true,
      xAxisTop : false,
      yAxisLabel : "用户数量",
            yAxisFontFamily : "'Arial'",
            yAxisFontSize : 16,
            yAxisFontStyle : "normal",
            yAxisFontColor : "#666",
      /*xAxisLabel : "pX Axis Label",
          xAxisFontFamily : "'Arial'",
            xAxisFontSize : 16,
            xAxisFontStyle : "normal",
            xAxisFontColor : "#666",
      yAxisUnit : "Y Unit",
            yAxisUnitFontFamily : "'Arial'",
            yAxisUnitFontSize : 8,
            yAxisUnitFontStyle : "normal",
            yAxisUnitFontColor : "#666",*/
      annotateDisplay : false, 
      spaceTop : 0,
      spaceBottom : 0,
      spaceLeft : 0,
      spaceRight : 0,
      logarithmic: false,
//      showYAxisMin : false,
      rotateLabels : "smart",
      xAxisSpaceOver : 0,
      xAxisSpaceUnder : 0,
      xAxisLabelSpaceAfter : 0,
      xAxisLabelSpaceBefore : 0,
      legendBordersSpaceBefore : 0,
      legendBordersSpaceAfter : 0,
      footNoteSpaceBefore : 0,
      footNoteSpaceAfter : 0, 
      startAngle : 0,
      dynamicDisplay : true,
      responsive : true
};

var ChannelChangeDailyOpts = {
      inGraphDataShow : true,
      datasetFill : true,
      scaleLabel: "<%=value%>",
      scaleTickSizeRight : 5,
      scaleTickSizeLeft : 5,
      scaleTickSizeBottom : 5,
      scaleTickSizeTop : 5,
      scaleFontSize : 10,
      /*canvasBorders : true,
      canvasBordersWidth : 3,
      canvasBordersColor : "black",*/
      graphTitle : "日均换台次数折线图",
            graphTitleFontFamily : "'Arial'",
            graphTitleFontSize : 24,
            graphTitleFontStyle : "normal",
            graphTitleFontColor : "#666",
      /*graphSubTitle : "Graph Sub Title",
            graphSubTitleFontFamily : "'Arial'",
            graphSubTitleFontSize : 18,
            graphSubTitleFontStyle : "normal",
            graphSubTitleFontColor : "#666",*/
      /*footNote : "Footnote for the graph",
            footNoteFontFamily : "'Arial'",
            footNoteFontSize : 8,
            footNoteFontStyle : "bold",
            footNoteFontColor : "#666",*/
      legend : false,
        legendFontFamily : "'Arial'",
        legendFontSize : 12,
        legendFontStyle : "normal",
        legendFontColor : "#666",
      legendBlockSize : 15,
      legendBorders : true,
      legendBordersWidth : 1,
      legendBordersColors : "#666",
      yAxisLeft : true,
      yAxisRight : false,
      xAxisBottom : true,
      xAxisTop : false,
      yAxisLabel : "次",
            yAxisFontFamily : "'Arial'",
            yAxisFontSize : 16,
            yAxisFontStyle : "normal",
            yAxisFontColor : "#666",
      /*xAxisLabel : "pX Axis Label",
          xAxisFontFamily : "'Arial'",
            xAxisFontSize : 16,
            xAxisFontStyle : "normal",
            xAxisFontColor : "#666",
      yAxisUnit : "Y Unit",
            yAxisUnitFontFamily : "'Arial'",
            yAxisUnitFontSize : 8,
            yAxisUnitFontStyle : "normal",
            yAxisUnitFontColor : "#666",*/
      annotateDisplay : false, 
      spaceTop : 0,
      spaceBottom : 0,
      spaceLeft : 0,
      spaceRight : 0,
      logarithmic: false,
//      showYAxisMin : false,
      rotateLabels : "smart",
      xAxisSpaceOver : 0,
      xAxisSpaceUnder : 0,
      xAxisLabelSpaceAfter : 0,
      xAxisLabelSpaceBefore : 0,
      legendBordersSpaceBefore : 0,
      legendBordersSpaceAfter : 0,
      footNoteSpaceBefore : 0,
      footNoteSpaceAfter : 0, 
      startAngle : 0,
      dynamicDisplay : true,
      responsive : true
};

function returnInt(element){
  return parseInt(element,10);
}

function returnHour(element){
  return (parseInt(element,10)/1000/3600).toFixed(0);
}

function returnResult(element){
  return (parseFloat(element).toExponential()/100000000).toFixed(0);
}

function returnMyDateFormat(str) {
  var s = str.slice(0,4)+"-"+str.slice(4,6)+"-"+str.slice(6,8);
  var d = new Date(s);
  var day = d.getDay();
  if(day == 1){
    s = s + " 星期一";
  }
  else if(day == 2){
    s = s + " 星期二"
  }
  else if(day == 3){
    s = s + " 星期三"
  }
  else if(day == 4){
    s = s + " 星期四"
  }
  else if(day == 5){
    s = s + " 星期五"
  }
  else if(day == 6){
    s = s + " 星期六"
  }
  else if(day == 0){
    s = s + " 星期日"
  }
  return s;
}

function processData(allText, col) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            for (var j=0; j<headers.length; j++) {
            	if (col[j] == undefined){
            		col[j] = [];
                }
                col[j].push(data[j].replace(/\"/g, ""));
            }
        }
    }
}

function sum(numArray){
    for (var sum = i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
}

var daily_channel_change_columns = [[]];
var start = 0;
var end = 14;
var date_list = [];
var final_data_points_daily_average = [];

function loadChannelChangeData(){
  clearAll();

  var element = $('#canvas-container');
  element.addClass("col-sm-8");
  var title3 = "<h4 style=\"margin:10px;\">3.换台行为</h4>";
  element.append(title3);

  var contentContainer = $('#content-container');
  contentContainer.attr("style","margin:20px;")
  contentContainer.addClass("col-sm-2")
  var comment = "<p>结论：<p><br>日均换台高峰出现在周六和周日</p>\
                <br><br><br><br><br><br><br><br><br><br><br><br><br>\
                <p>用户很爱换台</p>";
  contentContainer.append(comment);

  loadChannelChangeDailyData();
  loadChannelChangeAllData();
}

function loadChannelChangeAllData() {
    var element = $('#canvas-container');
    var canvas4="<canvas id=\"chart4\"></canvas>";
    element.append(canvas4);

    var columns = [[]];

    $.ajax({
        type: "GET",
        url: "data/ChangeChannelAll/part-00000",
        dataType: "text",
        success: function(data) {
            processData(data,columns);

            numOfDevices = sum(columns[1].map(returnInt))
            final_data_points = [0,0,0,0]
            for (var i = 0; i <= columns[0].length - 1; i++) {
              changeTimes = returnInt(columns[0][i]);
              if (changeTimes<=100) {
                final_data_points[0] += returnInt(columns[1][i]);
              }
              else if (changeTimes <= 1000) {
                final_data_points[1] += returnInt(columns[1][i]);
              }
              else if (changeTimes <= 10000){
                final_data_points[2] += returnInt(columns[1][i]);
              }
              else{
                final_data_points[3] += returnInt(columns[1][i]);
              }
            };
            
            var barChartData = {
                labels : ["1-100次","101-1000次","1000-10000次","10000+次"],
                datasets : [
                    {
                        label: "Channel Change Times - All",
                        fillColor : "rgba(220,220,220,0.2)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        pointHighlightFill : "#fff",
                        pointHighlightStroke : "rgba(220,220,220,1)",
                        data : final_data_points
                    }
                ]
            }

            var pieCharData = [{value: final_data_points[0], color:"#7DA1A1", title:"1-100次"},
            {value: final_data_points[1], color:"#CCCCB3", title:"101-1000次"},
            {value: final_data_points[2], color:"#4DB399", title:"1000-10000次"},
            {value: final_data_points[3], color:"#47331F", title:"10000+次"}]

            var ctx = document.getElementById("chart4").getContext("2d");
            window.myLine = new Chart(ctx).Pie(pieCharData, ChannelChangeAllOpts);
        }
     });
}

function loadChannelChangeDailyData() {
    var element = $('#canvas-container');
    var canvas5="<canvas id=\"chart5\"></canvas>"
    var nav = "<nav id=\"chart-nav\">\
      <ul class=\"pager\">\
        <li class=\"previous disabled\"><a href=\"javascript:void(0);\" onclick = \"moveBackward()\"><span aria-hidden=\"true\">&larr;</span>更早</a></li>\
        <li class=\"next\"><a href=\"javascript:void(0);\" onclick = \"moveForward()\">更晚<span aria-hidden=\"true\">&rarr;</span></a></li>\
      </ul>\
    </nav>";
    element.append(canvas5);
    element.append(nav);

    $.ajax({
        type: "GET",
        url: "data/ChangeChannelDaily/part-00000",
        dataType: "text",
        success: function(data) {
            processData(data, daily_channel_change_columns);

            date_list = daily_channel_change_columns[0].map(returnMyDateFormat);
            change_sum_list = daily_channel_change_columns[1].map(returnInt);
            device_num_list = daily_channel_change_columns[2].map(returnInt);
            for (var i = 0; i <= daily_channel_change_columns[0].length - 1; i++) {
              final_data_points_daily_average.push((change_sum_list[i]/device_num_list[i]).toFixed(2));
            };
            
            var lineChartData = {
                labels : date_list.slice(start,end),
                datasets : [
                    {
                        label: "Channel Change Times - All",
                        fillColor : "rgba(151,187,205,0.2)",
                        strokeColor : "rgba(151,187,205,0.8)",
                        pointColor : "rgba(151,187,205,0.8)",
                        pointStrokeColor : "#fff",
                        //pointHighlightFill : "#fff",
                        //pointHighlightStroke : "rgba(220,220,220,1)",
                        data : final_data_points_daily_average.slice(start,end)
                    }
                ]
            }

            var ctx = document.getElementById("chart5").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, ChannelChangeDailyOpts);
        }
     });
    $('li a').css("color", "#b3b3b3");
    $('#channelchange').css("color", "white");

}

function moveForward() {
  if (end >= final_data_points_daily_average.length) return;
  
  $("#chart5").remove();
  var canvas5="<canvas id=\"chart5\"></canvas>"
  $("#chart-nav").before(canvas5);

  start += 14;
  end += 14;

  if(start > 0){
    $(".previous").removeClass("disabled");
    $($(".previous").children()).attr("onclick", "moveBackward();");
  }
  else{
    $(".previous").addClass("disabled");
    $($(".previous").children()).removeAttr("onclick");
  }

  if(end >= final_data_points_daily_average.length){
    $(".next").addClass("disabled");
    $($(".next").children()).removeAttr("onclick");
  }
  else{
    $(".next").removeClass("disabled");
    $($(".next").children()).attr("onclick", "moveForward();");
  }

  var lineChartData = {
      labels : date_list.slice(start, end),
      datasets : [
          {
              label: "Channel Change Times - All",
              fillColor : "rgba(151,187,205,0.2)",
              strokeColor : "rgba(151,187,205,0.8)",
              pointColor : "rgba(151,187,205,0.8)",
              pointStrokeColor : "#fff",
              //pointHighlightFill : "#fff",
              //pointHighlightStroke : "rgba(220,220,220,1)",
              data : final_data_points_daily_average.slice(start, end)
          }
      ]
  }
  var ctx = document.getElementById("chart5").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, ChannelChangeDailyOpts);
}

function moveBackward() {
  if(start <= 0) return;

  $("#chart5").remove();
  var canvas5="<canvas id=\"chart5\"></canvas>"
  $("#chart-nav").before(canvas5);

  start -= 14;
  end -= 14;
  if(start > 0){
    $(".previous").removeClass("disabled");
    $($(".previous").children()).attr("onclick", "moveBackward();");
  }
  else{
    $(".previous").addClass("disabled");
    $($(".previous").children()).removeAttr("onclick");
  }

  if(end >= final_data_points_daily_average.length){
    $(".next").addClass("disabled");
    $($(".next").children()).removeAttr("onclick");
  }
  else{
    $(".next").removeClass("disabled");
    $($(".next").children()).attr("onclick", "moveForward();");
  }

  var lineChartData = {
      labels : date_list.slice(start, end),
      datasets : [
          {
              label: "Channel Change Times - All",
              fillColor : "rgba(151,187,205,0.2)",
              strokeColor : "rgba(151,187,205,0.8)",
              pointColor : "rgba(151,187,205,0.8)",
              pointStrokeColor : "#fff",
              //pointHighlightFill : "#fff",
              //pointHighlightStroke : "rgba(220,220,220,1)",
              data : final_data_points_daily_average.slice(start, end)
          }
      ]
  }
  var ctx = document.getElementById("chart5").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, ChannelChangeDailyOpts);
}