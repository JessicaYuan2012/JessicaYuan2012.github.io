//grid arguments definition
var grid_property = [{"width":0,"height":0,"color":0}];

//width最大值25，height最大值12
function initialize(width, height){
	//随机生成豆豆...
	grid_property[0].width = width;
	grid_property[0].height = height;
	var area = width*height;
	if(area > 300){
		grid_property[0].color = 8;
	}
	else if(area > 200){
		grid_property[0].color = 7;
	}
	else if(area >100){
		grid_property[0].color = 6;
	}
	else{
		grid_property[0].color = 5;
	}

	state = initGridData();

	var color=['','red','green','blue','yellow','purple','orange','pink','brown'];

	//设置棋盘格子和豆豆容器的长宽
	var top_margin = -(height*40+15)+(650-40*height-150)/2;
	if(height > 12){	
		$('.container').css("height",String(40*height+150)+'px');
	}
	$('.game-container').css('width',String(40*width)+'px');
	$('.game-container').css('height',String(40*height)+'px');
	$('.game-container').css('top',String((650-40*height-150)/2)+'px');
	$('.doudou-container').css('width',String(40*width)+'px');
	$('.doudou-container').css('height',String(40*height)+'px');
	$('.doudou-container').css("top",String(top_margin)+"px");
	$('.timer').css("top", String(top_margin + 10)+"px");


	//动态绘制棋盘
	var row;
	var col;
	for(var i = 0; i < height; i++){
		row = $('<div />');
		row.addClass('grid-row');
		for(var j = 0; j < width; j++){
			col = $('<div />');
			col.addClass('grid-cell-'+String((i+j)%2+1));
			row.append(col);
		}
		$('.game-container').append(row);
	}

	//动态绘制豆豆
	var temp;
	for(var i = 0; i < height; i++){
		for(var j = 0; j < width; j++){
			if(state[i][j] == 0){
				temp = $('<div />');
				temp.addClass('empty');
				temp.addClass('position-'+String(i)+'-'+String(j));
				$('.doudou-container').append(temp);
			}
			else{
					temp = $('<div />');
					temp.addClass('doudou');
					temp.addClass(color[state[i][j]]);
					temp.addClass('position-'+String(i)+'-'+String(j));
					$('.doudou-container').append(temp);
			}
			$('.position-'+String(i)+'-'+String(j)).css('top',String(40*i)+'px');
			$('.position-'+String(i)+'-'+String(j)).css('left',String(40*j)+'px');
		}
	}

}

$('.title').addClass('animated rubberBand');