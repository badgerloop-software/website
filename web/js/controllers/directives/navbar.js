var globalUpdateButtons;

angular.module('controllers')
.controller('navbarController', function($scope, $location) {

	$scope.buttons = [
		//{ text: "pod",		  enabled: false },
		{ text: "about",                 enabled: false },
		{ text: "contact",	  enabled: false },
		{ text: "media",		enabled: false },
		{ text: "sponsorship",  enabled: false },
		{ text: "team",		 enabled: false }
		//{ text: "reveal", 	enabled: false }
	];
	$scope.homeButton = { text: "home", enabled: false };
	$scope.curr_button = $scope.buttons[0];

	$scope.updateButtons = function() {
		if ($location.path() === "/home") {
	  	$scope.homeButton.enabled = true;
	  	$scope.curr_button = $scope.homeButton;
		}
		else {
		$scope.homeButton.enabled = false;
	  	for (var i = 0; i < $scope.buttons.length; i++) {
			if ($scope.buttons[i].text === $location.path().substring(1)) {
				$scope.buttons[i].enabled = true;
					$scope.curr_button = $scope.buttons[i];
					break;
				}
			}
		}
	};

  $scope.changeView = function(button) {
	  $scope.curr_button.enabled = false;
	  $scope.curr_button = button;
	  $scope.curr_button.enabled = true;
	  $location.path(button.text);
  };

	globalUpdateButtons = $scope.updateButtons;

	$scope.updateButtons();

});
