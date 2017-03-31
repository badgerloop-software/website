var studentHandler;
var sponsorHandler;
var mediaHandler;
var otherHandler;
var handlersUpdated = false;

function accumulate_errors(array, errors) {
	while (array.length > 0) array.pop();
	for (var i = 0; i < errors.length; i++)
		array.push(errors[i].$name.capitalize());
}

angular.module('controllers')
.controller('contactController', function($scope) {

	var student_desc = "Are you a current or future UW-Madison student interested in joining the team?";
	var sponsor_desc = "Interested in sponsoring Badgerloop?";
	var media_desc = "Want to know more?";
	var other_desc = "Want to know more?";

	// Form Submit
	$scope.submit = function(form) {

		// handlers start out null
		if (!handlersUpdated) {
			$scope.updateHandlers();
			handlersUpdated = true;
		}

		if ($scope.forms.indexOf(form) == -1)
			console.log("Something went wrong!");
		else if (!form.handler()) console.log("Error!");
		else console.log("Worked!");
	};

	// Student Defaults
	$scope.student = {
		label: "student", title: "Team Application",
		description: student_desc, handler: studentHandler,
		template: "directives/application.html"
	};

	// Sponsor Defaults
	$scope.sponsor = {
		label: "sponsor", title: "Sponsor Contact",
		description: sponsor_desc, handler: sponsorHandler,
		template: "directives/sponsor-form.html"
	};

	// Media Defaults
	$scope.media = {
		label: "media", title: "Media Contact",
		description: media_desc, handler: mediaHandler,
		template: "directives/media-form.html"
	};

	// Other Defaults
	$scope.other = {
		label: "other", title: "Other Contact",
		description: other_desc, handler: mediaHandler,
		template: "directives/other-form.html"
	};

	// Javascript AKA hacking
	$scope.updateHandlers = function() {
		$scope.student.handler = studentHandler;
		$scope.sponsor.handler = sponsorHandler;
		$scope.media.handler = mediaHandler;
		$scope.other.handler = otherHandler;
	};

	$scope.forms = [$scope.student, $scope.sponsor, $scope.media, $scope.other];

	console.log("controller loaded");
	if (globalUpdateButtons) globalUpdateButtons();
});
