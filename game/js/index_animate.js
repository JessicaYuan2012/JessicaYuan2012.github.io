//首页鼠标点击动画事件

function stage(){
	var l = $('.level-button').length;
	if($('.stage-mode-levels').attr('style') == 'opacity:0'){
		$('.stage-mode-levels').attr('style','opacity:1');
		var interval = 80;
		//1-7关依次出现
		$($('.level-button')[0]).attr('style','opacity:1');
		$($('.level-button')[0]).addClass('animated fadeInRight');
		setTimeout(function(){
			$($('.level-button')[1]).attr('style','opacity:1');
			$($('.level-button')[1]).addClass('animated fadeInRight');
		},interval*1);
		setTimeout(function(){
			$($('.level-button')[2]).attr('style','opacity:1');
			$($('.level-button')[2]).addClass('animated fadeInRight');
		},interval*2);
		setTimeout(function(){
			$($('.level-button')[3]).attr('style','opacity:1');
			$($('.level-button')[3]).addClass('animated fadeInRight');
		},interval*3);
		setTimeout(function(){
			$($('.level-button')[4]).attr('style','opacity:1');
			$($('.level-button')[4]).addClass('animated fadeInRight');
		},interval*4);
		setTimeout(function(){
			$($('.level-button')[5]).attr('style','opacity:1');
			$($('.level-button')[5]).addClass('animated fadeInRight');
		},interval*5);
		setTimeout(function(){
			$($('.level-button')[6]).attr('style','opacity:1');
			$($('.level-button')[6]).addClass('animated fadeInRight');
		},interval*6);

		setTimeout(function(){
			for(var i = 0; i < l; i++){
				$($('.level-button')[i]).removeClass('fadeInRight');
			}
		},1000);

		//关卡说明出现
		$('.stage-mode-instructions').attr('style','opacity:1');
		$('.stage-mode-instructions').addClass('animated fadeInLeft');
		setTimeout(function(){
			$('.stage-mode-instructions').removeClass('fadeInLeft');
		},1000);
	}
	else{
		//消失
		$('.stage-mode-instructions').addClass('fadeOut');	
		$('.stage-mode-levels').addClass('animated fadeOut');

		setTimeout(function(){
			$('.stage-mode-instructions').attr('style','opacity:0');
			$('.stage-mode-levels').attr('style','opacity:0');
			$('.stage-mode-instructions').removeClass('fadeOut');
			$('.stage-mode-levels').removeClass('fadeOut');
			for(var i = 0; i < l; i++){
				$($('.level-button')[i]).attr('style','opacity:0');
			}
		},1000);

	}
	
}

$('.red').attr('onclick',"stage()");

function classic(){
	var l = $('.classic-level-button').length;
	if($('.classic-mode-levels').attr('style') == 'opacity:0'){
		$('.classic-mode-levels').attr('style','opacity:1');

		var interval = 100;
		//easy normal hard依次出现
		$($('.classic-level-button')[0]).attr('style','opacity:1');
		$($('.classic-level-button')[0]).addClass('animated fadeInRight');
		setTimeout(function(){
			$($('.classic-level-button')[1]).attr('style','opacity:1');
			$($('.classic-level-button')[1]).addClass('animated fadeInRight');
		},interval*1);
		setTimeout(function(){
			$($('.classic-level-button')[2]).attr('style','opacity:1');
			$($('.classic-level-button')[2]).addClass('animated fadeInRight');
		},interval*2);

		setTimeout(function(){
			for(var i = 0; i < l; i++){
				$($('.classic-level-button')[i]).removeClass('fadeInRight');
			}
		},1000);

		//关卡说明出现
		$('.classic-mode-instructions').attr('style','opacity:1');
		$('.classic-mode-instructions').addClass('animated fadeInLeft');
		setTimeout(function(){
			$('.classic-mode-instructions').removeClass('fadeInLeft');
		},1000);
	}
	else{
		//消失
		$('.classic-mode-instructions').addClass('fadeOut');	
		$('.classic-mode-levels').addClass('animated fadeOut');

		setTimeout(function(){
			$('.classic-mode-instructions').attr('style','opacity:0');
			$('.classic-mode-levels').attr('style','opacity:0');
			$('.classic-mode-instructions').removeClass('fadeOut');
			$('.classic-mode-levels').removeClass('fadeOut');
			for(var i = 0; i < l; i++){
				$($('.classic-level-button')[i]).attr('style','opacity:0');
			}
		},500);
	}
	
}

$('.orange').attr('onclick',"classic()");