angular.module('controllers')
.controller('mediaController', function ($scope) {

	var bloop_articles = [
		{
			name: 'Wisconsin Institute of Discovery',
			site: 'http://wid.wisc.edu/featured-science/virtual-reality-goes-hyper-speed-with-badgerloop/',
			title: 'Virtual Reality Goes Hyper-speed with Badgerloop',
			date: 'Feb 16, 2017'
		},
		{
			name: 'UW-Madison',
			site: 'http://news.wisc.edu/uw-madison-team-wins-innovation-award-in-hyperloop-competition/',
			title: 'UW-Madison team wins Innovation Award in Hyperloop competition',
			date: 'Jan 30, 2017'
		},
		{
			name: 'Daily Cardinal',
			site: 'http://www.dailycardinal.com/article/2016/12/badgerloop-unveils-pod-exposes-public-to-hyperloop-transportation',
			title: 'Badgerloop unviels pod, exposes public to Hyperloop transportation',
			date: 'Dec 6, 2016'
		},
		{
			name: 'UW-Madison',
			site: 'http://news.wisc.edu/uw-madison-places-among-top-teams-in-spacex-hyperloop-competition/',
			title: 'UW-Madison places among top teams in SpaceX Hyperloop competition',
			date: 'Feb 3, 2016'
		},
		{
			name: 'WMTV 15',
			site: 'http://www.nbc15.com/home/headlines/Students-Compete-to-Change-the-Future-of-Transportation-366267801.html?ref=801',
			title: 'Students Compete to Change the Future of Transportation',
			date: 'Jan 31, 2016'
		},
		{
			name: 'The Badger Herald',
			site: 'https://badgerherald.com/news/2016/12/07/badgerloop-unveils-futuristic-hyperloop-pod-model/',
			title: 'Badgerloop unveils futuristic Hyperloop pod model',
			date: 'Dec 7, 2016'
		},
		{
			name: 'Daily Cardinal',
			site: 'http://www.dailycardinal.com/article/2017/01/badgerloop-wins-innovation-award-a72e',
			title: 'Badgerloop wins innovation award',
			date: 'Jan 30, 2017'
		},
		{
			name: 'TeslaRati',
			site: 'https://www.teslarati.com/spacexs-hyperloop-pod-competition-underway-badgerloop-unveils-pod-design/',
			title: 'SpaceX Hyperloop Pod Competition underway: Badgerloop unveils pod design',
			date: 'Jan 27, 2017'
		},
		/*{
			name: 'X-ES',
			site: 'https://www.xes-inc.com/news/x-es-modules-badgerloop-pod-help-propel-team-ahead-spacex-hyperloop-competition/',
			title: 'X-ES Modules in Badgerloop Pod Help Propel Team Ahead in SpaceX Hyperloop Competition',
			date: 'Jan 1, 2017' // I made this up, no date provided
		},*/
		/*{
			name: 'Wisconsin State Journal',
			site: 'http://host.madison.com/wsj/news/local/education/university/with-badgerloop-pod-uw-madison-students-hope-to-shape-future/article_f9f35efa-f663-5506-bfc4-cfe1530b4a2f.html',
			title: 'With Badgerloop pod, UW-Madison students hope to shape future of transportation',
			date: 'Dec 27, 2016'
		},*/
		{
			name: 'Isthmus',
			site: 'http://isthmus.com/events/badgerloop-pod-reveal/',
			title: 'Badgerloop Pod Reveal',
			date: 'Dec 6, 2016'
		},
		/*{
			name: 'Milwaukee Electronics',
			site: 'http://blog.milwaukeeelectronics.com/2017/01/24/screaming-circuits-provides-prototype-circuits-to-badgerloop/',
			title: 'Screaming Circuits provides Prototype Circuits to Badgerloop',
			date: 'Jan 24, 2017'
		},*/
		{
			name: 'WORT FM',
			site: 'https://www.wortfm.org/hyperloop-and-uw-madisons-badgerloop-team/',
			title: '[Podcast] Hyperloop And UW-Madison\'s Badgerloop Team',
			date: 'Apr 21, 2016'
		},
		{
			name: 'Daily Mail',
			site: 'http://www.dailymail.co.uk/video/sciencetech/video-1402923/University-Wisconsin-students-introduce-Badgerloop-pod.html',
			title: 'University of Wisconsin students introduce the Badgerloop pod',
			date: 'Jan 1, 2017' // I made this up, no date provided
		},
		/*{
			name: 'PRLOG',
			site: 'https://www.prlog.org/12572393-badgerloop-3rd-place-spacex-hyperloop-team-to-compete-in-finale-hyperloop-competition-in-fall-2016.html',
			title: 'Badgerloop, 3rd place SpaceX Hyperloop Team, To Compete in Finale Hyperloop Competition in Fall 2016',
			date: 'Jul 12, 2016'
		},*/
		/*{
			name: 'Popular Science',
			site: 'http://www.popsci.com/behind-scenes-at-spacexs-hyperloop-pod-competition',
			title: 'Behind the Scenes at SpaceX\'s Hyperloop Pod Competition',
			date: 'Feb 3, 2016'
		},*/
		{
			name: 'WKOW',
			site: 'http://www.wkow.com/story/33992719/uw-students-to-compete-in-space-x-hyperloop-contest',
			title: 'UW students to compete in SpaceX Hyperloop contest',
			date: 'Dec 21, 2016'
		},
		{
			name: 'Ametherm',
			site: 'https://www.ametherm.com/blog/thermistors/ntc-thermistors-used-tesla-hyperloop',
			title: 'NTC Thermistors Used in Tesla Hyperloop Pod',
			date: '' //I made this up, they didn't list a date
		},
		{
			name: 'GeekWire',
			site: 'http://www.geekwire.com/2016/mit-leads-in-first-round-of-spacexs-hyperloop-contest-but-uw-is-in-the-race/',
			title: 'MIT leads in first round of Elon Musk\'s Hyperloop contest, but UW is in the race',
			date: 'Jan 31, 2016'
		},
		{
			name: 'Metro',
			site: 'http://www.metro-magazine.com/rail/video/720032/video-badgerloop-s-success-travels-fast',
			title: '[Video] Badgerloop\'s success travels fast',
			date: 'Dec 6, 2016'
		},
		{
			name: 'The Lacrosse Tribune',
			site: 'http://lacrossetribune.com/badgerloop/image_2db6c792-f133-5199-a7ea-67f650327b11.html',
			title: 'Badgerloop',
			date: 'Jan 16, 2017'
		},
		{
			name: 'ANSYS',
			site: 'http://www.ansys-blog.com/badgerloop-hyperloop-competition/',
			title: 'Badgerloop Takes Number 3 Spot at Hyperloop Competition',
			date: 'Feb 12, 2016'
		},
	];

	var competition_I_articles = [
		{
			title: 'Here are the winners of Elon Musk’s Hyperloop pod competition',
			link: 'https://news.fastcompany.com/here-are-the-winners-of-elon-musks-hyperloop-pod-competition-4029572',
			source: 'Fast Company News',
			date: 'Jan 30, 2017',
			format: 'Article',
		},
		{
			title: 'Hyperloop pod competition yields a few outstanding models, tunnel announcement ',
			link: 'https://arstechnica.com/business/2017/01/at-spacex-headquarters-27-teams-test-out-half-size-hyperloop-pods/',
			source: 'Arstechnica',
			date: 'Jan 30, 2017',
			format: 'Article',
		},
		{
			title: 'SpaceX’s Hyperloop competition finally puts pods in the tube',
			link: 'https://www.engadget.com/2017/01/30/spacex-hyperloop-pod-competition-2017/ ',
			source: 'Engadget',
			date: 'Jan 30, 2017',
			format: 'Article',
		},
		{
			title: 'Dutch team wins Elon Musk’s SpaceX Hyperloop competition -- Winners List',
			link: 'http://www.teslarati.com/dutch-team-wins-elon-musks-spacex-hyperloop-competition-winners-list/',
			source: 'Teslarati',
			date: 'Jan 30, 2017',
			format: 'Article',
		},
		{
			title: 'SpaceX\' Hyperloop Competition sees three companies run their pods',
			link: 'https://techcrunch.com/2017/01/30/spacexs-hyperloop-competition-sees-three-companies-run-their-pods/',
			source: 'Techcrunch',
			date: 'Jan 30, 2017',
			format: 'Article',
		},
		{
			title: 'Pipe Dreams: A Conversation with the Engineers at the Hyperloop Competition',
			link: 'https://motherboard.vice.com/en_us/article/pipe-dreams-a-conversation-with-the-engineers-at-the-hyperloop-competition',
			source: 'MotherBoard',
			date: 'Jan 29, 2017',
			format: 'Article',
		},
		{
			title: 'Elon Musk SpaceX Hyperloop results first phase',
			link: 'http://www.businessinsider.com/elon-musk-spacex-hyperloop-results-first-phase-2017-1',
			source: 'Business Insider',
			date: 'Jan 29, 2017',
			format: 'Article',
		},
		{
			title: 'Here are the big winners of Elon Musk\'s Hyperloop pod competition',
			link: 'http://www.businessinsider.com/elon-musk-spacex-hyperloop-results-first-phase-2017-1',
			source: 'Business Insider',
			date: 'Jan 29, 2017',
			format: 'Article',
		},
		{
			title: 'Elon Musk\'s Hyperloop contest is happening this weekend -- here\'s  a look at all the competing pods',
			link: 'http://www.businessinsider.com/spacex-hyperloop-competitions-teams-2017-1/#mit-hyperloop-1',
			source: 'Business Insider',
			date: 'Jan 27, 2017',
			format: 'Article',
		},
		/*{
			title: 'Here’s What Hyperloop Pods Could One Day Look Like',
			link: 'https://esist.tech/2016/06/14/heres-what-hyperloop-pods-could-one-day-look-like-esist/',
			source: 'ESIST',
			date: 'Jun 24, 2016',
			format: 'Article',
		},
		{
			title: 'Behind the Scenes at SpaceX\'s Hyperloop Pod Competition',
			link: 'http://www.popsci.com/behind-scenes-at-spacexs-hyperloop-pod-competition',
			source: 'Popular Science',
			date: 'Feb 3, 2016',
			format: 'Article',
		},
		{
			title: 'MIT leads in the first round of Elon Musk\'s Hyperloop contest, but UW is in the race',
			link: 'http://www.geekwire.com/2016/mit-leads-in-first-round-of-spacexs-hyperloop-contest-but-uw-is-in-the-race/',
			source: 'GeekWire',
			date: 'Jan 31, 2016',
			format: 'Article',
		},
		{
			title: 'Over 1,000 college students will compete to design the best Hyperloop pod',
			link: 'http://www.theverge.com/2015/12/15/10232526/hyperloop-university-design-competition-spacex-elon-musk',
			source: 'The Verge',
			date: 'Dec 15, 2015',
			format: 'Article',
		},*/
	];

	$scope.header = "Featured In";
	$scope.bloop_articles = bloop_articles;
	$scope.competition_I_articles = competition_I_articles;

	if (globalUpdateButtons) globalUpdateButtons();
});