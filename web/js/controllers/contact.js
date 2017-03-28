angular.module('controllers')
.controller('contactController', function($scope) {
	if (globalUpdateButtons()) globalUpdateButtons();

	// Student Defaults
	$scope.student = {};
	$scope.student.label = "Student";
	$scope.student.title = "Student Contact";
	$scope.student.sentences = [
		"Are you a current or future UW-Madison student interested in joining the team?"
	];
	$scope.student.inputs = [
		{ label: "Name", type: "text", value: "" },
		{ label: "Email", type: "email", value: "" },
		{ label: "Major", type: "text", value: "" },
		{ label: "Year", type: "text", value: "" }
	];

	// Sponsor Defaults
	$scope.sponsor = {};
	$scope.sponsor.label = "Sponsor";
	$scope.sponsor.title = "Sponsor Contact"
	$scope.sponsor.sentences = [
		"Interested in sponsoring Badgerloop?"
	];
	$scope.sponsor.inputs = [
		{ label: "Organization Name", type: "text", value: ""},
		{ label: "Contact Name", type: "text", value: "" },
		{ label: "Contact Email", type: "email", value: "" },
		{ label: "Contact Number", type: "text", value: "" }
	];

	// Other Defaults
	$scope.other = {};
	$scope.other.label = "Other";
	$scope.other.title = "Other Contact"
	$scope.other.sentences = [
		"Want to know more?"
	];
	$scope.other.inputs = [
		{ label: "Name", type: "text", value: "" },
		{ label: "Email", type: "email", value: "" },
	];


	$scope.forms = [$scope.student, $scope.sponsor, $scope.other];
});
