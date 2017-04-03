// Media Controller
angular.module('controllers')
.controller('mediaFormController', function($scope) {
	$scope.form_id = "media-form";

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
