var logos = [
	{
		name: 'Sponsor 1',
		url: 'color1.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 2',
		url: 'color2.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 3',
		url: 'color3.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 4',
		url: 'color4.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 5',
		url: 'color5.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 6',
		url: 'color6.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 7',
		url: 'color7.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 8',
		url: 'color8.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 9',
		url: 'color9.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 10',
		url: 'color10.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 11',
		url: 'color11.jpg',
		site: '#/home'
	},
	{
		name: 'Sponsor 12',
		url: 'color12.jpg',
		site: '#/home'
	}
];

angular.module('controllers')
.controller('sponsorshipController', function($scope) {
    $scope.test = "SPONSOR_PAGE";
	$scope.header = "Thanks to our sponsors!";
	$scope.logos = logos;
	globalUpdateButtons();
});
