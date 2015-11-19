var allopts = {
  //Boolean - If we show the scale above the chart data   -> Default value Changed
  scaleOverlay : true,
  //Boolean - If we want to override with a hard coded scale
  scaleOverride : false,
  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps : null,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : null,
  //Number - The scale starting value
  scaleStartValue : null,
  //String - Colour of the scale line 
  scaleLineColor : "rgba(0,0,0,.1)",
  //Number - Pixel width of the scale line  
  scaleLineWidth : 1,
  //Boolean - Whether to show labels on the scale 
  scaleShowLabels : true,
  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",
  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'Arial'",
  //Number - Scale label font size in pixels  
  scaleFontSize : 12,
  //String - Scale label font weight style  
  scaleFontStyle : "normal",
  //String - Scale label font colour  
  scaleFontColor : "#666",  
  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,
  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",
  //Number - Width of the grid lines
  scaleGridLineWidth : 1, 
  //Boolean - Whether the line is curved between points -> Default value Changed 
  bezierCurve : false,
  //Boolean - Whether to show a dot for each point -> Default value Changed
  pointDot : false,
  //Number - Radius of each point dot in pixels
  pointDotRadius : 3,
  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 1,
  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,
  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 2,
  //Boolean - Whether to fill the dataset with a colour
  datasetFill : true,
  //Boolean - Whether to animate the chart             -> Default value changed
  animation : false,
  //Number - Number of animation steps
  animationSteps : 60,
  //String - Animation easing effect
  animationEasing : "easeOutQuart",
  //Function - Fires when the animation is complete
  onAnimationComplete : null,
  canvasBorders : true,
  canvasBordersWidth : 30,
  canvasBordersColor : "black",
  yAxisLeft : true,
  yAxisRight : true,
  yAxisLabel : "Y axis",
  yAxisFontFamily : "'Arial'",
  yAxisFontSize : 50,
  yAxisFontStyle : "normal",
  yAxisFontColor : "#666",
  xAxisLabel : "",
  xAxisFontFamily : "'Arial'",
  xAxisFontSize : 16,
  xAxisFontStyle : "normal",
  xAxisFontColor : "#666",
  yAxisUnit : "UNIT",
  yAxisUnitFontFamily : "'Arial'",
  yAxisUnitFontSize : 12,
  yAxisUnitFontStyle : "normal",
  yAxisUnitFontColor : "#666",
  graphTitle : "",
  graphTitleFontFamily : "'Arial'",
  graphTitleFontSize : 24,
  graphTitleFontStyle : "bold",
  graphTitleFontColor : "#666",
  graphSubTitle : "",
  graphSubTitleFontFamily : "'Arial'",
  graphSubTitleFontSize : 18,
  graphSubTitleFontStyle : "normal",
  graphSubTitleFontColor : "#666",
  footNote : "Footnote",
  footNoteFontFamily : "'Arial'",
  footNoteFontSize : 50,
  footNoteFontStyle : "bold",
  footNoteFontColor : "#666",
  legend : true,
  legendFontFamily : "'Arial'",
  legendFontSize : 18,
  legendFontStyle : "normal",
  legendFontColor : "#666",
  legendBlockSize : 30,
  legendBorders : true,
  legendBordersWidth : 30,
  legendBordersColor : "#666",
  //  ADDED PARAMETERS 
  graphMin : "DEFAULT",
  graphMax : "DEFAULT"
  
  }

    var noopts = {
  nooptions : "",
  yAxisRight : true,
  scaleTickSizeLeft : 0,  
  scaleTickSizeRight : 0,  
  scaleTickSizeBottom : 0,  
  scaleTickSizeTop : 1


  }

    var onlyborderopts = {
  canvasBorders : true,
  canvasBordersWidth : 3,
  canvasBordersColor : "black"
  
  }

var nooptions = { }

