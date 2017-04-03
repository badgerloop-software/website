/*                               Utility Functions                           */
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

function globalScrollTo(xPos) {
	document.getElementById("ng-view-parent").scrollTop = xPos;
}

function toggle_element(id, state) {
	document.getElementById(id).style.visibility = (state) ?
		"visible" : "hidden";
}

function toggle_display(id, state) {
	document.getElementById(id).style.display = (state) ?
		"table" : "none";
}

function default_handler() { console.log("bad function handler!"); }
/*****************************************************************************/

/*                    Additional Module Declarations                         */
angular.module('controllers', []);
angular.module('directives', []);
//angular.module('factories', []);
/*****************************************************************************/


/*                            Configuration Settings                         */
var dependencyList = ['ngMaterial', 'ngRoute', 'controllers', 'directives', 'ngMessages']; 

var themeColors = {
    primary: 'red',
    accent: 'deep-orange',
    warn: 'orange',
    background: 'grey'
};

var routes = {
    homeRoute: {    
	    templateUrl: 'views/home.html',
	    controller: 'homeController'
    },
    podRoute: {
        templateUrl: 'views/pod.html',
        controller: 'podController'
    },
    contactRoute: {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    },
    docsRoute: {
        templateUrl: 'views/docs.html',
        controller: 'docsController'
    },
    sponsorshipRoute: {
        templateUrl: 'views/sponsorship.html',
        controller: 'sponsorshipController'
    },
    mediaRoute: {
        templateUrl: 'views/media.html',
        controller: 'mediaController' 
    },
    teamRoute: {
        templateUrl: 'views/team.html',
        controller: 'teamController' 
    }
};
/*****************************************************************************/


/*                       Main Application Setup                              */
angular.module('badgerloop-site', dependencyList)

.config(function($routeProvider, $mdThemingProvider) { // $mdIconProvider

    /*************************  Theme Settings  ******************************/
	$mdThemingProvider
	.theme('default')
	.primaryPalette(themeColors.primary)
	.accentPalette(themeColors.accent)
	.warnPalette(themeColors.warn)
	.backgroundPalette(themeColors.background);
	$mdThemingProvider
	.theme('dark')
	.primaryPalette(themeColors.primary).dark();
    /*************************************************************************/

	$routeProvider
	.when('/', {redirectTo: '/welcome'})
    /*****************************  Routes  **********************************/
	.when('/home', routes.homeRoute)
	.when('/pod', routes.podRoute)
	.when('/contact', routes.contactRoute)
	.when('/docs', routes.docsRoute)
	.when('/team', routes.teamRoute)
	.when('/media', routes.mediaRoute)
	.when('/sponsorship', routes.sponsorshipRoute)
    /*************************************************************************/
	.otherwise({redirectTo: '/home'});
});
/*****************************************************************************/
