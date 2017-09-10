angular.module('controllers')
.controller('teamController', function($scope, $mdPanel) {

	var president = {
		name: "Zuf Wang",
		role: "President",
		team: "President",
		email: "xwang523@wisc.edu",
		mantra: "Responsible for overall team performance and lean management.",
		major: "Systems Engineering & Decision Analysis",
		year: "1st year MS",
		description: "I'm tasked with maximizing available resources and human potential in order to tackle engineering and organizational challenges given time and funding constraints. It is my personal mission to ensure long term sustainability of Badgerloop.",
		linkedin: "https://www.linkedin.com/in/zuf-wang/",
		headshot: "Zuf-V2.jpg",
		members: [],
	};

	var technical_director = {
		name: "Max Henry",
		role: "Technical Director",
		team: "Technical Director",
		email: "henry5@wisc.edu",
		mantra: "Oversees all aspects of the technical systems’ design, integration, and testing.",
		major: "Mechanical Engineering",
		year: "Sophomore",
		description: "Within the design and development of a project as complex as this one, many diffe",
		linkedin: "https://www.linkedin.com/in/maxjhenry/",
		headshot: "Max-H-V2.jpg",
		members: []
	};

	var electrical_systems_director = {
		name: "Vaughn Kottler",
		role: "Electrical Systems Director",
		team: "Electrical Systems Director",
		email: "vkottler@wisc.edu",
		mantra: "Ensure that the pod’s electronics operate and integrate properly",
		major: "Computer Engineering & Computer Science",
		year: "Junior",
		description: "The electrical system for any hyperloop pod is very complex. It helps to break things into smaller teams and have someone overseeing the interaction points. That’s where I come in.",
		linkedin: "https://www.linkedin.com/in/vaughnkottler/",
		headshot: "vaughn-smaller.jpg",
		members: []
	};

	var operations_director = {
		name: "Johnny Kohlbeck",
		role: "Operations Director",
		team: "Operations Director",
		email: "jkohlbeck@wisc.edu",
		mantra: "Orchestrate non-technical side of the pod and manage operations of organization",
		major: "Information Systems & Management Human Resources",
		year: "Sophomore",
		description: " Badgerloop is an incredibly complex organization with technical, operational, and organizational challenges faced under tight deadlines, similar to those faced by a startup. My job is to handle the business side of our operation and keep our team running smoothly under pressure.",
		Linkedin: "https://www.linkedin.com/in/john-johnny-kohlbeck-2a5940107/",
		headshot: "Johnny-V2.jpg",
		members: []
	};

	var battery = {
		name: "Max Goldberg",
		role: "Battery Team Lead",
		team: "Battery Team",
		email: "mgoldberg4@wisc.edu",
		mantra: "Design, assemble, and test the pod’s high and low voltage power systems",
		major: "Materials Science & Engineering",
		year: "Sophomore",
		description: "This semester the battery team is working on two major projects: 1) developing the 12V battery system for Badgerloop Pod II 2) Continuing to develop, iterate, and test the high power battery pack from Pod I. Continuing to work on Pod I’s power system prepares the team for future pod iterations the will most definitely require a high power electrical system, while providing an incredible learning opportunity for us undergraduate engineers.",
		linkedin: "https://www.linkedin.com/in/maxwellagoldberg/",
		headshot: "Max-G-V2.jpg",
		members: ["Ben Moldenhauer,", "Wangnan Zhong,", "Sean Simpson,", "Brandon Hahn,", "Aaron Ostrander,", "Austin Muschott,", "John Rawley,", "Sam Bitter,", "Tristan Steiner,", "Connor Reams,", "Turner Williams,", "Nathan Jensen"]
	};

	var braking = {
		name: "Arjun Chaudhary",
		role: "Braking Team Lead",
		team: "Braking Team",
		email: "achaudhary4@wisc.edu",
		mantra: "Design and build the pod’s high speed braking system",
		major: "Mechanical Engineering",
		year: "Sophomore",
		description: "You can only go as fast as you can stop and for a speed challenge we must envision, create, and deliver on that using the learnings from every corner of engineering and I’m here to facilitate precisely that each step of the way. ",
		linkedin: "",
		headshot: "Arjun-V2.jpg",
		members: ["Kyle Seledic,", "Atul Anand,", "Will Moe,", "Adam Alfieri,", "Mitch Wall"]
	};

	var composites = {
		name: "Nathan Orf",
		role: "Composites Team Lead",
		team: "Composites Team",
		email: "norf@wisc.edu",
		mantra: "Create the pod’s external carbon fiber shell and any other composite components",
		major: "Engineering Mechanics & Astronautics",
		year: "Junior",
		description: "The goal of my team is to design and simulate a sleek, lightweight shell that can handle any loads that the pod may encounter.  By creating our our own foam plug and mold, we are able to make the shell from the ground up using advanced composite materials and techniques.  In addition, we design any extra components that benefit from the strong, lightweight aspects of composite structures.",
		linkedin: " https://www.linkedin.com/in/nathan-orf-56a17310b/",
		headshot: "Nathan-V2.jpg",
		members: ["Cody Schwartz,", "Luke Kabasta,", "Matt Benbenek"]
	};

	var controls = {
		name: "Nick Beckwith",
		role: "Controls Team Lead",
		team: "Controls Team",
		email: "nbeckwith2@wisc.edu",
		mantra: "Design and implement the pod’s control scheme",
		major: "Computer Engineering & Mathematics",
		year: "Sophomore",
		description: "Our team’s primary goal is to develop better engineers. With better engineers, we will have a better controls team and a better pod. ",
		linkedin: "https://www.linkedin.com/in/nicholas-beckwith-87199365/",
		headshot: "Nick.jpg",
		members: ["Doug Dresser,", "Ezra Boley,", "Owen Zinkgraf,", "Gregg Van Dycke,", "Sam Schreiner"]
	};


	var electrical = {
		name: "Ryan Castle",
		role: "Electrical Team Lead",
		team: "Electrical Team",
		email: "rcastle@wisc.edu",
		mantra: "Implement the pod’s electrical system including Data Acquisition, circuit design, and harnessing.",
		major: "Electrical Engineering",
		year: "Sophomore",
		description: "We move electrons— Building a pod requires bringing the principles taught in the ECE curriculum into the real world. We ensure that mechatronics of the pod are functional, accurate and feasible.",
		linkedin: "https://www.linkedin.com/in/ryan-castle-589721106/",
		headshot: "Ryan-V2.jpg",
		members: ["Gregg Van Dycke,", "Sam Bitter,", "Ezra Boley,", "Doug Dresser,", "William Gorecki,", "Wangnan Zhong,", "Tristan Steiner,", "Noah Mailloux"]
	};


	var propulsion= {
		name: "Clayton Fellman",
		role: "Propulsion Team Lead",
		team: "Propulsion Team ",
		email: "cfellman@wisc.edu",
		mantra: "Design, fabricate, and test the pod’s pressurized gas propulsion system",
		major: "Mechanical Engineering",
		year: "Junior ",
		description: "",
		linkedin: "https://www.linkedin.com/in/clayton-fellman-b182a4102/",
		headshot: "Clay-V2.jpg",
		members: ["Mark Swartz,", "Zach Alden,", "Trent Gerew,", "Derrick Bohl,", "Matt Challe"]
	};

	var stability= {
		name: "Ben Kishter",
		role: "Stability Team Lead",
		team: "Stability Team",
		email: "benkishter@gmail.com",
		mantra: "Ensure the pod remains stable on the track throughout the run",
		major: "Engineering Mechanics & Astronautics",
		year: "Freshman",
		description: "Ensure pod does not vary from its desired course along the run by designing and building a passive suspension system that controls the pod laterally and attitudinally.",
		linkedin: "https://www.linkedin.com/in/ben-kishter-93853a140/",
		headshot: "Ben-V2.jpg",
		members: ["Chris Rushmore,", "James Ewald,", "Trent Gerew"]
	};

	var structural_design= {
		name: "Chris Rushmore",
		role: "Structural Design Team Lead",
		team: "Structural Design Team",
		email: "crushmore@wisc.edu",
		mantra: "Design and build the primary structure of the pod and work with other teams to ensure reliable system integration ",
		major: "Mechanical Engineering",
		year: "Junior",
		description: "",
		linkedin: "",
		headshot: "Chris-V2.jpg",
		members: ["James Ewald,",  "Jack Figy,", "Jack Dallimore,", "Joey Beil,", "Chris Hanko"]
	};

	var structural_analysis = {
		name: "Justin Williams",
		role: "Structural Analysis Team Lead",
		team: "Structural Analysis Team",
		email: "justin.williams@wisc.edu",
		mantra: "Run Finite Element Analysis on systems as well as thermal and magnetic modeling.",
		major: "Engineering Physics & Computer Science",
		year: "Junior",
		description: "Ensuring the pod is structurally sound and viable is the primary concern of my team. We also look at ways of optimizing designs to be more efficient. My team learns skills necessary for any engineer to possess such as critical analysis of designs and the ability to use engineering software like ANSYS.",
		linkedin: "https://www.linkedin.com/in/justin-williams-394b0b103/",
		headshot: "Justin-V2.jpg",
		members: ["Adam Clauter,", "Hayley Raj,", "Marcus Runde"]
	};

	var software= {
		name: "Vaughn Kottler",
		role: "Software Team Lead",
		team: "Software Team",
		email: "vkottler@wisc.edu",
		mantra: "Build the teams website and the pods dashboard",
		major: "Computer Engineering & Computer Science",
		year: "Junior ",
		description: "| Building a window into this IoT vacuum-pod requires skill in web development and embedded systems. It requires a lot of knowledge that won’t be covered in the CE or CS curriculum.",
		linkedin: "https://www.linkedin.com/in/vaughnkottler/",
		headshot: "vaughn-smaller.jpg",
		members: ["Kody Fisher"]
	};

	var vacuum_testing= {
		name: "Brandon Hahn",
		role: "Vacuum Test Team Lead",
		email: "x",
		mantra: "",
		major: "x",
		year: "x",
		description: "",
		linkedin: "x",
		headshot: "",
		members: ["x"]
	};

	var fsc= {
		name: "Alex Kuo",
		role: "Finance and Supply Chain Team Lead",
		team: "Finance and Supply Chain Team",
		email: "kuo24@wisc.edu ",
		mantra: "Manage the teams funds and process purchase requests.",
		major: "Industrial Engineering",
		year: "Junior ",
		description: "The finance and supply chain team is responsible for maintaining the transparency and sustainability of the organization’s financial status. Additionally, we are responsible for coordinating the flow of materials between suppliers and engineers, ensuring successful project management. Projects that highlight this team include managing a purchase order website, creating a financial reporting system, and coordinating with the industry team to obtain sponsorships.",
		linkedin: "https://www.linkedin.com/in/alex-kuo-719152114/",
		headshot: "Alex-V2.jpg",
		members: ["Kody Fisher,", "Fei Wang,", "Jack Dallimore,", "Maximilian Shakal,", "TJ Lee"]
	};

	var industry= {
		name: "Kali Kinziger",
		role: "Industry Relations Team Lead",
		team: "Industry Relations Team",
		email: "kkinziger@wisc.edu",
		mantra: "Maintain relationships with current sponsors and find new sponsorships.",
		major: "Political Science & Communications",
		year: "Junior",
		description: "The Industry Relations team works in collaboration with sponsors and Badgerloop members to find a solution that the sponsor company can provide. This, in turn, furthers the fabrication process of the pod and allows Badgerloop to remain competitive.",
		linkedin: "https://www.linkedin.com/in/kali-kinziger-68a5b1123/",
		headshot: "Kali-V2.jpg",
		members: ["Emma Krueger,", "Abby Lamb,", "Ben Gust,", "Isak Bowron,", "Cole Hess,", "Leah Akins"]
	};

	var marketing= {
		name: "Yuliia Kapeliushna",
		role: "Marketing Team Lead",
		team: "Marketing Team",
		email: "kapeliushna@wisc.edu  ",
		mantra: "Promote Badgerloop through public relations.",
		major: "Industrial Engineering",
		year: "Junior",
		description: "Our team works on increasing Badgerloop recognition among students, professors, employers, and everyone who is exciting about hyperloop technology. We manage all social media accounts, communicate with journalists, disseminate ongoing progress, and showcase all facets of our dedicated and talented Badgerloop team.",
		linkedin: "https://www.linkedin.com/in/yuliia-kapeliushna-96370396/",
		headshot: "Yuliia-V2.jpg",
		members: ["Alex Hahn,", "Alex Nelson,", "Anne Brennan,", "Daniel Tryba,", "Emil Dobrev,", "Grace Na,", "Kelly Lamb,", "Kenzie Tighe,", "Lauren Bayer,", "Olivia Hofeld,", "Saad Khan"]
	};

	var media= {
		name: "Noah Pulvermacher",
		role: "Media Team Lead",
		team: "Media Team",
		email: "npulvermache@wisc.edu",
		mantra: "Create media content in the form of photos, videos, and graphics",
		major: "Mechanical Engineering",
		year: "Junior",
		description: "Our team’s role is to maintain a quality portrayal of the Badgerloop team by creating media content that promotes the team’s efforts. We work with everything from graphic design to video production and journalism, all meant to inform the public about the many aspects of the team",
		linkedin: "https://www.linkedin.com/in/noah-pulvermacher-8a36b5a8/",
		headshot: "Noah-V2.jpg",
		members: ["Chris Lueneburg,", "Nate Mach,", "Leon Yee Leong Tan,", "Emil Dobrev"]
	};

	var virtual_reality= {
		name: "Peter Procek",
		role: "Virtual Reality Team Lead",
		team: "Virtual Reality Team",
		email: "procek@wisc.edu",
		mantra: "Design and create innovations in virtual reality and software",
		major: "Electrical and Computer Engineering & Computer Science",
		year: "Graduate Student",
		description: "In an effort to provide meaningful applications of virtual reality in engineering and industry applications, we seek to explore extensions to current Virtual reality technologies. We aim to provide a platform for students to learn topics in graphics, virtual reality technologies, and human perception.",
		linkedin: "",
		headshot: "Peter-V2.jpg",
		members: ["Cale Geffre,", "Darby Anderson,", "James Liu,", "Utkarsh Maheshwari,", "Shikhar Mittal,", "Eric Amikam"]
	};

	var outreach_recruiting= {
		name: "Cole Hess",
		role: "Outreach & Recruiting Team Lead",
		team: "Outreach & Recruiting Team",
		email: "cole.hess@wisc.edu",
		mantra: "Educate the general public about our oganization and recruit new members",
		major: "Mechanical Engineering",
		year: "2nd Year MS",
		description: "The goal of our team is to promote Badgerloop through participation in community events that are designed to educate the public about our team and what Hyperloop is. ALso, through our outreach activities we hope to inspire future generations to pursue innovative new ideas and become future leaders. In addition, we seek to recruit driven, passionate new Badgerloop members and we work closelely with the Industry Relations to develop and maintain support from our industry partners.",
		linkedin: "https://www.linkedin.com/in/cole-hess-637a99106/",
		headshot: "Cole-V2.jpg",
		members: ["Isak Bowron,", "Abby Lamb"]
	};

	var feasibility= {
		name: "Michael Schlicting",
		role: "Feasibility Team Lead",
		team: "Feasibliity Team",
		email: "michael.schlicting@gmail.com",
		mantra: "Educates the general public about Badgerloop and Hyperloop technology",
		major: "Transportation Administration",
		year: "PHD",
		description: "",
		linkedin: "",
		headshot: "Mike-V2.jpg",
		members: ["Justin Schrimmer,", "Utkarsh Maheshwari"]
	};

	var faculty_advisor = {
		name: "Michael Cheadle",
		role: "Faculty Advisor",
		email: "mcheadle@wisc.edu",
		mantra: "",
		major: "Mechanical Engineering",
		year: "",
		description: "",
		linkedin: "",
		headshot: "Cheadle.png",
		members: []
	};

	$scope.team_leads = [
		president, technical_director,
		electrical_systems_director,
		operations_director,
		braking, composites,
		electrical, propulsion, stability,
		structural_design, structural_analysis,
		software, fsc, industry, marketing, media, virtual_reality, outreach_recruiting,
		feasibility, faculty_advisor
	];

	var panelPosition = $mdPanel.newPanelPosition()
						.absolute()
						.center();

	// Can play around with this
	var config = {
		attachTo: angular.element(document.body),
		templateUrl: 'views/team-popup.html',
		hasBackdrop: true,
		position: panelPosition,
		trapFocus: true,
		zIndex: 150,
		clickOutsideToClose: true,
		escapeToClose: true,
		focusOnOpen: true,
		scope: $scope,
	};

	$scope.showPanel = function(lead) {
		$scope.lead = lead;
		$mdPanel.open(config);
	};

	if (globalUpdateButtons) globalUpdateButtons();
});
