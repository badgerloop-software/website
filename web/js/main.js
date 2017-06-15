/*                               Utility Functions                           */
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

function empty_array(array) { while (array.length > 0) array.pop(); }

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
    primary: 'red', accent: 'deep-orange',
    warn: 'orange', background: 'grey'
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
    aboutRoute: {
        templateUrl: 'views/about.html',
        controller: 'aboutController'
    },
    teamRoute: {
        templateUrl: 'views/team.html',
        controller: 'teamController'
    },
   /* revealRoute: {
        templateUrl: 'views/reveal.html',
        controller: 'revealController'
    }*/

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
	.when('/about', routes.aboutRoute)
	.when('/sponsorship', routes.sponsorshipRoute)
//	.when('/reveal', routes.revealRoute)
    /*************************************************************************/
	.otherwise({redirectTo: '/home'});
});
/*****************************************************************************/

/*                         Splash Screen Setup                               */
window.onload = function() {
	document.getElementById('splash_screen').style.animationPlayState = "running";
	setTimeout(function() {
		document.getElementById('splash_screen').style.visibility = "hidden";
	}, 2700);
}
/*****************************************************************************/
