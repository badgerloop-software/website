angular.module('controllers')
.controller('teamController', function($scope) {

var president = {
	name: "Zuf Wang",
	role: "President",
	email: "xwang523@wisc.edu",
	mantra: "Responsible for overall team performance and lean management.",
	major: "Systems Engineering & Decision Analysis",
	year: "1st year MS",
	description: "I'm tasked with maximizing available resources and human potential in order to tackle engineering and organizational challenges given time and funding constraints. It is my personal mission to ensure long term sustainability of Badgerloop.",
	linkedin: "https://www.linkedin.com/in/zuf-wang/",
	headshot: "Zuf-V2.jpg",
	members: []
};

var technical_director = {
	name: "Max Henry",
	role: "Technical Director",
	email: "henry5@wisc.edu",
	mantra: "Oversees all aspects of technical systems’ design, integration, and testing.",
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
	email: "vkottler@wisc.edu",
	mantra: "Ensure that the pod’s electronics operate and integrate properly.",
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
	email: "jkohlbeck@wisc.edu",
	mantra: "Orchestrate non-technical side of the pod and manage operations of organization.",
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
	email: "mgoldberg4@wisc.edu",
	mantra: "Designs, assembles, and tests the pod’s high and low voltage power systems.",
	major: "Materials Science & Engineering",
	year: "Sophomore",
	description: "This semester the battery team is working on two major projects: 1) developing the 12V battery system for Badgerloop Pod II 2) Continuing to develop, iterate, and test the high power battery pack from Pod I. Continuing to work on Pod I’s power system prepares the team for future pod iterations the will most definitely require a high power electrical system, while providing an incredible learning opportunity for us undergraduate engineers.",
	linkedin: "https://www.linkedin.com/in/maxwellagoldberg/",
	headshot: "Max-G-V2.jpg",
	members: ["Ben Moldenhauer", "Wangnan Zhong", "Sean Simpson", "Brandon Hahn", "Aaron Ostrander", "Austin Muschott", "John Rawley", "Sam Bitter", "Tristan Steiner", "Connor Reams", "Turner Williams", "Nathan Jensen"]
};

var braking = {
	name: "Arjun Chaudhary",
	role: "Braking Team Lead",
	email: "achaudhary4@wisc.edua",
	mantra: "Designs and builds the pod’s high speed braking system",
	major: "Mechanical Engineering",
	year: "Sophomore",
	description: "You can only go as fast as you can stop and for a speed challenge we must envision, create, and deliver on that using the learnings from every corner of engineering and I’m here to facilitate precisely that each step of the way. ",
	linkedin: "",
	headshot: "Arjun-V2.jpg",
	members: ["Kyle Seledic", "Atul Anand", "Ethan Coloma", "Will Moe", "Adam Alfieri", "Majed Alawami", "Sanket Singal", "Mitch Wall"]
};

var composites = {
	name: "Nathan Orf",
	role: "Composites Team Lead",
	email: "norf@wisc.edu",
	mantra: "Creates the pod’s carbon fiber external shell and any other composite components.",
	major: "Engineering Mechanics & Astronautics",
	year: "Junior",
	description: "The goal of my team is to design and simulate a sleek, lightweight shell that can handle any loads that the pod may encounter.  By creating our our own foam plug and mold, we are able to make the shell from the ground up using advanced composite materials and techniques.  In addition, we design any extra components that benefit from the strong, lightweight aspects of composite structures.",
	linkedin: " https://www.linkedin.com/in/nathan-orf-56a17310b/",
	headshot: "Nathan-V2.jpg",
	members: ["Cody Schwartz"]
};

var controls = {
	name: "Nick Beckwith",
	role: "Controls Team Lead",
	email: "nbeckwith2@wisc.edu",
	mantra: "Determines pod’s control scheme and writes code to accomplish this.",
	major: "Computer Engineering & Mathematics",
	year: "Sophomore",
	description: "Our team’s primary goal is to develop better engineers. With better engineers, we will have a better controls team and a better pod. ",
	linkedin: "https://www.linkedin.com/in/nicholas-beckwith-87199365/",
	headshot: "Nick.jpg",
	members: ["Doug Dresser", "Ezra Boley", "Owen Zinkgraf", "Austin Muschott" ]
};


var electrical = {
	name: "Ryan Castle",
	role: "Electrical Team Lead",
	email: "rcastle@wisc.edu",
	mantra: "Implements pod’s electrical system including DAQ, circuit design, and harnessing.",
	major: "Electrical Engineering",
	year: "Sophomore",
	description: "We move electrons— Building a pod requires bringing the principles taught in the ECE curriculum into the real world. We ensure that mechatronics of the pod are functional, accurate and feasible.",
	linkedin: "https://www.linkedin.com/in/ryan-castle-589721106/",
	headshot: "Ryan-V2.jpg",
	members: ["Gregg Van Dycke", "Sam Bitter", "Ezra Boley", "Doug Dresser", "William Gorecki", "Wangnan Zhong", "Tristan Steiner", "Christian Martinez", "Jeffrey Keyser"]
};


var propulsion= {
	name: "Clayton Fellman",
	role: "Propulsion Team Lead",
	email: "cfellman@wisc.edu",
	mantra: "Designs, fabricates, and tests the pod’s pressurized gas propulsion system",
	major: "Mechanical Engineering",
	year: "Junior ",
	description: "",
	linkedin: "https://www.linkedin.com/in/clayton-fellman-b182a4102/",
	headshot: "Clay-V2.jpg",
	members: ["Mark Swartz", "Zach Alden", "Trent Gerew" ]
};

var stability= {
	name: "Ben Kishter",
	role: "Stability Team Lead",
	email: "benkishter@gmail.com",
	mantra: "Ensures that the pod remains stable on the test track throughout the run",
	major: "Engineering Mechanics Astronautics",
	year: "Freshman",
	description: "Ensure pod does not vary from its desired course along the run by designing and building a passive suspension system that controls the pod laterally and attitudinally.",
	linkedin: "",
	headshot: "Ben-V2.jpg",
	members: ["Chris Rushmore", "James Ewald", "Trent Gerew"]
};

var structural_design= {
	name: "Chris Rushmore",
	role: "Structural Design Team Lead",
	email: "crushmore@wisc.edu",
	mantra: "Designs and builds the primary structure of the pod and works with other teams to ensure reliable system integration ",
	major: "Mechanical Engineering",
	year: "Junior ",
	description: "",
	linkedin: "https://www.linkedin.com/",
	headshot: "Chris-V2.jpg",
	members: ["James Ewald",  "Jack Figy", "Jack Dallimore", "Joey Beil", "Chris Hanko"]
};

var structural_analysis = {
	name: "Justin Williams",
	role: "Structural Analysis Team Lead",
	email: "justin.williams@wisc.edu",
	mantra: "Runs Finite Element Analysis on systems as well as thermal and magnetic modeling.",
	major: "Engineering Physics & Computer Science",
	year: "Junior",
	description: "Ensuring the pod is structurally sound and viable is the primary concern of my team. We also look at ways of optimizing designs to be more efficient. My team learns skills necessary for any engineer to possess such as critical analysis of designs and the ability to use engineering software like ANSYS.",
	linkedin: "https://www.linkedin.com/in/justin-williams-394b0b103/",
	headshot: "Justin-V2.jpg",
	members: ["Adam Clauter", "Hayley Raj", "Marcus Runde"]
};

var software= {
	name: "Vaughn Kottler",
	role: "Software Team Lead",
	email: "vkottler@wisc.edu",
	mantra: "Website & Dashboard",
	major: "Computer Engineering & Computer Science",
	year: "Junior ",
	description: "| Building a window into this IoTvacuum-pod requires skill in web development and embedded systems. It requires a lot of knowledge that won’t be covered in the CE or CS curriculum.",
	linkedin: "https://www.linkedin.com/in/vaughnkottler/",
	headshot: "vaughn-smaller.jpg",
	members: ["Kody Fisher"]
};

var fsc= {
	name: "Alex Kuo",
	role: "Finance and Supply Chain Team Lead",
	email: "kuo24@wisc.edu ",
	mantra: "Manages group funds and materials and processes purchase requests.",
	major: "Industrial Engineering",
	year: "Junior ",
	description: "The finance and supply chain team is responsible for maintaining the transparency and sustainability of the organization’s financial status. Additionally, we are responsible for coordinating the flow of materials between suppliers and engineers, ensuring successful project management. Projects that highlight this team include managing a purchase order website, creating a financial reporting system, and coordinating with the industry team to obtain sponsorships.",
	linkedin: "https://www.linkedin.com/in/alex-kuo-719152114/",
	headshot: "Alex-V2.jpg",
	members: ["Kody Fisher", "Fei Wang", "Jack Dallimore", "Maximilian Shakal", "TJ Lee"]
};

var industry= {
	name: "Kali Kinziger",
	role: "Industry Relations Team Lead",
	email: "kkinziger@wisc.edu",
	mantra: "Maintains relationships with sponsors and finds new sponsorships.",
	major: "Political Science & Communications",
	year: "Junior",
	description: "The Industry Relations team works in collaboration with sponsors and Badgerloop members to find a solution that the sponsor company can provide. This, in turn, furthers the fabrication process of the pod and allows Badgerloop to remain competitive.",
	linkedin: "https://www.linkedin.com/in/kali-kinziger-68a5b1123/",
	headshot: "Kali-V2.jpg",
	members: ["Emma Krueger", "Abby Lamb", "Ben Gust", "Isak Bowron", "Cole Hess" ]
};

var marketing= {
	name: "Yuliia Kapeliushna",
	role: "Marketing Team Lead",
	email: "kapeliushna@wisc.edu  ",
	mantra: "Promotes the Badgerloop brand through public relations.",
	major: "Industrial Engineering",
	year: "Junior",
	Description: "Our team works on increasing Badgerloop recognition among students, professors, employers, and everyone who is exciting about hyperloop technology. We manage all social media accounts, communicate with journalists, disseminate ongoing progress, and showcase all facets of our dedicated and talented Badgerloop team.",
	linkedin: " https://www.linkedin.com/in/yuliia-kapeliushna-96370396/",
	headshot: "Yuliia-V2.jpg",
	members: ["Alex Hahn", "Alex Nelson", "Anne Brennan", "Daniel Tryba", "Emil Dobrev", "Grace Na", "Kelly Lamb", "Kenzie Tighe", "Lauren Bayer", "Olivia Hofeld", "Saad Khan"]
};

var media= {
	name: "Noah Pulvermacher",
	role: "Media Team Lead",
	email: "npulvermache@wisc.edu",
	mantra: "Creates media content in the form of photos, videos, and graphics",
	major: "Mechanical Engineering",
	year: "Junior",
	Description: "Our team’s role is to maintain a quality portrayal of the Badgerloop team by creating media content that promotes the team’s efforts. We work with everything from graphic design to video production and journalism, all meant to inform the public about the many aspects of the team",
	linkedin: " https://www.linkedin.com/in/noah-pulvermacher-8a36b5a8/",
	headshot: "Noah-V2.jpg",
	members: []
};

	$scope.team_leads = [
		president, technical_director,
		electrical_systems_director,
		operations_director, battery,
		braking, composites, controls,
		electrical, propulsion, stability,
		structural_design, structural_analysis,
		software, fsc, industry, marketing, media
	];

  if (globalUpdateButtons) globalUpdateButtons();
});
