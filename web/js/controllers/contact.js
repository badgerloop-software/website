// What a function . . .
function accumulate_errors(array, errors, form_id) {
	empty_array(array);
	if (Object.keys(errors).length > 0) {
		for (var prop in errors) {
			if (!errors.hasOwnProperty(prop)) continue;
			var curr = "";
			for (var i = 0; i < errors[prop].length; i++) {
				curr = errors[prop][i].$name.capitalize();
				if (array.indexOf(curr) == -1) array.push(curr);
			}
		}
		toggle_form_status(form_id, true);
		return true;
	}
	toggle_form_status(form_id, false);
	return false;
}

function toggle_form_status(form_id, error) {
	globalScrollTo(0);
	toggle_element(form_id, error);
	toggle_display(form_id, error);
	toggle_element("s" + form_id, !error);
	toggle_display("s" + form_id, !error);
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
	label: "sponsor", title: "Sponsoring Our Team",
	description: "Interested in sponsoring Badgerloop?", 
	handler: sponsorHandler,
	template: "directives/forms/sponsor.html"
};

var media_form = {
	label: "media", title: "Media Inquiry",
	description: "", handler: mediaHandler,
	template: "directives/forms/media.html"
};

var other_form = {
	label: "other", title: "Other",
	description: "Leave us a comment or question!", handler: mediaHandler,
	template: "directives/forms/other.html"
};

var slack_url = 'https://hooks.slack.com/services/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';

function submit_form(data, form_title) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status != 200) {
			console.log("Something went wrong with your form submission!");
			console.log("Please let Vaughn (vkottler@wisc.edu) know. Server Response:");
			console.log(this.status + ": " + xhr.responseText);
		}
	}
	xhr.open("POST", slack_url, true);
	xhr.send(build_post(data, form_title));
}

function build_post(data, title) {
	var post = '{"text": "';
	post += '==== ' + title + ' ====\n\n';
	for (var prop in data) {
		if (!data.hasOwnProperty(prop)) continue;
		post += '*' + prop.capitalize() + 
		':*' + (' ' + data[prop]).replace(/[<>{}|%'":=]/g, '') + '\n';
	}
	post += '==== ==== ==== ====';
	return post + '"}';
}

angular.module('controllers')
.controller('contactController', function($scope) {

	// Form Submit
	$scope.submit = function(form) {
		$scope.updateHandlers();
		if ($scope.forms.indexOf(form) == -1)
			console.log("Something went wrong!");
		var result = form.handler();
		if (result) submit_form(result, form.title);
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
