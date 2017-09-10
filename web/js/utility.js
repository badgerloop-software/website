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

