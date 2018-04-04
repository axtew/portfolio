module.exports = ( function () {
	var images = document.images,
			imagesTotalCount = images.length,
			imagesLoadedCount = 0,
			percCount = 0,
			percDisplay = document.getElementById('load-perc'),
			preloader = document.getElementById('page-preloader');

	for(var i = 0; i < imagesTotalCount; i++) {
		imageClone = new Image();
		imageClone.onload = pageLoaded;
		imageClone.onerror = pageLoaded;
		imageClone.src = images[i].src;
	}

	function pageLoaded() {
		imagesLoadedCount++;
		var num = 0;

		setInterval(function() {

			if(percDisplay.innerHTML < percCount)
				percDisplay.innerHTML = num++;

		}, 10);

		percCount = ( ( (100 / (imagesTotalCount + 1)) * imagesLoadedCount ) << 0 );

		document.body.onload = function() {
			percCount = 100;
				
			setInterval(function() {

					if(percDisplay.innerHTML < percCount)
							percDisplay.innerHTML = num++;

			}, 10);

			if(imagesLoadedCount >= imagesTotalCount && percCount == 100) {
				setTimeout(function() {

					if (!preloader.classList.contains('done'))
						preloader.classList.add('done');

				}, 1200);
			}
		};
	}
}());