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
                //console.log("out of processData:");
                //console.log(columns);
                var lineChartData = {
                    labels : ["0-19天","20-39天","40-59天","60-79天","80-99天","100-119天","120-139天","140-159天","160-179天","180天以上"],
                    datasets : [
                        {
                            label: "Online Day Count",
                            fillColor : "rgba(220,220,220,0.2)",
                            strokeColor : "rgba(220,220,220,1)",
                            pointColor : "rgba(220,220,220,1)",
                            pointStrokeColor : "#fff",
                            pointHighlightFill : "#fff",
                            pointHighlightStroke : "rgba(220,220,220,1)",
                            data : [sum(columns[1].map(returnInt).slice(0,18)), \
                                    sum(columns[1].map(returnInt).slice(19,38)), \
                                    sum(columns[1].map(returnInt).slice(39,58)), \
                                    sum(columns[1].map(returnInt).slice(59,78)), \
                                    sum(columns[1].map(returnInt).slice(79,98)), \
                                    sum(columns[1].map(returnInt).slice(99,118)), \
                                    sum(columns[1].map(returnInt).slice(119,138)), \
                                    sum(columns[1].map(returnInt).slice(139,158)), \
                                    sum(columns[1].map(returnInt).slice(159,178)), \
                                    sum(columns[1].map(returnInt).slice(179,180))]
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