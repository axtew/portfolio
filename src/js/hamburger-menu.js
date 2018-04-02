module.exports = ( function () {
	var burgerMenu = document.querySelector('.burger-menu');
			navMenu = document.querySelector('.nav-menu'),
			navMenuList = document.querySelector('.nav-menu__list'),
			left = document.querySelector('.nav-menu__left-bg'),
			right = document.querySelector('.nav-menu__right-bg'),
			isActive = false;

	return {
		init: function () {
			burgerMenu.addEventListener('click', function() {
				if(!isActive) {
					isActive = true;
					burgerMenu.classList.add('burger-menu--active');
					$('.nav-menu').animate({'z-index':'100'}, 10,function(){
						$('.nav-menu__left-bg').animate({'right':'49%'}, 400,function(){});
						$('.nav-menu__right-bg').animate({'left':'49%'}, 400,function(){
							$('.nav-menu__list').animate({'opacity':'1'}, 300,function(){});
						});
					});
				} else {
					isActive = false;
					burgerMenu.classList.remove('burger-menu--active');
					$('.nav-menu__list').animate({'opacity':'0'}, 300,function(){
						$('.nav-menu__left-bg').animate({'right':'100%'}, 400,function(){});
						$('.nav-menu__right-bg').animate({'left':'100%'}, 400,function(){
							$('.nav-menu').animate({'z-index':'-1'}, 10,function(){  
									
							});
						});
					});
				}
			});

			if(isActive) {
				window.onscroll = function(e) {
					console.log('eee');
				};
			};
		}
	}
}());





// var hamburger = ( function () {
// 	var burgerMenu = document.querySelector('.burger-menu__list');
// 			navMenu = document.querySelector('.nav-menu'),
// 			left = document.querySelector('.nav-menu__left-bg'),
// 			right = document.querySelector('.nav-menu__right-bg'),
// 			navMenuItem = document.querySelector('.nav-menu__item');
// 			isActive = false;

// 		var opacity,
// 				absilutePos,
// 				zIndex;

// 	$('.burger-menu__list').on('click', function(e) {
// 		if(!isActive) {
// 			isActive = true;
// 			opacity = 1;
// 			absilutePos = 50;
// 			zIndex = -1;
// 		} else {
// 			isActive = false;
// 			opacity = 0;
// 			absilutePos = 100;
// 			zIndex = 100;
// 		}
// 		hamburger.init();
// 	})

// 	return {
// 		init: function () {
// 			left.style.right = absilutePos + '%';
// 			right.style.left = absilutePos + '%';

// 			var counter = 0;

// 			this.visible(counter);
// 		},
// 		visible: function (counter) {
// 			function each() {
// 				var items = $('.nav-menu__item');
// 				var item = items.eq(counter).find('.nav-menu__link');
	
// 				item.css({
// 					'opacity' : opacity
// 				});
	
// 				if(counter < items.length) {
// 					counter++;
// 					setTimeout(each, 200);
// 				}
// 			}

// 			each();
// 		}
// 	}
// }());
