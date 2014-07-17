/**
 * <script type="text/javascript" href="classic.js"></script>
 * @authors Wang Anqi (waqthss2012@163.com)
 * @date    2014-07-13 13:11:38
 * @version $1.0.0$
 */
//grid arguments definition
//var grid_property = [{"width":20,"height":12,"color":6}];
//init grid data
var grid, model, numOfDou;

function initGridData(){
	if(model == undefined){
		model = 0;
	}
	grid = new Array();
	for(i = 0; i < grid_property[model].height; i++){
		grid[i] = new Array();
	}
	randomGridData();
	while(!judgeGameContinue()){
		randomGridData();
	}
	return grid;
}

function randomGridData(){
	numOfDou = grid_property[model].height*grid_property[model].width;
	for(i = 0; i < grid_property[model].height; i++){
		for (j = 0; j < grid_property[model].width; j++) {
			if((grid[i][j] = parseInt(Math.random()*(grid_property[model].color+4)+1)) > grid_property[model].color){
				grid[i][j] = 0;
				numOfDou--;
			}
		};
	};
}

/*
//judge whether the game can continue
function judgeGameContinue(){
	for (i = 0; i < grid_property[model].height; i++) {
		for (j = 0; j < grid_property[model].width; j++) {
			if(judgeElimination(i,j)){
				return true;
			}
		};
	};
	return false;
}
*/

//judge whether the click can eliminate other grids
//record which can be eliminated
var elimination;
function judgeElimination(x,y){
	if(grid[x][y] > 0){
		return false;
	}
	elimination = new Array();
	var cross = new Array();
	for(i = y - 1; i >= 0; i-- ){
		if(grid[x][i] > 0){
			cross.push([grid[x][i],x,i]);
			break;
		}
	}
	for(i = y + 1; i < grid_property[model].width; i++){
		if(grid[x][i] > 0){
			cross.push([grid[x][i],x,i]);
			break;
		}
	}
	for(i = x - 1; i >= 0; i--){
		if(grid[i][y] > 0){
			cross.push([grid[i][y],i,y]);
			break;
		}
	}
	for(i = x + 1; i < grid_property[model].height; i++){
		if(grid[i][y] > 0){
			cross.push([grid[i][y],i,y]);
			break;
		}
	}
	for(i = 0; i < cross.length; i++){
		m = 0;
		for(j = i+1; j < cross.length; j++){
			if(cross[i][0] == cross[j][0]){
				if(m == 0){
					elimination.push([cross[i][1],cross[i][2]]);
					m = 1;
				}
				elimination.push([cross[j][1],cross[j][2]]);
				cross[j][0] = -j;
			}
		}
	}
	if(elimination.length > 0){
		for(i = 0; i < elimination.length; i++){
			grid[elimination[i][0]][elimination[i][1]] = 0;
		}
		numOfDou -= elimination.length;
		return true;
	}
	else{
		return false;
	}
}

//judge whether the game can continue
function judgeGameContinue(){
	if(numOfDou >= 20){
		return true;
	}
	var colorDou= new Array();
	for(i = 0; i <= grid_property[model].color; i++){
		colorDou[i] = new Array();
	}
	for (i = 0; i < grid_property[model].height; i++) {
		for (j = 0; j < grid_property[model].width; j++) {
			colorDou[grid[i][j]].push([i,j]);
		}
	}
	for (k = 1; k < colorDou.length; k++) {
		if(colorDou[k].length > 0){
			for(i = 0; i < colorDou[k].length; i++){
				for(j = i+1; j < colorDou[k].length; j++){
					if(judgeCross(colorDou[k][i][0],colorDou[k][i][1],colorDou[k][j][0],colorDou[k][j][1])){
						return true;
					}
				}
			}
		}
	}
	return false;
}

//judge whether two same dou can be eliminated
function judgeCross(x1,y1,x2,y2){
	if(x1 == x2 && Math.abs(y1-y2)==1){
		return false;
	}
	if(y1 == y2 && Math.abs(x1-x2) == 1){
		return false;
	}
	if(x1 > x2){
		temp = x1;
		x1 = x2;
		x2 = temp;

		temp = y1;
		y1 = y2;
		y2 = temp;
	}
	var i,j = true;

	if(y1 < y2){
		for(i = x1 + 1; i < x2; i++){
			if(grid[i][y1] != 0){
				j = false;
				break;
			}
		}
		for(i = y1 ; i < y2; i++){
			if(grid[x2][i] != 0){
				j = false;
				break;
			}
		}
		if(j){
			return true;
		}
		for(i = y1 + 1; i < y2; i++){
			if(grid[x1][i] != 0){
				return false;
			}
		}
		for(i = x1; i < x2; i++){
			if(grid[i][y2] != 0){
				return false;
			}
		}
		return true;
	}
	else{//y1 >= y2
		for(i = x1 + 1; i < x2; i++){
			if(grid[i][y1] != 0){
				j = false;
				break;
			}
		}
		for(i = y1 ; i > y2; i--){
			if(grid[x2][i] != 0){
				j = false;
				break;
			}
		}
		if(j){
			return true;
		}
		for(i = y1 - 1; i > y2; i--){
			if(grid[x1][i] != 0){
				return false;
			}
		}
		for(i = x1 ; i < x2; i++){
			if(grid[i][y2] != 0){
				return false;
			}
		}
		return true;
	}
	return false;
}