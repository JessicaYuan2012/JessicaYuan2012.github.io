function showIndex(){
	clearAll();
	addIndexContent();
}

function clearAll(){
	clearCanvas();
	clearContent();
}

function clearCanvas() {
    var element = $('#canvas-container');
    if(element.children() != []){
      $(element.children()).remove();
    }
}

function clearContent() {
    var element = $('#content-container');
    element.attr("style","");
    if(element.children() != []){
      $(element.children()).remove();
    }
}

function addIndexContent() {
	var element = $('#content-container');
    element.attr("style","text-align:center");
	var content = "<h4>云数据管理(1)</h4>\
    <h2>基于分布式系统的电视观看行为统计分析</h2>\
    <img style=\"margin:30px;\" src=\"img/tv.jpg\" class=\"img-responsive img-thumbnail animated tada\" alt=\"Responsive image\" />\
    <p>袁扬   桑留芳   林杨湄</p>\
    <p><small>2015.11.20</small></p>";
    element.append(content);
}