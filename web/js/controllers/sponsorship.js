var platinum_logos = [
	{
		name: 'Altium', // not in slideshow yet
		site: 'http://www.altium.com/'
	},
	{
		name: 'ANSYS',
		site: 'http://www.ansys.com/'
	},
	{
		name: 'Bimba',
		site: 'http://www.bimba.com/'
	},
	{
		name: 'Derksen',
		site: 'http://www.derksenprinters.com/'
	},
	{
		name: 'Design-Concepts',
		site: 'http://www.design-concepts.com/'
	},
	{
		name: 'Plymouth_Foam',
		site: 'http://www.plymouthfoam.com/'
	},
	{
		name: 'Boxx',
		site: 'https://www.boxx.com/'
	},
	{
		name: 'Tektronix',
		site: 'http://www.tek.com/'
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
		name: 'Siemens',
		site: 'http://www.siemens.com/us/en/home.html'
	},
	{
		name: 'Snap-on',
		site: 'https://store.snapon.com/'
	}
]
var gold_logos= [
	{
		// name: ,
		// site: ''
	}
]

var silver_logos=[
	{
		name: 'Qualcomm',
		site: 'https://www.qualcomm.com/'
	},
	{
		name: '1403',
		site: 'http://universityresearchpark.org/the-property/1403-2/'
	},
	{
		name: 'Plexus',
		site: 'http://www.plexus.com/'
	},
]

var bronze_logos=[
	{
		name: 'Keysight_Technologies',
		site: 'http://www.keysight.com/main/home.jspx?cc=US&lc=eng'
	},
	{
		name: 'ATA_Engineering',
		site: 'http://www.ata-e.com/'
	},
	{
		name: 'ESwitch',	// not in slideshow yet
		site: 'https://www.e-switch.com/'
	},
	{
		name: 'Bulletproof_Automotive',
		site: 'http://www.bulletproofautomotive.com/'
	},
	{
		name: 'HomeRevolution',
		site: 'https://www.homerev.com/'
	},
]



angular.module('controllers')
.controller('sponsorshipController', function($scope) {
	$scope.header = "Thanks to our sponsors!";
	$scope.platinum_logos = platinum_logos;
	$scope.gold_logos = gold_logos;
	$scope.silver_logos = silver_logos;
	$scope.bronze_logos = bronze_logos;
	$scope.logos = [platinum_logos, gold_logos, silver_logos, bronze_logos]

	if (globalUpdateButtons) globalUpdateButtons();
});
