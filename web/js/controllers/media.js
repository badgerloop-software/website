angular.module('controllers')
.controller('mediaController', function ($scope, $http) {

	$scope.bloop_articles = [];
	$scope.competition_articles = [];

	// Get the articles from the Badgerloop API
	$http({
		method: 'GET',
		url: 'https://badgerloop.com/api/php/media.php'
	}).then(function success(response) {
		for (var i = 0; i < response.data.length; i++) {
			/* create sponsors[tier_name] array if not present */
			if (response.data[i].type === "bloop") {
				$scope.bloop_articles.push(
					{
						title: response.data[i].title,
						url: response.data[i].url,
						source: response.data[i].source,
						date: response.data[i].date
					}
				);
			} else {
				$scope.competition_articles.push(
					{
						title: response.data[i].title,
						url: response.data[i].url,
						source: response.data[i].source,
						date: response.data[i].date
					}
				);
			}

		}

	}, function error(response) {
		console.log("Failure");
		console.log(response);
	});

	$scope.header = "Featured In";

	if (globalUpdateButtons) globalUpdateButtons();
});
