var logos = [
	{
		name: '1403',
		url: '1403.png',
		site: '#/home'
	},
	//{
	//	name: 'Altium',
	//	url: 'Altium.png',
	//	site: '#/home'
	//},
	{
		name: 'ANSYS',
		url: 'ANSYS.png',
		site: '#/home'
	},
	{
		name: 'ATA',
		url: 'ATA.png',
		site: '#/home'
	},
	{
		name: 'Bimba',
		url: 'Bimba.png',
		site: '#/home'
	},
	{
		name: 'Bulletproof',
		url: 'Bulletproof.png',
		site: '#/home'
	},
	{
		name: 'Derksen',
		url: 'Derksen.png',
		site: '#/home'
	},
	{
		name: 'Design-Concepts',
		url: 'Design-Concepts.png',
		site: '#/home'
	},
	//{
	//	name: 'ESwitch',
	//	url: 'ESwitch.png',
	//	site: '#/home'
	//},
	{
		name: 'HomeRevolution',
		url: 'HomeRevolution.png',
		site: '#/home'
	},
	{
		name: 'HP',
		url: 'HP.png',
		site: '#/home'
	},
	{
		name: 'OnFloor',
		url: 'OnFloor.png',
		site: '#/home'
	},
	{
		name: 'Plexus',
		url: 'Plexus.png',
		site: '#/home'
	},
	{
		name: 'Qualcomm',
		url: 'Qualcomm.png',
		site: '#/home'
	},
	{
		name: 'Siemens',
		url: 'Siemens.png',
		site: '#/home'
	},
	{
		name: 'Snap-on',
		url: 'Snap-on.png',
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
