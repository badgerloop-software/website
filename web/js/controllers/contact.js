angular.module('controllers')
.controller('contactController', function($scope) {
	globalUpdateButtons();

	// Student Defaults	
	$scope.student = {};
	$scope.student.title = "Student Contact";
	$scope.student.sentences = [
		"Are you a current or future UW-Madison student interested in joining the team?"
	];
	$scope.student.inputs = [
		{
			label: "Name",
			type: "text",
			value: ""
		},
		{
			label: "Email",
			type: "text",
			value: ""
		},
		{
			label: "Major",
			type: "text",
			value: ""
		},
		{
			label: "Year",
			type: "text",
			value: ""
		},
		{
			label: "Comments",
			type: "textarea",
			value: ""
		}
	];

	// Sponsor Defaults	
	$scope.sponsor = {};
	$scope.sponsor.title = "Sponsor Contact"
	$scope.sponsor.sentences = [
		"Interested in sponsoring Badgerloop?"
	];
	$scope.sponsor.inputs = [
		{
			label: "Organization Name",
			type: "text",
			value: ""
		},
		{
			label: "Contact Name",
			type: "text",
			value: ""
		},
		{
			label: "Contact Email",
			type: "text",
			value: ""
		},
		{
			label: "Contact Number",
			type: "text",
			value: ""
		},
		{
			label: "Comments",
			type: "textarea",
			value: ""
		}
	];

	// Other Defaults	
	$scope.other = {};
	$scope.other.title = "Other Contact"
	$scope.other.sentences = [
		"Want to know more?"
	];
	$scope.other.inputs = [
		{
			label: "Name",
			type: "text",
			value: ""
		},
		{
			label: "Email",
			type: "text",
			value: ""
		},
		{
			label: "Comments",
			type: "textarea",
			value: ""
		}
	];
	$scope.forms = [$scope.student, $scope.sponsor, $scope.other];
});
