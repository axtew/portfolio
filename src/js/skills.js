// console.log('in skills.js!');

var svgScroll = ( function () {
    var svg = document.querySelector('.scills-circle'),
        svgAll = document.querySelectorAll('.scills-circle'),
        svgPath = document.querySelectorAll('.scills-circle__sector'),
        windowMargin = window.innerHeight / 3,
        svgRect = svg.getBoundingClientRect(),
        svgPos = svgRect.top;

    return {
        grow: function (wScroll) {
            var startAnimate = wScroll - svgPos + windowMargin;
            
            if (startAnimate >= 0) {
                var drawAmount = 283 - 141;

                if (drawAmount > 0) {
                    svgPath.forEach(function (item) {
                        item.style.strokeDashoffset = drawAmount;
                        svg.style.opacity = '.5';
                    })
                }

                if (drawAmount < 1) {
                    svgPath.forEach(function (item) {
                        item.style.strokeDashoffset = 0;
                    })
                }
            }

        }
    }
}());

export default svgScroll;