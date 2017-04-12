// Other Controller
angular.module('controllers')
.controller('otherFormController', function($scope) {

	$scope.form_id = "other-form";
	$scope.success_message = "Thanks! We've received your input and may be following up with you if necessary.";
	$scope.submitted = false;

	// Inputs
	$scope.data = {
		name: "", email: "",
		company: "", description: ""
	};

	$scope.errors = [];
	$scope.handler = function() {
		if (accumulate_errors($scope.errors, $scope.otherForm.$error, $scope.form_id))
			return false;
		$scope.submitted = true;
		return $scope.data;
	};
	otherHandler = $scope.handler;
});

