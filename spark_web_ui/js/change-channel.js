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
      graphTitle : "总换台次数分布图",
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

function loadChannelChangeData(){
  var element = $('#canvas-container');
  if(element.children() != []){
      $(element.children()).remove();
  }
  loadChannelChangeAllData();
  loadChannelChangeDailyData();
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

            var ctx = document.getElementById("chart4").getContext("2d");
            window.myLine = new Chart(ctx).Bar(barChartData, ChannelChangeAllOpts);
        }
     });
}

function loadChannelChangeDailyData() {
    var element = $('#canvas-container');
    var canvas5="<canvas id=\"chart5\"></canvas>";
    element.append(canvas5);

    var columns = [[]];

    $.ajax({
        type: "GET",
        url: "data/ChangeChannelDaily/part-00000",
        dataType: "text",
        success: function(data) {
            processData(data,columns);

            date_list = columns[0];
            change_sum_list = columns[1].map(returnInt);
            device_num_list = columns[2].map(returnInt);
            final_data_points = []
            for (var i = 0; i <= columns[0].length - 1; i++) {
              final_data_points.push((change_sum_list[i]/device_num_list[i]).toFixed(2));
            };
            
            var lineChartData = {
                labels : date_list.slice(0,14),
                datasets : [
                    {
                        label: "Channel Change Times - All",
                        fillColor : "rgba(220,220,220,0.2)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        pointHighlightFill : "#fff",
                        pointHighlightStroke : "rgba(220,220,220,1)",
                        data : final_data_points.slice(0,14)
                    }
                ]
            }

            var ctx = document.getElementById("chart5").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, ChannelChangeDailyOpts);
        }
     });
}