var audienceRatingOpts = {
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
      graphTitle : "各时段收视率统计图",
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
      yAxisLabel : "亿秒",
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
}

var onlineDaysOpts = {
      inGraphDataShow : true,
      datasetFill : false,
      scaleLabel: "<%=value%>",
      scaleTickSizeRight : 5,
      scaleTickSizeLeft : 5,
      scaleTickSizeBottom : 5,
      scaleTickSizeTop : 5,
      scaleFontSize : 10,
      /*canvasBorders : true,
      canvasBordersWidth : 3,
      canvasBordersColor : "black",*/
      graphTitle : "用户在线天数分布图",
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
      legend : true,
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
      yAxisLabel : "%",
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
      //annotateDisplay : true, 
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
}

var perDayOnlineHourOpts = {
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
      graphTitle : "单日用户在线总时长分布图",
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
      legend : true,
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
      yAxisLabel : "小时",
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
      //annotateDisplay : true, 
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
}

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

function loadData(){
  var element = $('#canvas-container');
  if(element.children() != []){
      $(element.children()).remove();
  }
  loadAudienceRatingData();
  loadPerDayViewingHour();
  loadOnlineDayCountData();
}

function loadOnlineDayCountData() {
    var element = $('#canvas-container');
    var canvas1="<canvas id=\"chart1\"></canvas>";
    element.append(canvas1);

    var columns = [[]];

    $.ajax({
        type: "GET",
        url: "data/OnlineDayCount/part-00000",
        dataType: "text",
        success: function(data) {
            processData(data,columns);

            numOfDevices = sum(columns[1].map(returnInt))
            final_data_points = []
            final_data_points.push((sum(columns[1].map(returnInt).slice(0,19))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(19,39))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(39,59))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(59,79))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(79,99))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(99,119))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(119,139))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(139,159))/numOfDevices*100).toFixed(3));
            final_data_points.push((sum(columns[1].map(returnInt).slice(159,185))/numOfDevices*100).toFixed(3));
            
            var barChartData = {
                labels : ["0-19天","20-39天","40-59天","60-79天","80-99天","100-119天","120-139天","140-159天","160-181天"],
                datasets : [
                    {
                        type: "Line",
                        fill: false,
                        strokeColor : "rgb(230, 14, 14)",
                        pointColor : "rgb(205, 151, 155)",
                        pointStrokeColor : "#f56691",
                        data : final_data_points,
                    },
                    {
                        label: "Online Day Count",
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

            var pieChartData = [{value: final_data_points[0], color:"#D97041", title:"0-19天"},
            {value: final_data_points[1], color:"#C7604C", title:"20-39天"},
            {value: final_data_points[2], color:"#21323D", title:"40-59天"},
            {value: final_data_points[3], color:"#9D9B7F", title:"60-79天"},
            {value: final_data_points[4], color:"#D97041", title:"80-99天"},
            {value: final_data_points[5], color:"#C7604C", title:"100-119天"},
            {value: final_data_points[6], color:"#584A5E", title:"120-139天"},
            {value: final_data_points[7], color:"#7D4F6D", title:"140-159天"},
            {value: final_data_points[8], color:"#9D9B7F", title:"160-181天"}]


            var ctx = document.getElementById("chart1").getContext("2d");
            window.myLine = new Chart(ctx).Bar(barChartData, onlineDaysOpts);
            //window.myLine = new Chart(ctx).Pie(pieChartData, onlineDaysOpts);
        }
     });
}

function loadPerDayViewingHour() {
    var element = $('#canvas-container')
    var canvas2="<canvas id=\"chart2\"></canvas>";
    element.append(canvas2)
    var columns2 = [[]];

    $.ajax({
        type: "GET",
        url: "data/ViewingTime/part-00000",
        dataType: "text",
        success: function(data) {
            processData(data,columns2);

            var LineChartData = {
                labels : columns2[0].slice(0,14),
                datasets : [
                    {
                        label: "Online Hours",
                        fillColor : "rgba(220,220,220,0.2)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        pointHighlightFill : "#fff",
                        pointHighlightStroke : "rgba(220,220,220,1)",
                        data : columns2[1].slice(0,14).map(returnHour)
                    }
                ]
            }

            var ctx2 = document.getElementById("chart2").getContext("2d");
            window.myLine = new Chart(ctx2).Line(LineChartData, perDayOnlineHourOpts);
        }
     });
}

function loadAudienceRatingData() {
    var element = $('#canvas-container');
    var canvas3="<canvas id=\"chart3\"></canvas>";
    element.append(canvas3);   
    var columns3 = [[]];

    $.ajax({
        type: "GET",
        url: "data/audiencerating/part-00000",
        dataType: "text",
        success: function(data) {
            processData(data,columns3);
            
            var lineChartData = {
                labels : ["0点-1点","1点-2点","2点-3点","3点-4点","4点-5点","5点-6点","6点-7点","7点-8点","8点-9点","9点-10点","10点-11点","11点-12点","12点-13点","13点-14点","14点-15点","15点-16点","16点-17点","17点-18点","18点-19点","19点-20点","20点-21点","21点-22点","22点-23点","23点-24点"],
                datasets : [
                    {
                        label: "Online Day Count",
                        fillColor : "rgba(220,220,220,0.2)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        pointHighlightFill : "#fff",
                        pointHighlightStroke : "rgba(220,220,220,1)",
                        data : columns3[1].map(returnResult)
                    }
                ]
            }

            var ctx = document.getElementById("chart3").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, audienceRatingOpts);
        }
     });

}