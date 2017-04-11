// Sponsor Form
angular.module('controllers')
.controller('sponsorFormController', function($scope) {

	$scope.form_id = "sponsor-form";
	$scope.success_message = "Thanks so much! We'll be in touch with you as soon as we can.";
	$scope.submitted = false;

	// Inputs
	$scope.data = {
		name: "", email: "",
		company: "", phone: "",
		should_call: false,
		earliest: "", latest: "",
		description: ""
	};
	
	$scope.errors = [];
	$scope.handler = function() {
		if (accumulate_errors($scope.errors, $scope.sponsorForm.$error, $scope.form_id))
			return false;
		$scope.submitted = true;
		return $scope.data;
	};

	sponsorHandler = $scope.handler;
});
