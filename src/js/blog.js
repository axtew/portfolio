module.exports = ( function () {
	var blogItems = $('.blog__article'),
		navItems = $('.blog-nav__item'),
		blogNav = $('.blog-nav'),
		blogNavOffset = blogNav.offset().top,
		menuSelector = '.blog__cont';

	return {
		init: function () {
			navItems.on('click', function(e) {
				e.preventDefault();

				var ind = $(this).index(),
					reqBlogItem = blogItems.eq(ind);

				navItems.removeClass('blog-nav__item--active');
				$(this).addClass('blog-nav__item--active');

				$('html, body').animate({ scrollTop: reqBlogItem.offset().top }, 500);
			})
		},
		scrollActive: function (wScroll) {
			//на мобильных устройствах... (проверяем по userAgent браузера)
			if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
				if((blogNavOffset - 55) - wScroll <= 0) {
					blogNav.css({
						'position': 'fixed',
						'top' : '55px'
					});
				} else {
					blogNav.css({
						'position': 'absolute',
						'top' : '0'
					});
				}
			}
			
			$(menuSelector + " article").each(function() {
				var id = $(this).attr("id");
				var pos = $(this).offset().top;

				if(pos <= wScroll && pos + $(this).outerHeight() > wScroll) {
					var reqInd = ($(this).index());
					navItems.removeClass('blog-nav__item--active');
					navItems.eq(reqInd).addClass('blog-nav__item--active');
				}
			});
		}
	}
}());