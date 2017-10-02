angular.module('controllers')
.controller('sponsorshipController', function($scope, $http) {

	$scope.sponsors = {};
	$scope.sponsor_keys = [];

	/* Aggregate sponsors */
	$http({
		method: 'GET',
		url: 'https://badgerloop.com/api/php/sponsors.php'
	}).then(function success(response) {

		for (var i = 0; i < response.data.length; i++) {
			/* create sponsors[tier_name] array if not present */
			if (!$scope.sponsors[response.data[i].tier_name]) {
				$scope.sponsors[response.data[i].tier_name] = [];
				$scope.sponsor_keys.push(response.data[i].tier_name);
			}

			/* add Sponsor to tier area */
			$scope.sponsors[response.data[i].tier_name].push(
				{
					name: response.data[i].name,
					site: response.data[i].website,
					img: response.data[i].image
				}
			);
		}

	}, function error(response) {
		console.log("Failure");
		console.log(response);
	});

	if (globalUpdateButtons) globalUpdateButtons();
});
