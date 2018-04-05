// console.log('in skills.js!');

module.exports = ( function () {
	var svg = document.querySelector('.scills-circle'),
			svgAll = document.querySelectorAll('.scills-circle'),
			svgPath = document.querySelectorAll('.scills-circle__sector'),
			skillsItems = document.querySelector('.skills__item'),
			windowMargin = window.innerHeight / 3,
			svgRect = svg.getBoundingClientRect(),
			svgPos = svgRect.top;

	return {
		grow: function (wScroll, percent, id) {
			var startAnimate = wScroll - svgPos + windowMargin,
					drawSize = Math.ceil(2 * 45 * 3.1415),
					percent = percent > 100 ? 100 : percent,
					decimalPercent = percent / 100,
					drawPercent = drawSize * decimalPercent;
			
			if (startAnimate >= 0) {
				var drawAmount = drawSize - drawPercent;

				svgPath.forEach(function (item) {
					item.style.strokeDashoffset = drawAmount;
					item.style.opacity = decimalPercent;
				})
			}
		}
	}
}());