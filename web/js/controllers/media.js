var articles = [
  	{
  		name: 'WID',
  		site: 'http://wid.wisc.edu/featured-science/virtual-reality-goes-hyper-speed-with-badgerloop/'
  	},
  	/*{
  		name: 'UW-Madison',
  		site: 'http://news.wisc.edu/uw-madison-team-wins-innovation-award-in-hyperloop-competition/'
  	},*/
  	{
  		name: 'Daily Cardinal',
  		site: 'http://www.dailycardinal.com/article/2016/12/badgerloop-unveils-pod-exposes-public-to-hyperloop-transportation'
  	},
  	/*{
  		name: 'UW-Madison',
  		site: 'http://news.wisc.edu/uw-madison-places-among-top-teams-in-spacex-hyperloop-competition/'
  	},*/
  	{
  		name: 'WMTV15',
  		site: 'http://www.nbc15.com/home/headlines/Students-Compete-to-Change-the-Future-of-Transportation-366267801.html?ref=801'
  	},
  	/*{
  		name: 'The Badger Herald',
  		site: 'https://badgerherald.com/news/2016/12/07/badgerloop-unveils-futuristic-hyperloop-pod-model/'
  	},*/
  	{
  		name: 'Daily Cardinal',
  		site: 'http://www.dailycardinal.com/article/2017/01/badgerloop-wins-innovation-award-a72e'
  	},
  	{
  		name: 'TeslaRati',
  		site: 'https://www.teslarati.com/spacexs-hyperloop-pod-competition-underway-badgerloop-unveils-pod-design/'
  	},
  	/*{
  		name: 'X-ES',
  		site: 'https://www.xes-inc.com/news/x-es-modules-badgerloop-pod-help-propel-team-ahead-spacex-hyperloop-competition/'
  	},*/
  	/*{
  		name: 'Wisconsin State Journal',
  		site: 'http://host.madison.com/wsj/news/local/education/university/with-badgerloop-pod-uw-madison-students-hope-to-shape-future/article_f9f35efa-f663-5506-bfc4-cfe1530b4a2f.html'
  	},*/
  	{
  		name: 'Isthmus',
  		site: 'http://isthmus.com/events/badgerloop-pod-reveal/'
  	},
    /*{
  		name: 'Milwaukee Electronics',
  		site: 'http://blog.milwaukeeelectronics.com/2017/01/24/screaming-circuits-provides-prototype-circuits-to-badgerloop/'
  	},*/
    /*{
  		name: 'WORT FM',
  		site: 'https://www.wortfm.org/hyperloop-and-uw-madisons-badgerloop-team/'
  	},*/
    /*{
  		name: 'Daily Mail',
  		site: 'http://www.dailymail.co.uk/video/sciencetech/video-1402923/University-Wisconsin-students-introduce-Badgerloop-pod.html'
  	},*/
    /*{
  		name: 'Metro Magazine',
  		site: 'http://www.metro-magazine.com/rail/video/720032/video-badgerloop-s-success-travels-fast'
  	},*/
    /*{
  		name: 'PRLOG',
  		site: 'https://www.prlog.org/12572393-badgerloop-3rd-place-spacex-hyperloop-team-to-compete-in-finale-hyperloop-competition-in-fall-2016.html'
  	},*/
    /*{
  		name: 'Next Generation Blogs',
  		site: 'https://nextgenerationblogs.wordpress.com/2016/06/15/hyperloop-technology-young-people-and-the-future/'
  	},*/
    {
  		name: 'Popular Science',
  		site: 'http://www.popsci.com/behind-scenes-at-spacexs-hyperloop-pod-competition'
  	},
    {
      name: 'WKOW',
      site: 'http://www.wkow.com/story/33992719/uw-students-to-compete-in-space-x-hyperloop-contest'
    },
    {
      name: 'Ametherm',
      site: 'https://www.ametherm.com/blog/thermistors/ntc-thermistors-used-tesla-hyperloop'
    },
    {
      name: 'GeekWire',
      site: 'http://www.geekwire.com/2016/mit-leads-in-first-round-of-spacexs-hyperloop-contest-but-uw-is-in-the-race/'
    },
    /*{
  		name: 'Metro',
  		site: 'http://www.metro-magazine.com/rail/video/720032/video-badgerloop-s-success-travels-fast'
  	},*/
  	/*{
  		name: 'Mcfarland Thistle',
  		site: 'http://www.hngnews.com/mcfarland_thistle/news/local/article_4f4a3aa4-f301-11e6-8f02-a327f49da3f7.html'
  	},*/
  	/*{
  		name: 'The Lacrosse Tribune',
  		site: 'http://lacrossetribune.com/badgerloop/image_2db6c792-f133-5199-a7ea-67f650327b11.html'
  	},*/
  	{
  		name: 'ANSYS',
  		site: 'http://www.ansys-blog.com/badgerloop-hyperloop-competition/'
  	}
  ];

  angular.module('controllers')
  .controller('mediaController', function($scope) {
    $scope.header = "Featured In";
    $scope.articles = articles;


  if (globalUpdateButtons) globalUpdateButtons();
});
