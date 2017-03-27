/*****************************************************************************/
/*                       Main Application Setup                              */
/*****************************************************************************/
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
/*****************************************************************************/

