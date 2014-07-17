/**
 *
 * 作者：袁扬
 * 日期：2014.7.16
 * 功能：首页动画实现
 *
 */

//点击stage mode按钮触发函数
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
		},1500);

		//元素出现后改变指针样式和添加超链接
		setTimeout(function(){
			for(var i = 0; i < l; i++){
				$($('.level-button')[i]).attr('style','cursor:pointer');
				$($('.level-button')[i]).attr('onclick', "window.location.href='stage_mode_level"+String(i+1)+".html'") ;
			}
		}, 500);

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

			//元素消失后改变指针样式和删除超链接
			for(var i = 0; i < l; i++){
				$($('.level-button')[i]).attr('style','opacity:0;cursor:default');
				$($('.level-button')[i]).attr('onclick', "") ;
			}
		},1000);

	}
	
}

$('#stage_mode_button').attr('onclick',"stage()");

//点击classic mode按钮触发函数
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
		},1500);

		setTimeout(function(){
			for(var i = 0; i < l; i++){
				$($('.classic-level-button')[i]).attr('style','cursor:pointer');
			}
			$($('.classic-level-button')[0]).attr('onclick', "window.location.href='classic_mode_easy.html';") ;
			$($('.classic-level-button')[1]).attr('onclick', "window.location.href='classic_mode_normal.html';") ;
			$($('.classic-level-button')[2]).attr('onclick', "window.location.href='classic_mode_hard.html';") ;
		}, 500);

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
				$($('.classic-level-button')[i]).attr('style','opacity:0;cursor:default');
				$($('.classic-level-button')[i]).attr('onclick', "") ;
			}
		},300);
	}
	
}

$('#classic_mode_button').attr('onclick',"classic()");

//豆豆的跳动效果
setInterval(function(){
	var anim_name = "rubberBand";
	$('.doudou').addClass('animated '+ anim_name);
	setTimeout(function(){
		$('.doudou').removeClass(anim_name);
	},1000);
},1500);
