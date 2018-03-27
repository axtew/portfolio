// console.log('in main.js!');

const parallax = require('./parallax'),
			blur = require('./blur');

if($('.skills__rating').length) {
	var scroll = require('./skills');
}

if($('.btn__click').length) {
	$('.btn__click').on('click', function(e) {
		e.preventDefault();
		$('.intro__btn').toggleClass('intro__btn--active');
		$('.intro__card-front').toggleClass('intro__card-front--active');
		$('.intro__card-back').toggleClass('intro__card-back--active');
	})
}

window.onload = function() {
	// Player.init();
}

// через pug не создаётся canvas
Player = {
	init: function() {
		var container = document.querySelector('.intro');

		var div = document.createElement('div');
		div.className = "Background";
		div.innerHTML = "<canvas class=\"Background-canvas\"></canvas>";

		container.appendChild(div);
	}
}

// const webGL = require('./index-water');

window.onscroll = function() {
	var wScroll = window.pageYOffset;

	if($('.header').length) {
		parallax.default.init(wScroll);
	}
	
	if($('.skills__rating').length) {
		scroll.default.grow(wScroll);
	}
}

window.onresize = function () {
	if($('.blur__wrap').length) {
		blur.default.set();
	}
}

if($('.blur__wrap').length) {
	blur.default.set();
}




// new Vue ({
// 	el: '.wrapper',
// 	data: {
// 		href: '<a href="https://google.com">Google</a>'
// 	},
// 	methods: {

// 	}
// });