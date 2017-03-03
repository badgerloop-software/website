angular.module('directives')

.directive('badgerloopNavbar', function() {
    return {
	    templateUrl: 'directives/navbar.html',
	    controller: 'navbarController'
    };
})

.directive('badgerloopFooter', function() {
    return {
	    templateUrl: 'directives/footer.html'
    };
})

.directive('teamLeads', function() {
    return {
	    templateUrl: 'directives/team-leads.html',
	    controller: 'welcomeController'
    }
});
