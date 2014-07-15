function gridClicked(e)
{
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

	//console.log(targ.classList);
	//点了豆豆
	if(targ.classList[0] == 'doudou'){
		//console.log('doudou clicked!');
		//错误处理
		$('#bad')[0].play();
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
		//console.log('('+String(x)+','+String(y)+')clicked')
		//判断是否是能消除豆豆的位置
		var anim_name = 'zoomOut';
		if(judgeElimination(x, y)){
			//console.log(elimination);
			$('#good')[0].play();
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

				//判断是否没有匹配的对了，如果没有了，游戏结束
				if(!judgeGameContinue()){
					if(numOfDou == 0){
						alert("Perfect!");
					}
					else{
						alert("Game over! Dots Left: "+String(numOfDou));
					}
					if(t){
						window.clearInterval(t);
						window.clearTimeout(out);					
					}

				}
		}
		else{//如果不是错误处理（音效）
			//console.log('不能消哦~');
			$('#bad')[0].play();
		}
	}	
}