/*****************************************************************************/
/*                    Additional Module Declarations                         */
/*****************************************************************************/
angular.module('controllers', []);
//angular.module('factories', []);
/*****************************************************************************/
/*****************************************************************************/


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
	.when('/welcome', routes.welcomeRoute)
    /*************************************************************************/
	.otherwise({redirectTo: '/home'});
});
/*****************************************************************************/
/*****************************************************************************/