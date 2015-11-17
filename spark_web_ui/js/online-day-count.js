
var lines = [[]];

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var lineChartData = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			label: "Online Day Count",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
	]
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                lines[j].push(data[j].replace(/\"/g, ""));
            }
        }
    }
    console.log(lines);
}

$(document).ready(function() {
		//process csv data
        $.ajax({
            type: "GET",
            url: "data/OnlineDayCount/part-00000",
            dataType: "text",
            success: function(data) {processData(data);}
         });

        //draw chart
    	var ctx = document.getElementById("test-chart").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
    });