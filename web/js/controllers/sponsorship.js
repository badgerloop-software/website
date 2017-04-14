var platinum_logos = [
	{
		name: 'Altium',
		img: 'Altium',
		site: 'http://www.altium.com/'
	},
	{
		name: 'ANSYS',
		img: 'ANSYS',
		site: 'http://www.ansys.com/'
	},
	{
		name: 'Boxx',
		img: 'Boxx',
		site: 'https://www.boxx.com/'
	},
	/*{
		name: 'Tektronix', //thisn
		img: 'Tektronix',
		site: 'http://www.tek.com/'
	},*/
	{
		name: 'HP',
		img: 'HP',
		site: 'http://www.hp.com/country/us/en/welcome.html'
	},
	/*{
		name: 'OnFloor', //thisn
		img: 'OnFloor',
		site: 'https://onfloor.com/'
	},*/
	{
		name: 'Snap-on',
		img: 'Snap-on',
		site: 'https://store.snapon.com/'
	}
]
var gold_logos= [
	{
		name: 'Siemens',
		img: 'Siemens',
		site: 'http://www.siemens.com/us/en/home.html'
	},
]

var silver_logos=[
	{
		name: 'Qualcomm',
		img: 'Qualcomm',
		site: 'https://www.qualcomm.com/'
	},
	{
		name: '@1403',
		img: '1403',
		site: 'http://universityresearchpark.org/the-property/1403-2/'
	},
	{
		name: 'Plexus',
		img: 'Plexus',
		site: 'http://www.plexus.com/'
	},
]

var bronze_logos=[
	/*{
		name: 'Keysight Technologies', //thisn
		img: 'Keysight_Technologies',
		site: 'http://www.keysight.com/main/home.jspx?cc=US&lc=eng'
	},*/
	{
		name: 'ATA Engineering',
		img: 'ATA_Engineering',
		site: 'http://www.ata-e.com/'
	},
	{
		name: 'E-Switch',
		img: 'ESwitch',
		site: 'https://www.e-switch.com/'
	},
	{
		name: 'Bulletproof Automotive',
		img: 'Bulletproof_Automotive',
		site: 'http://www.bulletproofautomotive.com/'
	},
	/*{
		name: 'HomeRevolution', //thisn
		img: 'HomeRevolution',
		site: 'https://www.homerev.com/'
	},*/
	{
		name: 'Plymouth Foam',
		img: 'Plymouth_Foam',
		site: 'http://www.plymouthfoam.com/'
	},
	{
		name: 'Derksen',
		img: 'Derksen',
		site: 'http://www.derksenprinters.com/'
	},
	{
		name: 'Bimba',
		img: 'Bimba',
		site: 'http://www.bimba.com/'
	},
	{
		name: 'Design Concepts',
		img: 'Design-Concepts',
		site: 'http://www.design-concepts.com/'
	},
	{
		name: 'AWC Wire',
		img: 'AWC',
		site: 'http://www.awcwire.com/'
	},
	{
		name: 'Triad Magnetics',
		img: 'Triad',
		site: 'http://www.triadmagnetics.com/index.html'
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
