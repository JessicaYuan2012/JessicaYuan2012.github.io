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
                final_data_points.push(sum(columns[1].map(returnInt).slice(0,19))/numOfDevices);
                final_data_points.push(sum(columns[1].map(returnInt).slice(19,39))/numOfDevices);
                final_data_points.push(sum(columns[1].map(returnInt).slice(39,59))/numOfDevices);
                final_data_points.push(sum(columns[1].map(returnInt).slice(59,79)));
                final_data_points.push(sum(columns[1].map(returnInt).slice(79,99)));
                final_data_points.push(sum(columns[1].map(returnInt).slice(99,119)));
                final_data_points.push(sum(columns[1].map(returnInt).slice(119,139)));
                final_data_points.push(sum(columns[1].map(returnInt).slice(139,159)));
                final_data_points.push(sum(columns[1].map(returnInt).slice(159,185)));
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
                ctx.canvas.width = 700;
                ctx.canvas.height = 500;
                window.myLine = new Chart(ctx).Line(lineChartData, {
                    responsive: true,
                    scaleShowGridLines : false,
                    pointHitDetectionRadius: 20
                });
            }
         });

}