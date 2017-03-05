/*****************************************************************************/
/*                       Main Application Setup                              */
/*****************************************************************************/
angular.module('badgerloop-site', dependencyList)

.config(function($routeProvider, $mdThemingProvider) { // $mdIconProvider

	$mdThemingProvider
	.theme('default')
    /*************************  Theme Settings  ******************************/
	.primaryPalette(themeColors.primary)
	.accentPalette(themeColors.accent)
	.warnPalette(themeColors.warn)
	.backgroundPalette(themeColors.background);
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
/*****************************************************************************/