var newopts = {
      inGraphDataShow : true,
      datasetFill : true,
      scaleLabel: "<%=value%>",
      scaleTickSizeRight : 5,
      scaleTickSizeLeft : 5,
      scaleTickSizeBottom : 5,
      scaleTickSizeTop : 5,
      scaleFontSize : 16,
      canvasBorders : true,
      canvasBordersWidth : 3,
      canvasBordersColor : "black",
      graphTitle : "Graph Title",
      graphTitleFontFamily : "'Arial'",
      graphTitleFontSize : 24,
      graphTitleFontStyle : "bold",
      graphTitleFontColor : "#666",
      graphSubTitle : "Graph Sub Title",
      graphSubTitleFontFamily : "'Arial'",
      graphSubTitleFontSize : 18,
      graphSubTitleFontStyle : "normal",
      graphSubTitleFontColor : "#666",
      footNote : "Footnote for the graph",
      footNoteFontFamily : "'Arial'",
      footNoteFontSize : 8,
      footNoteFontStyle : "bold",
      footNoteFontColor : "#666",
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
      yAxisLabel : "Y Axis Label",
      yAxisFontFamily : "'Arial'",
      yAxisFontSize : 16,
      yAxisFontStyle : "normal",
      yAxisFontColor : "#666",
      xAxisLabel : "pX Axis Label",
      xAxisFontFamily : "'Arial'",
      xAxisFontSize : 16,
      xAxisFontStyle : "normal",
      xAxisFontColor : "#666",
      yAxisUnit : "Y Unit",
      yAxisUnitFontFamily : "'Arial'",
      yAxisUnitFontSize : 8,
      yAxisUnitFontStyle : "normal",
      yAxisUnitFontColor : "#666",
      annotateDisplay : true, 
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

var SeasonPurchaseOpts = {
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
      graphTitle : "各季度购买总次数综合分布图",
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
}

var avgPersonPurchaseOpts = {
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
      graphTitle : "每人每年平均购买次数分布图（2011-2014）",
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
      graphTitle : "单日用户在线总时长折线图",
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
/*
function lym_processData(allText, col) {
    var allTextLines = allText.split(/\r\n|\n/);
    //var headers = allTextLines[0].split(',');
    for (var i=1; i<allTextLines.length; i++) {
        col[i].push(allTextLines[i]);
        
    }
}*/

function sum(numArray){
    for (var sum = i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
}

function loadPurchaseData(){
  clearAll();
  loadSeasonPurchaseData();
  loadAvgPersonPurchase();
  loadPurchaseSumAvgCost();
  
}

function loadAvgPersonPurchase() {
    var element = $('#canvas-container');
    var canvas1="<canvas id=\"chart1\"></canvas>";
    element.append(canvas1);

    var columns = [[]];

    $.ajax({
        type: "GET",
        url: "data/Purchase/AvgPersonPurchaseTime.txt",
        dataType: "text",
        success: function(data) {
            processData(data,columns);
            //console.log(columns);
            
            //numOfDevices = sum(columns[1].map(returnInt))
            final_data_points = []
            final_data_points.push(columns[0][0]).toFixed(3);
            final_data_points.push(columns[0][1]).toFixed(3);
            final_data_points.push(columns[0][2]).toFixed(3);
            final_data_points.push(columns[0][3]).toFixed(3);
            //console.log(final_data_points)
             
            var barChartData = {
                labels : ["2011年","2012年","2013年","2014年",],
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

            var ctx = document.getElementById("chart1").getContext("2d");
            window.myLine = new Chart(ctx).Bar(barChartData, avgPersonPurchaseOpts);
            
            
        }
     });

}

var label_list = [];
var daily_viewing_hour_list = [];

function loadPurchaseSumAvgCost() {
    var element = $('#canvas-container');
    var canvas2="<canvas id=\"chart2\"></canvas>"
    var nav = "<nav id=\"chart-nav\">\
      <ul class=\"pager\">\
        <li class=\"previous disabled\"><a href=\"javascript:void(0);\" onclick = \"moveBackward2()\"><span aria-hidden=\"true\">&larr;</span>更早</a></li>\
        <li class=\"next\"><a href=\"javascript:void(0);\" onclick = \"moveForward2()\">更晚<span aria-hidden=\"true\">&rarr;</span></a></li>\
      </ul>\
    </nav>";
    element.append(canvas2);
    element.append(nav);

    var columns2 = [[]];
    $.ajax({
        type: "GET",
        url: "data/Purchase/PurchaseSum&AvgCost.txt",
        dataType: "text",
        success: function(data) {
            processData(data,columns2);
            final_data_points1 = []
            final_data_points1.push(columns2[0][0]).toFixed(3);
            final_data_points1.push(columns2[0][1]).toFixed(3);
            final_data_points1.push(columns2[0][2]).toFixed(3);
            final_data_points1.push(columns2[0][3]).toFixed(3);
            
            console.log(final_data_points1)

            final_data_points2 = []
            final_data_points2.push(columns2[1][0]).toFixed(3);
            final_data_points2.push(columns2[1][1]).toFixed(3);
            final_data_points2.push(columns2[1][2]).toFixed(3);
            final_data_points2.push(columns2[1][3]).toFixed(3);
            console.log(final_data_points2)
/*            
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
*/

            var mydata1 = {
              labels : ["2011年","2012年","2013年","2014年"],
              datasets : [
                {
                  fillColor : "rgba(220,220,220,0.5)",
                  strokeColor : "rgba(220,220,220,1)",
                  pointColor : "rgba(220,220,220,1)",
                  pointStrokeColor : "#fff",
                  data : final_data_points1,
                  title : "PurchaseSum"
                },
                {
                  fillColor : "rgba(151,187,205,0.5)",
                  strokeColor : "rgba(151,187,205,1)",
                  pointColor : "rgba(151,187,205,1)",
                  pointStrokeColor : "#fff",
                  data : final_data_points2,
                  title : "Average Cost"
                }
              ]
            }
            var ctx2 = document.getElementById("chart2").getContext("2d")
            window.myLine = new Chart(ctx2).Bar(mydata1,newopts);
        }
     });




}

function loadSeasonPurchaseData() {
    var element = $('#canvas-container');
    var canvas3="<canvas id=\"chart3\"></canvas>";
    element.append(canvas3);   
    var columns3 = [[]];

    $.ajax({
        type: "GET",
        url: "data/Purchase/SeasonPurchase.txt",
        dataType: "text",
        success: function(data) {
            processData(data,columns3);
            console.log(columns3);
            final_data_points = []
            for(i = 0; i<16; i++)
            {
              final_data_points.push(columns3[0][i]).toFixed(3);
            }
            

            var lineChartData = {
                labels : ["2011春","2011夏","2011秋","2011冬","2012春","2012夏","2012秋","2012冬","2013春","2013夏","2013秋","2013冬","2014春","2014夏","2014秋","2014冬"],
                datasets : [
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

            var ctx = document.getElementById("chart3").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, SeasonPurchaseOpts);
        }
     });

}

function moveForward2() {
  if (end >= daily_viewing_hour_list.length) return;
  
  $("#chart2").remove();
  var canvas2="<canvas id=\"chart2\"></canvas>"
  $("#chart-nav").before(canvas2);

  start += 14;
  end += 14;

  if(start > 0){
    $(".previous").removeClass("disabled");
    $($(".previous").children()).attr("onclick", "moveBackward2();");
  }
  else{
    $(".previous").addClass("disabled");
    $($(".previous").children()).removeAttr("onclick");
  }

  if(end >= daily_viewing_hour_list.length){
    $(".next").addClass("disabled");
    $($(".next").children()).removeAttr("onclick");
  }
  else{
    $(".next").removeClass("disabled");
    $($(".next").children()).attr("onclick", "moveForward2();");
  }

  var LineChartData = {
      labels : label_list.slice(start,end),
      datasets : [
          {
              label: "Online Hours",
              fillColor : "rgba(220,220,220,0.2)",
              strokeColor : "rgba(220,220,220,1)",
              pointColor : "rgba(220,220,220,1)",
              pointStrokeColor : "#fff",
              pointHighlightFill : "#fff",
              pointHighlightStroke : "rgba(220,220,220,1)",
              data : daily_viewing_hour_list.slice(start,end)
          }
      ]
  }

  var ctx = document.getElementById("chart2").getContext("2d");
  window.myLine = new Chart(ctx).Line(LineChartData, perDayOnlineHourOpts);
}

function moveBackward2() {
  if(start <= 0) return;

  $("#chart2").remove();
  var canvas2="<canvas id=\"chart2\"></canvas>"
  $("#chart-nav").before(canvas2);

  start -= 14;
  end -= 14;
  if(start > 0){
    $(".previous").removeClass("disabled");
    $($(".previous").children()).attr("onclick", "moveBackward2();");
  }
  else{
    $(".previous").addClass("disabled");
    $($(".previous").children()).removeAttr("onclick");
  }

  if(end >= daily_viewing_hour_list.length){
    $(".next").addClass("disabled");
    $($(".next").children()).removeAttr("onclick");
  }
  else{
    $(".next").removeClass("disabled");
    $($(".next").children()).attr("onclick", "moveForward2();");
  }

  var LineChartData = {
      labels : label_list.slice(start,end),
      datasets : [
          {
              label: "Online Hours",
              fillColor : "rgba(220,220,220,0.2)",
              strokeColor : "rgba(220,220,220,1)",
              pointColor : "rgba(220,220,220,1)",
              pointStrokeColor : "#fff",
              pointHighlightFill : "#fff",
              pointHighlightStroke : "rgba(220,220,220,1)",
              data : daily_viewing_hour_list.slice(start,end)
          }
      ]
  }

  var ctx = document.getElementById("chart2").getContext("2d");
  window.myLine = new Chart(ctx).Line(LineChartData, perDayOnlineHourOpts);
}

