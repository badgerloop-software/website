angular.module('controllers')
.controller('contactController', function($scope) {
	globalUpdateButtons();

	// Student Defaults	
	$scope.student = {};
	$scope.student.title = "Student Contact";
	$scope.student.sentences = [
		"Are you a current or future UW-Madison student interested in joining the team?",
		"Fill out the form below and we'll contact you!"
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
	$scope.sponsor.inputs = [];

	// Other Defaults	
	$scope.other = {};
	$scope.other.inputs = [];
 
	$scope.forms = [$scope.student, $scope.sponsor, $scope.other];
});
