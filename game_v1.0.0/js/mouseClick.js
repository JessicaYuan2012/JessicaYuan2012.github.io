/**
 *
 * 作者：袁扬
 * 日期：2014.7.14
 * 功能：游戏界面棋盘上的鼠标点击事件处理
 *
 */

function gridClicked(e)
{
	//获取点击元素
	var targ;
	if (!e){
		var e = window.event;
	}
	if (e.target){
		targ = e.target;
	}
	else if (e.srcElement){
		targ = e.srcElement;
	} 

	//点了豆豆
	if(targ.classList[0] == 'doudou'){
		//错误处理
		//$('#bad')[0].play();
	}
	//点的是空格
	else{
		//首先获取坐标(x,y)
		for(var i=0; i<targ.classList.length; i++){
			if(targ.classList[i].indexOf('position') >= 0){
				break;
			}
		}
		var str = targ.classList[i].split('-');
		var x = Number(str[1]);
		var y = Number(str[2]);

		//判断是否是能消除豆豆的位置（调用判断函数judgeElimination）
		var anim_name = 'zoomOut';
		if(judgeElimination(x, y)){
			//音效
			$('#good')[0].play();

			//动画效果
			var temp;
			for(var i = 0; i < elimination.length; i++)
			{
				temp = $('.position-'+String(elimination[i][0])+'-'+String(elimination[i][1]));
				temp.addClass('animated ' + anim_name);
			}

			setTimeout(function(){
				for(var i = 0; i < elimination.length; i++){
					temp = $('.position-'+String(elimination[i][0])+'-'+String(elimination[i][1]));
					var color = temp[0].classList[1];
					temp.removeClass('doudou');
					temp.removeClass(color);
					temp.removeClass(anim_name);
					temp.addClass('empty');
				}
			},300);

				//判断是否没有匹配的对了（调用judgeGameContinue以及GameOver），如果没有了，游戏结束
				if(!judgeGameContinue()){
					if(numOfDou == 0){
						if(mode == 1){
							GameOver(1, 0, level_num);
						}
						else{
							GameOver(1, 0);
						}
					}
					else{
						//stage mode
						if(mode == 1){
							GameOver(0, numOfDou, level_num);
						}
						//classic mode
						else if(mode == 2){
							GameOver(1, numOfDou);
						}
					}
					if(mode == 2){
						//结束倒计时
						window.clearInterval(t);
						window.clearTimeout(out);
					}
				}
		}
		else{//如果不是能消除豆豆的位置：错误处理
			//经典模式下的倒计时处理
			if(mode == 2){
				countdown();
				countdown();
				window.clearTimeout(out);
				init_time = $('.timer')[0].innerHTML;
				init_seconds = Number(init_time[0]) * 60 + Number(init_time.slice(2,4));
				out = window.setTimeout(function(){
					window.clearInterval(t);
					GameOver(0,numOfDou);
				},init_seconds * 1000);
			}
			//音效
			$('#bad')[0].play();
		}
	}	
}