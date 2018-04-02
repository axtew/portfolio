// console.log('in parallax.js!');

module.exports = ( function () {
    var bg = document.querySelector('.header__bg');
    var user = document.querySelector('.header__user');
    var sectionText = document.querySelector('.header__bg-text-img');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0, ' + strafe + ', 0)';

            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function (wScroll) {
            // this.move(bg, wScroll, 35);
            this.move(sectionText, wScroll, 12);
            this.move(user, wScroll, 3);
        }
    }
}());