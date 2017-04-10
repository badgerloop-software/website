var logos = [
	{
		name: '1403',
		site: 'http://universityresearchpark.org/the-property/1403-2/'
	},
	{
		name: 'Altium', // not in slideshow yet 
		site: 'http://www.altium.com/'
	},
	{
		name: 'ANSYS',
		site: 'http://www.ansys.com/'
	},
	{
		name: 'ATA',
		site: 'http://www.ata-e.com/'
	},
	{
		name: 'Bimba',
		site: 'http://www.bimba.com/'
	},
	{
		name: 'Bulletproof',
		site: 'http://www.bulletproofautomotive.com/'
	},
	{
		name: 'Derksen',
		site: 'http://www.derksenprinters.com/'
	},
	{
		name: 'Design-Concepts',
		site: 'http://www.design-concepts.com/'
	},
	//{
	//	name: 'ESwitch',
	//	site: '#/home'
	//},
	{
		name: 'HomeRevolution',
		site: 'https://www.homerev.com/'
	},
	{
		name: 'HP',
		site: 'http://www.hp.com/country/us/en/welcome.html'
	},
	{
		name: 'OnFloor',
		site: 'https://onfloor.com/'
	},
	{
		name: 'Plexus',
		site: 'http://www.plexus.com/'
	},
	{
		name: 'Qualcomm',
		site: 'https://www.qualcomm.com/'
	},
	{
		name: 'Siemens',
		site: 'http://www.siemens.com/us/en/home.html'
	},
	{
		name: 'Snap-on',
		site: 'https://store.snapon.com/'
	}
];

angular.module('controllers')
.controller('sponsorshipController', function($scope) {
	$scope.header = "Thanks to our sponsors!";
	$scope.logos = logos;

	if (globalUpdateButtons) globalUpdateButtons();
});
