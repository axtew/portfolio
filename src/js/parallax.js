// console.log('in parallax.js!');

var parallax = ( function () {
    var bg = document.querySelector('.header__bg');
    var user = document.querySelector('.header__profile');
    var sectionText = document.querySelector('.header__bg-text');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0, ' + strafe + ', 0)';

            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function (wScroll) {
            // this.move(bg, wScroll, 45);
            this.move(sectionText, wScroll, 20);
            this.move(user, wScroll, 3);
        }
    }
}());

export default parallax;