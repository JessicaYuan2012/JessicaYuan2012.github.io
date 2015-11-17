var allopts = {
    //Boolean - If we show the scale above the chart data     -> Default value Changed
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

function returnInt(element){
  return parseInt(element,10);
}

function processData(allText, columns) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            for (var j=0; j<headers.length; j++) {
            	if (columns[j] == undefined){
            		columns[j] = [];
                }
                columns[j].push(data[j].replace(/\"/g, ""));
            }
        }
    }
    //console.log("in processData:");
    //console.log(columns);
}

function sum(numArray){
    for (var sum = i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
}

function loadOnlineDayCountData() {
		//process csv data
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
                var lineChartData = {
                    labels : ["0-19天","20-39天","40-59天","60-79天","80-99天","100-119天","120-139天","140-159天","160-181天"],
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

                var ctx = document.getElementById("test-chart").getContext("2d");
                window.myLine = new Chart(ctx).Bar(lineChartData, allopts);
            }
         });

}