// Student Form
angular.module('controllers')
.controller('studentFormController', function($scope) {

	$scope.form_id = "student-form";
	$scope.success_message = "Thanks for applying! We'll reach out to you soon.";
	$scope.submitted = false;

	var YEARS = [
		"Newly Admitted", "Freshman", "Sophomore",
		"Junior", "Senior", "Graduate Student",
		"Non-student"
	];

	var TEAMS = [
		"Battery", "Braking", "Composites", "Controls",
		"Electrical", "Fabrication", "Software",
		"Feasibility", "Finance & Supply Chain",
		"Industry Relations", "Media & Marketing",
		"Propulsion", "Structural Analysis",
		"Structural Design", "Virtual Reality"
	];

	// Utility Functions
	$scope.toggle_selected = function(item, list) {
		var i = list.indexOf(item);
		(i > -1) ? list.splice(i, 1) : list.push(item);
	};
	$scope.check_selected = function(item, list) {
		return list.indexOf(item) > -1;
	};

	$scope.years = YEARS;
	$scope.teams = TEAMS;

	// Inputs
	$scope.data = {
		year: "", teams_selected: [],
		name: "", email: "",
		major: "", description: ""
	};
	
	$scope.errors = [];
	$scope.handler = function() {

		if (accumulate_errors($scope.errors, $scope.studentForm.$error, $scope.form_id)
			|| $scope.data.teams_selected.length == 0) {

			if ($scope.data.teams_selected.length == 0) {
				$scope.errors.push("Preferred Team(s)");

				// In this case we have to do it manually
				if ($scope.errors.length == 1)
					toggle_errors($scope.form_id, true);
			}

			return false;
		}

		$scope.submitted = true;
		return $scope.data;
	};

	studentHandler = $scope.handler;
});
