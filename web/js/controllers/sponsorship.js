var platinum_logos = [
	{
		name: 'Altium', img: 'Altium',
		site: 'http://www.altium.com/'
	},
	{
		name: 'ANSYS', img: 'ANSYS',
		site: 'http://www.ansys.com/'
	},
	{
		name: 'HP', img: 'HP',
		site: 'http://www.hp.com/country/us/en/welcome.html'
	},
	{
		name: 'Rockwell Automation', img: 'Rockwell',
		site: 'https://www.rockwellautomation.com/'
	},
	{
		name: 'Siemens', img: 'Siemens',
		site: 'http://www.siemens.com/us/en/home.html'
	}
];

var gold_logos = [
	{
		name: 'Cirrus Aircraft', img: 'Cirrus',
		site: 'https://cirrusaircraft.com/'
	}
];

var silver_logos = [
	{
		name: '@1403', img: '1403',
		site: 'http://universityresearchpark.org/the-property/1403-2/'
	},
	/*{
		name: 'Boxx', img: 'Boxx',
		site: 'https://www.boxx.com/'
	},*/
	{
		name: 'Carrier Web', img: 'Carrier-Web',
		site: 'https://www.carrierweb.com/'
	},
	{
        name: 'College of Engineering', img: 'COE',
        site: 'https://www.engr.wisc.edu/'
    },
	{
        name: 'Fastenal', img: 'Fastenal',
        site: 'https://www.fastenal.com/'
    },
	{
        name: 'Department of Electrical & Computer Engineering', img: 'ECE',
        site: 'https://www.engr.wisc.edu/department/electrical-computer-engineering/'
    },
	{
        name: 'Department of Industrial & Systems Engineering', img: 'ISYE',
        site: 'https://www.engr.wisc.edu/department/industrial-systems-engineering/'
    },
    {
        name: 'Department of Mechanical Engineering', img: 'ME',
        site: 'https://www.engr.wisc.edu/department/mechanical-engineering/'
    },
	{
        name: 'Derksen', img: 'Derksen',
        site: 'http://www.derksenprinters.com/'
    },
	{
        name: 'OnFloor', img: 'OnFloor',
        site: 'https://onfloor.com/'
    },
	{
		name: 'Plexus', img: 'Plexus',
		site: 'http://www.plexus.com/'
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
	{
		name: 'ATA Engineering', img: 'ATA_Engineering',
		site: 'http://www.ata-e.com/'
	},
	{
		name: 'AWC Wire', img: 'AWC',
		site: 'http://www.awcwire.com/'
	},
    {
        name: 'BCP Transportation', img: 'BCP',
        site: 'https://www.bcptrans.com/'
    },
	{
		name: 'Bimba', img: 'Bimba',
		site: 'http://www.bimba.com/'
	},
    {
        name: 'Bittele', img: 'Bittele',
        site: 'http://www.7pcb.com/'
    },
	{
		name: 'Bulletproof Automotive', img: 'Bulletproof_Automotive',
		site: 'http://www.bulletproofautomotive.com/'
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
        name: 'Greenheck', img: 'Greenheck',
        site: 'http://www.greenheck.com/'
    },
	{
		name: 'Ians Pizza', img: 'Ians',
		site: 'https://ianspizza.com/'
	},
	{
		name: 'Maxpro Technologies', img: 'Maxpro',
		site: 'http://www.maxprotech.com/index.html'
	},
	{
		name: 'Midwest Prototyping', img: 'Midwest',
		site: 'https://www.midwestproto.com/'
	},
	{
		name: 'Parker', img: 'Parker',
		site: 'http://www.parker.com/portal/site/PARKER/menuitem.b90576e27a4d71ae1bfcc510237ad1ca/?vgnextoid=c38888b5bd16e010VgnVCM1000000308a8c0RCRD&vgnextfmt=EN'
	},
	{
		name: 'Plymouth Foam', img: 'Plymouth_Foam',
		site: 'http://www.plymouthfoam.com/'
	},
	{
		name: 'ThePaperMillStore', img: 'PaperMill',
		site: 'https://www.thepapermillstore.com/'
	},
    {
        name: 'Project Chrono', img: 'Chrono',
        site: 'https://projectchrono.org/'
    },   
	{
        name: 'SBEL', img: 'SBEL',
        site: 'http://sbel.wisc.edu/'
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
