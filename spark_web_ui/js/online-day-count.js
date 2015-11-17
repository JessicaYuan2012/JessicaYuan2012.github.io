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
                    labels : columns[0].slice(0,20),
                    datasets : [
                        {
                            label: "Online Day Count",
                            fillColor : "rgba(220,220,220,0.2)",
                            strokeColor : "rgba(220,220,220,1)",
                            pointColor : "rgba(220,220,220,1)",
                            pointStrokeColor : "#fff",
                            pointHighlightFill : "#fff",
                            pointHighlightStroke : "rgba(220,220,220,1)",
                            data : columns[1].map(returnInt).slice(0,20)
                        }
                    ]
                }

                var ctx = document.getElementById("test-chart").getContext("2d");
                ctx.canvas.width = 700;
                ctx.canvas.height = 500;
                window.myLine = new Chart(ctx).Line(lineChartData, {
                    responsive: true
                });
            }
         });

}