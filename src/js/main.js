// console.log('in main.js!');

const WebGLBlock = document.querySelector('.intro__background'),
			btnClick = document.querySelector('.btn__click'),
			burgerMenu = document.querySelector('.burger-menu__list'),
			header = document.querySelector('.header'),
			skills = document.querySelector('.skills__rating'),
			blurWrap = document.querySelector('.blur__wrap'),
			blogCont = document.querySelector('.blog'),
			menuBurger = document.querySelector('.header__burger-menu');

var slider = require('./slider');
if(menuBurger) {
	var burger = require('./hamburger-menu');
}
if(blogCont) {
	var blog = require('./blog');
}
const parallax = require('./parallax');
if(WebGLBlock) {
	var webGL = require('./water');
}
if(blurWrap) {
	var blur = require('./blur');
}
if(skills) {
	var scroll = require('./skills');
}

// переворачивавание карточки
if(btnClick) {
	$('.btn__click').on('click', function(e) {
		e.preventDefault();
		$('.intro__btn').toggleClass('intro__btn--active');
		$('.intro__card-front').toggleClass('intro__card-front--active');
		$('.intro__card-back').toggleClass('intro__card-back--active');
	})
}

// прокрутка по нажатию стрелки
if(header) {
	const scrollElem = $('.header').next();
	$('.header__arrow').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $(scrollElem).offset().top }, 500);
	})
};

window.onscroll = function() {
	var wScroll = window.pageYOffset;
	if(blogCont) {
		blog.scrollActive(wScroll);
	}

	if(header) {
		parallax.init(wScroll);
	}
	
	if(skills) {
		scroll.grow(wScroll, 25, 0);
	}
};

window.onresize = function () {
	if(blurWrap) {
		blur.default.set();
	}
};

if(blurWrap) {
	blur.default.set();
}

if(blogCont) {
	blog.init();
}

if(menuBurger) {
	burger.init();
}

slider.init();

$('.blog-nav').on('click', function(e) {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(this).toggleClass('blog-nav--active');
	}
});

document.body.addEventListener('wheel', function(e) {
	if(document.querySelector('.burger-menu--active')) {
		e.preventDefault();
	};
});