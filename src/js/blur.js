// console.log('in blur.js!');

var blur = ( function () {
    var wrapper = document.querySelector('.blur__wrap'),
        form = document.querySelector('.blur__form');

    return {
        set: function () {
            var imgWidth = document.querySelector('.blur__bg').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
}());

export default blur;