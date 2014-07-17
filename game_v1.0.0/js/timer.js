/**
 *
 * 作者：袁扬
 * 日期：2014.7.15
 * 功能：游戏界面棋盘上的鼠标点击事件处理
 *
 */

//初始时间
var init_time = $('.timer')[0].innerHTML;
var init_seconds = Number(init_time[0]) * 60 + Number(init_time.slice(2,4));


//减1秒
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

//开启倒计时
var t = window.setInterval(countdown, 1000);

//结束倒计时
var out = window.setTimeout(function(){
	window.clearInterval(t);
	GameOver(0, numOfDou);
},init_seconds * 1000 + 500);

//游戏暂停处理
function pause_game(){
	window.clearInterval(t);
	window.clearInterval(out);
}

//游戏继续处理
function resume_game(){
	init_time = $('.timer')[0].innerHTML;
	init_seconds = Number(init_time[0]) * 60 + Number(init_time.slice(2,4));
	t = window.setInterval(countdown, 1000);
	out = window.setTimeout(function(){
		window.clearInterval(t);
		GameOver(0, numOfDou);
	},init_seconds * 1000 + 500);
}