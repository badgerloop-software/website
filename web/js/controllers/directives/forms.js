// Student Form
angular.module('controllers')
.controller('studentController', function($scope) {
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
	$scope.errors = [];
	$scope.handler = function() {

		console.log($scope.teams_selected);

		// Check for form errors
		if ($scope.studentForm.$error.required) {
			accumulate_errors($scope.errors, $scope.studentForm.$error.required);
			console.log($scope.errors);
			return false;
		}

		// Submit data
		else console.log("[student] success!");

		return true;
	};
	studentHandler = $scope.handler;
});

// Sponsor Form
angular.module('controllers')
.controller('sponsorController', function($scope) {
	$scope.input = "sponsor";
	$scope.inputs = [
		{ label: "Organization Name", type: "text", value: ""},
		{ label: "Contact Name", type: "text", value: "" },
		{ label: "Contact Email", type: "email", value: "" },
		{ label: "Contact Number", type: "text", value: "" }
	];
	$scope.handler = function() {
		console.log("sponsor handler");
		// do $http request
		return true;
	};
	sponsorHandler = $scope.handler;
});

// Media Controller
angular.module('controllers')
.controller('mediaController', function($scope) {
	$scope.input = "media";
	$scope.inputs = [
		{ label: "Name", type: "text", value: "" },
		{ label: "Email", type: "email", value: "" },
	];
	$scope.handler = function() {
		console.log("media handler");
		// do $http request
		return true;
	};
	mediaHandler = $scope.handler;
});

// Other Controller
angular.module('controllers')
.controller('otherController', function($scope) {
	$scope.input = "other";
	$scope.inputs = [
		{ label: "Name", type: "text", value: "" },
		{ label: "Email", type: "email", value: "" },
	];
	$scope.handler = function() {
		console.log("other handler");
		// do $http request
		return true;
	};
	otherHandler = $scope.handler;
});
