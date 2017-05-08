var platinum_logos = [
	{
		name: 'Altium', img: 'Altium',
		site: 'http://www.altium.com/'
	},
	{
		name: 'ANSYS', img: 'ANSYS',
		site: 'http://www.ansys.com/'
	},
	/*{
		name: 'Tektronix', img: 'Tektronix',
		site: 'http://www.tek.com/'
	},*/
	{
		name: 'HP', img: 'HP',
		site: 'http://www.hp.com/country/us/en/welcome.html'
	},
	/*{
		name: 'OnFloor', img: 'OnFloor',
		site: 'https://onfloor.com/'
	},*/
];

var gold_logos = [
	{
		name: 'Cirrus Aircraft', img: 'Cirrus',
		site: 'https://cirrusaircraft.com/'
	},
	{
		name: 'Siemens', img: 'Siemens',
		site: 'http://www.siemens.com/us/en/home.html'
	},
];

var silver_logos = [
	{
		name: '@1403', img: '1403',
		site: 'http://universityresearchpark.org/the-property/1403-2/'
	},
	{
		name: 'Boxx', img: 'Boxx',
		site: 'https://www.boxx.com/'
	},
	{
		name: 'Carrier Web', img: 'Carrier-Web',
		site: 'https://www.carrierweb.com/'
	},
	{
		name: 'Plexus', img: 'Plexus',
		site: 'http://www.plexus.com/'
	},
	{
		name: 'ThePaperMillStore', img: 'PaperMill',
		site: 'https://www.thepapermillstore.com/'
	},
	{
		name: 'Qualcomm', img: 'Qualcomm',
		site: 'https://www.qualcomm.com/'
	},
	{
		name: 'Snap-on', img: 'Snap-on',
		site: 'https://store.snapon.com/'
	},
];

var bronze_logos = [
	/*{
		name: 'Keysight Technologies', img: 'Keysight_Technologies',
		site: 'http://www.keysight.com/main/home.jspx?cc=US&lc=eng'
	},*/
	{
		name: 'ATA Engineering', img: 'ATA_Engineering',
		site: 'http://www.ata-e.com/'
	},
	{
		name: 'AWC Wire', img: 'AWC',
		site: 'http://www.awcwire.com/'
	},
	{
		name: 'Bimba', img: 'Bimba',
		site: 'http://www.bimba.com/'
	},
	{
		name: 'Bulletproof Automotive', img: 'Bulletproof_Automotive',
		site: 'http://www.bulletproofautomotive.com/'
	},
	{
		name: 'Derksen', img: 'Derksen',
		site: 'http://www.derksenprinters.com/'
	},
	{
		name: 'Design Concepts', img: 'Design-Concepts',
		site: 'http://www.design-concepts.com/'
	},
	{
		name: 'E-Switch', img: 'ESwitch',
		site: 'https://www.e-switch.com/'
	},
	/*{
		name: 'HomeRevolution', img: 'HomeRevolution',
		site: 'https://www.homerev.com/'
	},*/
	{
		name: 'Plymouth Foam', img: 'Plymouth_Foam',
		site: 'http://www.plymouthfoam.com/'
	},
	{
		name: 'Triad Magnetics', img: 'Triad',
		site: 'https://www.triadsemi.com/'
	},
];

angular.module('controllers')
.controller('sponsorshipController', function($scope) {
	$scope.platinum_logos =	{ title: "Platinum", array: platinum_logos };
 	$scope.gold_logos = 	{ title: "Gold", array: gold_logos };
 	$scope.silver_logos =	{ title: "Silver", array: silver_logos };
 	$scope.bronze_logos =	{ title: "Bronze", array: bronze_logos };
 	$scope.logos = [$scope.platinum_logos, $scope.gold_logos, $scope.silver_logos, $scope.bronze_logos];

	if (globalUpdateButtons) globalUpdateButtons();
});
