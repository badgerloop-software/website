// Student Form
angular.module('controllers')
.controller('studentFormController', function($scope) {

	$scope.form_id = "student-form";
	$scope.toggle_errors = function(state) {
			toggle_element($scope.form_id, state);
			toggle_display($scope.form_id, state);
	};

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

	$scope.year = "";
	$scope.years = YEARS;
	$scope.teams = TEAMS;
	$scope.teams_selected = [];
	$scope.name = "";
	$scope.email = "";
	$scope.major = "";
	$scope.description = "";
	$scope.errors = [];
	$scope.handler = function() {

		empty_array($scope.errors);

		if (Object.keys($scope.studentForm.$error).length > 0) {
			globalScrollTo(0);
			for (var prop in $scope.studentForm.$error) {
				if (!$scope.studentForm.$error.hasOwnProperty(prop))
					continue;

				accumulate_errors($scope.errors, $scope.studentForm.$error[prop]);
			}

			if ($scope.teams_selected.length == 0)
<<<<<<< HEAD
				$scope.errors.push("Preferred Team(s)");
=======
				$scope.errors.push("Preferred Team(s)");

>>>>>>> e277e5f99017dd62dbd4b089c12063e108842de8
			$scope.toggle_errors(true);

			return false;
		}

		$scope.toggle_errors(false);

		// Submit data
		console.log("[student] success!");
		return true;
	};

	studentHandler = $scope.handler;
});
