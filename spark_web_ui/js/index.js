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
    if(element[0].classList != []){
        element.removeClass(element[0].classList[0]);
    }
    if(element.children() != []){
      $(element.children()).remove();
    }
}

function clearContent() {
    var element = $('#content-container');
    element.attr("style","");
    if(element[0].classList != []){
        element.removeClass(element[0].classList[0]);
    }
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

function loadOverview() {
    clearAll();
    var element = $('#content-container');
    var content = "<h3 style=\"margin:30px;\">系统架构</h3>\
    <img style=\"margin:30px;width:80%\" src=\"img/structure.png\" class=\"img-responsive animated pulse\" alt=\"Responsive image\" />";
    element.append(content);
}