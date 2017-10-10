/*                         Splash Screen Setup                               */
window.onload = function() {
	document.getElementById('splash_screen').style.animationPlayState = "running";
	setTimeout(function() {
		document.getElementById('splash_screen').style.visibility = "hidden";
	}, 2700);
}
/*****************************************************************************/

/*                               Utility Functions                           */
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

function empty_array(array) { while (array.length > 0) array.pop(); }

function globalScrollTo(xPos) {
	document.getElementById("ng-view-parent").scrollTop = xPos;
}

function toggle_element(id, state) {
	document.getElementById(id).style.visibility = (state) ?
		"visible" : "hidden";
}

function toggle_display(id, state) {
	document.getElementById(id).style.display = (state) ?
		"table" : "none";
}

function default_handler() { console.log("bad function handler!"); }
/*****************************************************************************/

/*                               Slideshow Setup                             */
function configureSlideshow() {
	var sponsorSlides = document.getElementById("sponsor-slideshow");
	var slideshowWidth = 0;
	for (var i = 0; i < sponsorSlides.childNodes.length; i++) {
		if (sponsorSlides.childNodes[i].offsetWidth != null) {
			console.log(sponsorSlides.childNodes[i].offsetWidth);
			slideshowWidth += sponsorSlides.childNodes[i].offsetWidth;
		}
	}
	console.log("Slideshow width: " + slideshowWidth);
	sponsorSlides.setAttribute("style", "animation: slideshow " + (0.006 * (slideshowWidth / 2)) + "s linear infinite !important;");
	var frames = document.createElement("style");
	frames.innerHTML = '@keyframes slideshow { '
							     +  '	0% { left: 0px; }'
							     +  '	100% { left: -' + (slideshowWidth / 2) + 'px; }'
									 +  '}';
	document.head.appendChild(frames);
}
/*****************************************************************************/
