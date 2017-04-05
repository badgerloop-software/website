function accumulate_errors(array, errors) {
	var curr = "";
	for (var i = 0; i < errors.length; i++) {
		curr = errors[i].$name.capitalize();
		if (array.indexOf(curr) == -1)
			array.push(curr);
	}
}

var studentHandler = default_handler;
var sponsorHandler = default_handler;
var mediaHandler = default_handler;
var otherHandler = default_handler;

// Initializations (later becomes a factory)
var student_form = {
	label: "student", title: "Team Application",
	description: "Are you a current or future UW-Madison student interested in joining the team?", 
	handler: studentHandler,
	template: "directives/forms/student.html"
};

var sponsor_form = {
	label: "sponsor", title: "Sponsor Contact",
	description: "Interested in sponsoring Badgerloop?", 
	handler: sponsorHandler,
	template: "directives/forms/sponsor.html"
};

var media_form = {
	label: "media", title: "Media Contact",
	description: "Want to know more?", handler: mediaHandler,
	template: "directives/forms/media.html"
};

var other_form = {
	label: "other", title: "Other Contact",
	description: "Want to know more?", handler: mediaHandler,
	template: "directives/forms/other.html"
};

angular.module('controllers')
.controller('contactController', function($scope) {

	// Form Submit
	$scope.submit = function(form) {
		$scope.updateHandlers();
		if ($scope.forms.indexOf(form) == -1)
			console.log("Something went wrong!");
		else if (!form.handler()) console.log("Error!");
		else console.log("Worked!");
	};

	// Javascript AKA hacking
	$scope.updateHandlers = function() {
		$scope.student.handler = studentHandler;
		$scope.sponsor.handler = sponsorHandler;
		$scope.media.handler = mediaHandler;
		$scope.other.handler = otherHandler;
	};

	// Gotta make this index based
	$scope.student = student_form;
	$scope.sponsor = sponsor_form;
	$scope.media = media_form;
	$scope.other = other_form;
	$scope.forms = [$scope.student, $scope.sponsor, $scope.media, $scope.other];

	if (globalUpdateButtons) globalUpdateButtons();
});
