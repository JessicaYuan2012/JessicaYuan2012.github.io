/**
 * 
 * @authors Wang Anqi (waqthss2012@163.com)
 * @date    2014-07-15 13:29:10
 * @version $1.0.0$
 */
 <!--LocalStorage-->
var storage = $.localStorage;
$("audio")[0].muted = storage.get('muted');
$("audio")[1].muted = storage.get('muted');

 <!--Game Pause-->
//game pause
$(".game-container").before("<div style='position:absolute;top:0px;'><div class='gamePause' onclick='pause()'></div></div>");
$(".gamePause").append("<img style='width:40px' src='./img/pause.gif'/>");
function pause(){
	if(mode == 2){
		pause_game();
	}
	$(".cover").css("z-index","4");
	$(".cover").css("display","inline");
	$(".cover").addClass('animated fadeInDown');
	setTimeout(function(){
		$('.cover').removeClass('fadeInDown');
	},1000);
	$(".cover").css("opacity","1");
}

//the cover
$("body").css("text-align","center");
$(".container").before("<div class='layout1'><div class='dw'><div class='cover' onclick='event.cancelBubble=true;'>");
$(".cover").append('<div class="funcmenu"></div>');
$(".layout1").append($(".container"));
$(".cover").css({"left":"-525px","width":"1050px","height":"735px"});
function hideCover(){
	if(mode == 2){
		resume_game();
	}
	$(".cover").addClass('animated fadeOutUp');
	$(".cover").css("z-index","1");
	$(".cover").css("opacity","0");
	setTimeout(function(){
		$('.cover').removeClass('fadeOutUp');
	},1000);
}

//the function menu
$(".funcmenu").append('<div class="functitle"><h2></h2></div>');
$(".functitle").addClass('title rubberband');
$(".functitle h2").html('Game Paused');
$(".funcmenu").append('<div class="funcOptions"></div>');
//function options
for(i = 0; i < 5; i++){
	$(".funcOptions").append('<div class="funcOption"></div>');
}
$(".funcOption:eq(4)").addClass('red');
$(".funcOption:eq(4)").css("background-image","url(./img/continue.gif)");
$(".funcOption:eq(1)").addClass('yellow');
$(".funcOption:eq(1)").css("background-image","url(./img/replay.gif)");
$(".funcOption:eq(2)").addClass('green');
$(".funcOption:eq(2)").css("background-image","url(./img/sound-on.gif)");
$(".funcOption:eq(3)").addClass('blue');
$(".funcOption:eq(3)").css("background-image","url(./img/home.gif)");
$(".funcOption:eq(0)").addClass('purple');
$(".funcOption:eq(0)").css("background-image","url(./img/help.gif)");

//the event of function options
//red button:back to game
$(".funcOption:eq(4)").click(function(event) {
	/* Act on the event */
	hideCover();
});


//yellow button:restart
$(".funcOption:eq(1)").click(function(event) {
	/* Act on the event */
	window.location.reload();
});


//green button: volume on/off
if($("audio")[0].muted){
	$(".cover .funcOption:eq(2)").css("background-image","url(./img/sound-off.gif)");
}
else{
	$(".cover .funcOption:eq(2)").css("background-image","url(./img/sound-on.gif)");
}

$(".funcOption:eq(2)").click(function(event) {
	/* Act on the event */
	toggleMute();
	if($("audio")[0].muted){
		$(".funcOption:eq(2)").css("background-image","url(./img/sound-off.gif)");
	}
	else{
		$(".funcOption:eq(2)").css("background-image","url(./img/sound-on.gif)");
	}
});

function toggleMute(){
	$("audio")[0].muted = !($("audio")[0].muted);
	$("audio")[1].muted = !($("audio")[1].muted);
	storage.set('muted',$("audio")[0].muted);
}


//blue button:back to the index
$(".funcOption:eq(3)").click(function(event) {
	/* Act on the event */
	window.location.href="./index.html";
});

//purple button:help game rule
$(".funcOption:eq(0)").click(function(event) {
	/* Act on the event */
	$(".help").css("opacity","1");
	$(".help").css("z-index","5");
	$(".help").addClass('animated fadeInDown');
	setTimeout(function(){
		$('.help').removeClass('fadeInDown');
	},500);
	//$(".funcmenu").css("z-index","3");
});
//help
$(".cover").append('<div class="help"><div class="closeHelp"><img class="closeimg" src="./img/exit.gif"/></div><img class="helpimg" src="./img/instruction.gif"/><div class="instruction"><h3></h3></div></div>');
$(".instruction").addClass("title");
$(".instruction h3").html('Click the empty cell to clean up the dots of the same color in the cross direction.');
$(".closeHelp").click(function(event) {
	/* Act on the event */
	$(".help").addClass('animated fadeOutUp');
	setTimeout(function(){
		$('.help').removeClass('fadeOutUp');
	},1000);
	$(".help").css("opacity","0");
	$(".help").css("z-index","0");
});



