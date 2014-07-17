/**
 * 
 * @authors waq (waqthss2012@163.com)
 * @date    2014-07-16 16:54:25
 * @version $1.0.0$
 */
$("body").css("text-align","center");
$(".container").before("<div class='layout1'><div class='dw'><div class='cover' onclick='event.cancelBubble=true;'></div></div>");
$(".cover").append('<div class="help"><div class="closeHelp"><img class="closeimg" src="./img/exit.gif"/></div><img class="helpimg" src="./img/instruction.gif"/><div class="instruction"><h3></h3></div></div>');
$(".cover").css({"left":"-525px","width":"1050px","height":"650px"});
$(".help").css("display","block");
$(".layout1").append($(".container"));
$(".instruction").addClass("title");
$(".instruction h3").html('Click the empty cell to clean up the dots of the same color in the cross direction.');

$("#help_button").click(function(event) {
	/* Act on the event */
	$(".help").css("opacity","1");
	$(".cover").css("opacity","1");
	$(".cover").css("z-index","4");
	$(".cover").css("display","inline");
	$(".cover").addClass('animated fadeInDown');
	setTimeout(function(){
		$('.cover').removeClass('fadeInDown');
	},1000);
});
$(".closeHelp").click(function(event) {
	/* Act on the event */
	$(".cover").addClass('animated fadeOutUp');
	setTimeout(function(){
		$('.cover').removeClass('fadeOutUp');
	},1000);
	$(".cover").css("opacity","0");
	$(".cover").css("z-index","0");
	$(".help").css("opacity","0");
});