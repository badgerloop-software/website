// Other Controller
angular.module('controllers')
.controller('otherFormController', function($scope) {
	$scope.form_id = "other-form";

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

