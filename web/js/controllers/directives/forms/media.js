// Media Controller
angular.module('controllers')
.controller('mediaFormController', function($scope) {

	$scope.form_id = "media-form";
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
		if (accumulate_errors($scope.errors, $scope.mediaForm.$error, $scope.form_id))
			return false;
		$scope.submitted = true;
		return $scope.data;
	};
	mediaHandler = $scope.handler;
});
