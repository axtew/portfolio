// console.log('in main.js!');

const WebGLBlock = document.querySelector('.intro__background'),
			btnClick = document.querySelector('.btn__click'),
			burgerMenu = document.querySelector('.burger-menu__list'),
			header = document.querySelector('.header'),
			skills = document.querySelector('.skills__rating'),
			blurWrap = document.querySelector('.blur__wrap'),
			blogCont = document.querySelector('.blog'),
			menuBurger = document.querySelector('.header__burger-menu');

var isMobile = false;
var width = document.body.clientWidth;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	isMobile = true;

const preloader = require('./preloader');
const slider = require('./slider');
const parallax = require('./parallax');
const check = require('./check');

if(menuBurger)
	var burger = require('./hamburger-menu');

if(blogCont)
	var blog = require('./blog');

if(WebGLBlock)
	if (!isMobile)
		var webGL = require('./water');

if(blurWrap)
	var blur = require('./blur');

if(skills)
	var scroll = require('./skills');

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

	if(blogCont)
		blog.scrollActive(wScroll);

	if(header)
		if (!isMobile)
			parallax.init(wScroll);
	
	if(skills)
		scroll.grow(wScroll, 25, 0);
};

window.onresize = function () {
	if(blurWrap)
		blur.set();

	width = document.body.clientWidth;
};

if(blurWrap)
	blur.set();

if(blogCont)
	blog.init();

if(menuBurger)
	burger.init();

slider.init();

$('.blog-nav').on('click', function(e) {
	if (width <= 768)
		$(this).toggleClass('blog-nav--active');
});

document.body.addEventListener('wheel', function(e) {
	if(document.querySelector('.burger-menu--active'))
		e.preventDefault();
});

document.body.addEventListener('touchmove', function(e) {
	if(document.querySelector('.burger-menu--active'))
		e.preventDefault();
});

document.body.addEventListener('keydown', function(e) {
	if(document.querySelector('.burger-menu--active'))
		if(e.key == 'ArrowUp' || e.key == 'ArrowDown')
			e.preventDefault();
});

if(document.getElementById('mail'))
	check('mail');

if(document.getElementById('identification'))
	check('identification');