<!--Game Over-->
$(".container").before("<div class='dw'><div class='cover2' onclick='event.cancelBubble=true;'>");
$(".cover2").css({"left":"-525px","width":"1050px","height":"735px"});
$(".cover2").append('<div class="funcmenu"></div>');
$(".cover2 .funcmenu").append('<div class="functitle"><h2>Game Over</h2></div>');
$(".cover2 .functitle").addClass('title rubberband gameover');
$(".cover2 .funcmenu").append('<div class="funcOptions"></div>');
$(".cover2 .funcmenu").css("width",400);
$(".cover2 .funcmenu").css("height",200);
$(".cover2 .funcOptions").css("width",250);
$(".cover2 .functitle").after('<div class="dots"><h3></h3></div>');
$(".dots").addClass("title");
if(mode == 1){//stage mode
	for(i = 0; i < 3; i++){
		$(".cover2 .funcOptions").append('<div class="funcOption"></div>');
		$(".cover2 .funcOption:eq("+i+")").css("margin-right",15);
		$(".cover2 .funcOption:eq("+i+")").css("margin-left",15);
	}
	$(".cover2 .funcOption:eq(0)").addClass('yellow');
	$(".cover2 .funcOption:eq(1)").addClass('orange');
	$(".cover2 .funcOption:eq(2)").addClass('blue');
	$(".cover2 .funcOption:eq(0)").css("background-image","url(./img/replay.gif)");
	$(".cover2 .funcOption:eq(1)").css("background-image","url(./img/next-level.gif)");
	$(".cover2 .funcOption:eq(2)").css("background-image","url(./img/home.gif)");
	$(".cover2 .funcOption:eq(0)").click(function(event){
		/* Act on the event */
		window.location.reload();
	});
	
	$(".cover2 .funcOption:eq(2)").click(function(event) {
		/* Act on the event */
		window.location.href="./index.html";
	});
}
else if(mode == 2){//classic mode
	$(".cover2 .funcOptions").append('<div class="funcOption"></div>');
	$(".cover2 .funcOptions").append('<div class="funcOption"></div>');
	$(".cover2 .funcOption:eq(0)").addClass('yellow');
	$(".cover2 .funcOption:eq(1)").addClass('blue');
	$(".cover2 .funcOption:eq(0)").css("margin-right",25);
	$(".cover2 .funcOption:eq(0)").css("margin-left",40);
	$(".cover2 .funcOption:eq(1)").css("margin-right",25);
	$(".cover2 .funcOption:eq(1)").css("margin-left",40);

	$(".cover2 .funcOption:eq(0)").css("background-image","url(./img/replay.gif)");
	$(".cover2 .funcOption:eq(1)").css("background-image","url(./img/home.gif)");

	$(".cover2 .funcOption:eq(0)").click(function(event){
		/* Act on the event */
		window.location.reload();
	});
	$(".cover2 .funcOption:eq(1)").click(function(event) {
		/* Act on the event */
		window.location.href="./index.html";
	});
}

//when classic mode Game is over
//textContent: 0 for time out; 1 for failure; 2 for success.
function ClassicGameOver(textContent,dots){
	if(textContent == 0){
		$(".cover2 h2").html("Time's up!");
		$(".cover2 h3").html(dots+' dots left.');
	}
	else if(textContent == 1){
		if(dots == 0){
			$(".cover2 h2").html('Perfect!');
			$(".cover2 h3").html('You are the champion~');
		}
		else if(dots > 0){
			$(".cover2 h2").html('You made it!');
			$(".cover2 h3").html(dots+' dots left.<br/>Try to leave fewer dots next time~');
		}
	}
	$(".cover2").css("opacity","1");
	$(".cover2").css("z-index","4");
	$(".cover2").css("display","inline");
	$(".cover2").addClass('animated fadeInUp');
	setTimeout(function(){
		$('.cover2').removeClass('fadeInUp');
	},500);
}
//when stage mode game is over
//textContent: 0 for failure; 1 for success
MAX_LEVEL = 7;
function StageGameOver(textContent,dots,level){
	if(textContent == 0){
		$(".cover2 h2").html('Game over!');
		$(".cover2 h3").html(dots+' dots left.');
	}
	else if(textContent == 1){
		$(".cover2 h2").html('Perfect!');
		$(".cover2 h3").html('Try next level?');
	}
	$(".cover2 .funcOption:eq(1)").click(function(event){
		/* Act on the event */
		level++;
		if(level <= MAX_LEVEL && textContent == 1){
			window.location.href="./stage_mode_level"+level+".html";
		}
		else if(textContent == 0){
			$(".cover2 h3").html('Try to get through this level first.');
		}
		else{
			$(".cover2 h3").html('To be continued...');
		}
	});
	$(".cover2").css("opacity","1");
	$(".cover2").css("z-index","4");
	$(".cover2").css("display","inline");
	$(".cover2").addClass('animated fadeInDown');
	setTimeout(function(){
		$('.cover2').removeClass('fadeInDown');
	},500);
}

function solveGameOverCover(){
	$(".cover2").css('display','none');
}


//game's result:arguments[0]
//number of left dots:arguments[1]
//level of this page:arguments[2]
//arguments[0]-[1] needed
//arguments[2] is only needed when the mode is 1.
function GameOver(){
	if(mode == 1){
		StageGameOver(arguments[0],arguments[1],arguments[2]);
	}
	else if(mode == 2){
		ClassicGameOver(arguments[0],arguments[1]);
	}
}

