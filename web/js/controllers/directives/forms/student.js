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

	var electrical_teams = [
		{ name: "Controls", description: "asdf", recommended_majors:
			["CE, CS"] },
		{ name: "Low Voltage", description: "asdf", recommended_majors:
			["CE, CS, EE"] },
		{ name: "Battery", description: "asdf", recommended_majors:
			["EE"] },
		{ name: "Power Train", description: "asdf", recommended_majors:
			["EE, ME"] }
	];

	var mechanical_teams = [
		{ name: "Braking", description: "asdf", recommended_majors:
			["ME, EMA"] },
		{ name: "Composites", description: "asdf", recommended_majors:
			["ME, EMA"] },
		{ name: "Fabrication", description: "asdf", recommended_majors:
			["ME, EMA"] },
		{ name: "Propulsion", description: "asdf", recommended_majors:
			["ME, EMA"] },
		{ name: "Structural Analysis", description: "asdf", recommended_majors:
			["ME, EMA, M&S"] },
		{ name: "Structural Design", description: "asdf", recommended_majors:
			["ME, EMA, M&S"] }
	];

	var operations_teams = [
		{ name: "Software", description: "asdf", recommended_majors:
			["CS, CE, Any w/ prior exp."] },
		{ name: "Feasibility", description: "asdf", recommended_majors:
			["Civil Eng., Physics"] },
		{ name: "Finance & Supply Chain", description: "asdf", recommended_majors:
			["Finance, Industrial Eng., Business"] },
		{ name: "Industry Relations", description: "asdf", recommended_majors:
			["Communications, Business"] },
		{ name: "Media & Marketing", description: "asdf", recommended_majors:
			["Communications, Business"] },
		{ name: "Virtual Reality", description: "asdf", recommended_majors:
			["CS, CE, Any w/ prior exp."] }
	];

	var TEAMS = [
		{ name: "Electrical", data: electrical_teams },
		{ name: "Mechanical", data: mechanical_teams },
		{ name: "Operations", data: operations_teams }
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
