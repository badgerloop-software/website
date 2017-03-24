/*****************************************************************************/
/*                    Additional Module Declarations                         */
/*****************************************************************************/
angular.module('controllers', []);
angular.module('directives', []);
//angular.module('factories', []);
/*****************************************************************************/
/*****************************************************************************/


/*****************************************************************************/
/*                            Configuration Settings                         */
/*****************************************************************************/
var dependencyList = ['ngMaterial', 'ngRoute', 'controllers', 'directives'];

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
/*****************************************************************************/
