document.getElementById('splash_screen').style.animationPlayState = "running";
setTimeout(function() {
	document.getElementById('splash_screen').style.visibility = "hidden";
	console.log("executed");
}, 4200);

