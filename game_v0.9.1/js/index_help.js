/**
 * 
 * @authors waq (waqthss2012@163.com)
 * @date    2014-07-16 16:54:25
 * @version $1.0.0$
 */
$(".container").before("<div class='cover' onclick='event.cancelBubble=true;'>");
$(".cover").append('<div class="help"><div class="closeHelp"><img class="closeimg" src="./img/exit.gif"/></div><img class="helpimg" src="./img/instruction.gif"/><div class="instruction"><h3></h3></div></div>');
var coverHeight = $(".container").css("height");
var coverWidth = $("body").css("width");
$(".cover").css("height",coverHeight);
$(".cover").css("width",coverWidth);
$(".instruction").addClass("title");
$(".instruction h3").html('Click the empty cell to clean up the dots of the same color in the cross direction.');
$("#help_button").click(function(event) {
	/* Act on the event */
	$(".cover").css("display","block")
	$(".help").css("display","block");
});
$(".closeHelp").click(function(event) {
	/* Act on the event */
	$(".help").css("display","none");
	$(".cover").css("display","none")
});