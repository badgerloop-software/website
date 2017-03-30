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
})

.directive('imageSlideshow', function() {
	return {
		templateUrl: 'directives/slideshow.html',
		controller: 'sponsorshipController'
	}
})

.directive('teamApplication', function() {
	return {
		templateUrl: 'directives/application.html',
		controller: 'contactController'
	}
})

.directive('mediaForm', function() {
	return {
		templateUrl: 'directives/media-form.html',
		controller: 'contactController'
	}
})

.directive('sponsorForm', function() {
	return {
		templateUrl: 'directives/sponsor-form.html',
		controller: 'contactController'
	}
});

