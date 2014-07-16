var init_time = $('.timer')[0].innerHTML;
var init_seconds = Number(init_time[0]) * 60 + Number(init_time.slice(2,4));

function countdown(){
	var str = $('.timer')[0].innerHTML;
	//console.log(str);
	remain_seconds = Number(str[0]) * 60 + Number(str.slice(2,4)) - 1;
	//console.log(remain_seconds);
	var min = parseInt(remain_seconds / 60);
	var ten_seconds = parseInt((remain_seconds - min * 60) / 10);
	var seconds = remain_seconds - min * 60 - ten_seconds * 10;
	var new_time = String(min)+':'+String(ten_seconds)+String(seconds);
	$('.timer')[0].innerHTML = new_time;
}

var t = window.setInterval(countdown, 1000);

var out = window.setTimeout(function(){
	window.clearInterval(t);
	GameOver(0, numOfDou);
},init_seconds * 1000 + 500);

function pause_game(){
	window.clearInterval(t);
	window.clearInterval(out);
}

function resume_game(){
	init_time = $('.timer')[0].innerHTML;
	init_seconds = Number(init_time[0]) * 60 + Number(init_time.slice(2,4));
	t = window.setInterval(countdown, 1000);
	out = window.setTimeout(function(){
		window.clearInterval(t);
		GameOver(0, numOfDou);
	},init_seconds * 1000 + 500);
}