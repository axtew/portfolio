module.exports = (function(){
	var counter,
			duration = 300,
			inProcces = false;

	var moveSlide = function(container, direction) {

		var items = $('.slider__item', container),
				activeItem = items.filter('.slider__item--active');

		if(container == '.slider__controls-back') {
			var position = 100;
		}

		if(container == '.slider__controls-next') {
			var position = -100;
		}

		if(direction == 'back') {
			nextItem = activeItem.prev();

			if(!nextItem.length) {
				nextItem = items.last();
			}
		}

		if(direction == 'next') {
			nextItem = activeItem.next();

			if(!nextItem.length) {
				nextItem = items.eq(0);
			}
		}

		activeItem.animate({
			'top' : position + '%'
		}, duration, function() {
			activeItem.removeClass('slider__item--active').css('top', -position + '%');
		});
		nextItem.animate({
			'top' : 0
		}, duration, function() {
			$(this).addClass('slider__item--active');
		});

	};

	var showSlide = function (direction) {
		var items = $('.slider__item', '.slider__preview'),
				activeItem = items.filter('.slider__item--active'),
				prevItem = activeItem.prev();

		if(direction == 'next') {
			nextItem = activeItem.next();

			if (!nextItem.length) {
				nextItem = items.eq(0);
			}
		}

		if(direction == 'back') {
			nextItem = activeItem.prev();

			if (!nextItem.length) {
				nextItem = items.last();
			}
		}

		activeItem.animate({
			'opacity' : 0
		}, duration, function() {
			activeItem.removeClass('slider__item--active');
		});
		nextItem.animate({
			'opacity' : 1
		}, duration, function() {
			$(this).addClass('slider__item--active');

			inProcces = false;
		});
	};

	var moveText = function (direction) {
		var items = $('.slider-info__item', '.slider-info'),
				activeItem = items.filter('.slider-info__item--active'),
				prevItem = activeItem.prev();

		if(direction == 'next') {
			nextItem = activeItem.next();

			if (!nextItem.length) {
				nextItem = items.eq(0);
			}
		}

		if(direction == 'back') {
			nextItem = activeItem.prev();

			if (!nextItem.length) {
				nextItem = items.last();
			}
		}

		activeItem.animate({
			'z-index' : -1
		}, duration, function() {
			activeItem.removeClass('slider-info__item--active');
		});
		nextItem.animate({
			'z-index' : 1
		}, duration, function() {
			$(this).addClass('slider-info__item--active');

			inProcces = false;
		});
	};

	return {
		init: function () {
			$('.slider__controls-next').on('click', function(e) {
				e.preventDefault();

				if (!inProcces) {
					inProcces = true;
					showSlide('next');

					moveSlide('.slider__controls-back', 'next');
					moveSlide('.slider__controls-next', 'next');

					moveText('next');
				}
			});

			$('.slider__controls-back').on('click', function(e) {
				e.preventDefault();

				if (!inProcces) {
					inProcces = true;
					showSlide('back');

					moveSlide('.slider__controls-back', 'back');
					moveSlide('.slider__controls-next', 'back');

					moveText('back');
				}
			});
		}
	}
}());