function showIndex(){
	clearAll();
	addIndexContent();
    $('li').css("background", "#e3e3e3");
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
    $('li a').css("color", "#b3b3b3");
    $('#overview').css("color", "white");
}

function showHadoop(){
    clearAll();
    var element = $('#content-container');
    var content = "<h4>hadoop, spark集群配置: 一定要记得修改文件权限 = =。</h4>\
                  <br>\
                  <h4>sbt构建项目遇到的问题</h4>\
                  <pre>libraryDependencies += \"org.apache.spark\" %% \"spark-core\" % \"1.5.2\"</pre>\
                  <pre>libraryDependencies += groupID % artifactID % revision % configuration</pre>\
                  <pre>libraryDependencies += groupID %% artifactID % revision % configuration</pre>\
                  <br>\
                  <h4>spark sql遇到的问题</h4>\
                  <p>spark shell中用group by等比较高级一些的sql语句没有结果, 但是在用sbt打包之后再运行没有任何问题</p>\
                  ";
    element.append(content);

    $('li a').css("color", "#b3b3b3");
    $('#hadoop').css("color", "white");
}

function showSpark(){
    clearAll();
    var element = $('#content-container');
    var content = "<h3 style=\"text-align: left\">计算——SparkSQL</h3>\
                <br>\
                <p style=\"text-align: left\">Spark SQL is a Spark module for structured data processing. It provides a programming abstraction called DataFrames and can also act as distributed SQL query engine.</p>\
                <br>\
                <p style=\"text-align: left\">spark csv library: input(csv) -> DataFrame -> output(csv)</p>\
                <br>\
                <pre style=\"text-align: left\">\
import org.apache.spark.SparkContext\n\
import org.apache.spark.SparkContext._\n\
import org.apache.spark.SparkConf\n\
import org.apache.spark.sql.SQLContext\n\
\n\
object CSVReader {\n\
    def main(args: Array[String]) {\n\
        val conf = new SparkConf().setAppName(\"CSVReader\")\n\
        val sc = new SparkContext(conf)\n\
        val sqlContext = new org.apache.spark.sql.SQLContext(sc)\n\
        val df = sqlContext.read.format(\"com.databricks.spark.csv\").option(\"header\", \"true\").option(\"inferSchema\", \"true\").load(\"input/EventClientChannelTune_small.csv\")\n\
        df.registerTempTable(\"ecct\")\n\
\n\
        val df2 = sqlContext.sql(\"SELECT ChannelNumber, SUM(Duration) FROM ecct GROUP BY ChannelNumber\")\n\
        df2.repartition(1).write.format(\"com.databricks.spark.csv\").option(\"header\", \"true\").save(\"output/groupBy_output\")\n\
    }\n\
}\n\
            </pre>\
            <br>\
            ";
    element.append(content);
    $('li a').css("color", "#b3b3b3");
    $('#spark').css("color", "white");
}