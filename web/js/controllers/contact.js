angular.module('controllers')
.controller('contactController', function($scope) {
	if (globalUpdateButtons()) globalUpdateButtons();

	// Utility Functions
	$scope.toggle_selected = function(item, list) {
		var i = list.indexOf(item);
		(i > -1) ? list.splice(i, 1) : list.push(item);
	};
	$scope.check_selected = function(item, list) {
		return list.indexOf(item) > -1;
	};

	// Student Defaults
	$scope.student = {
		label: "Student", title: "Team Application",
		description:  
			"Are you a current or future UW-Madison student interested in joining the team?",
		year: "", years: [
			"Newly Admitted", "Freshman", "Sophomore", 
			"Junior", "Senior", "Graduate Student",
			"Non-student"
		], teams: [
			"Battery", "Braking", "Composites", "Controls",
			"Electrical", "Fabrication", "Software",
			"Feasibility", "Finance & Supply Chain",
			"Industry Relations", "Media & Marketing",
			"Propulsion", "Structural Analysis",
			"Structural Design", "Virtual Reality"
		], teams_selected: []
	};

	// Sponsor Defaults
	$scope.sponsor = {
		label: "Sponsor", title: "Sponsor Contact",
		description: "Interested in sponsoring Badgerloop?",
		input: "sponsor",
		inputs: [
			{ label: "Organization Name", type: "text", value: ""},
			{ label: "Contact Name", type: "text", value: "" },
			{ label: "Contact Email", type: "email", value: "" },
			{ label: "Contact Number", type: "text", value: "" }
		]
	};

	// Media Defaults
	$scope.media = {
		label: "media", title: "Media Contact",
		description: "Want to know more?",
		input: "media",
		inputs: [
			{ label: "Name", type: "text", value: "" },
			{ label: "Email", type: "email", value: "" },
		]
	};

	// Other Defaults
	$scope.other = {
		label: "Other", title: "Other Contact",
		description: "Want to know more?",
		input: "other",
		inputs: [
			{ label: "Name", type: "text", value: "" },
			{ label: "Email", type: "email", value: "" },
		]
	};

});
