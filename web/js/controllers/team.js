angular.module('controllers')
.controller('teamController', function($scope, $mdPanel, $http) {

	$scope.team_leads = {};

	/* Aggregate team check boxes */
	$http({
		method: 'GET',
		url: 'https://www.badgerloop.com/api/php/team.php'
	}).then(function success(response) {
			$scope.team_leads = response.data;

	}, function error(response) {
		console.log("Failure");
		console.log(response);
	});

	var panelPosition = $mdPanel.newPanelPosition()
						.absolute()
						.center();

	// Can play around with this
	var config = {
		attachTo: angular.element(document.body),
		templateUrl: 'views/team-popup.html',
		hasBackdrop: true,
		position: panelPosition,
		trapFocus: true,
		zIndex: 150,
		clickOutsideToClose: true,
		escapeToClose: true,
		focusOnOpen: true,
		scope: $scope,
	};

	$scope.showPanel = function(lead) {
		$scope.lead = lead;
		$mdPanel.open(config);
	};

	if (globalUpdateButtons) globalUpdateButtons();
});
