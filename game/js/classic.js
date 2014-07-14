/**
 * <script type="text/javascript" href="classic.js"></script>
 * @authors Wang Anqi (waqthss2012@163.com)
 * @date    2014-07-13 13:11:38
 * @version $1.0.0$
 */
//grid arguments definition
//var grid_property = [{"width":20,"height":12,"color":6}];
//init grid data
var grid, model;
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
	for(i = 0; i < grid_property[model].height; i++){
		for (j = 0; j < grid_property[model].width; j++) {
			if((grid[i][j] = parseInt(Math.random()*(grid_property[model].color+4)+1)) > grid_property[model].color){
				grid[i][j] = 0;
			}
		};
	};
}

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
		return true;
	}
	else{
		return false;
	}
}
