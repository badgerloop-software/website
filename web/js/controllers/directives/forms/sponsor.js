// Sponsor Form
angular.module('controllers')
.controller('sponsorFormController', function($scope) {
	$scope.form_id = "sponsor-form";

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
