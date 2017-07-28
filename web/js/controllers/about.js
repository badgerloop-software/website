angular.module('controllers')
.controller('aboutController', function($scope) {

$scope.factoids = [
  {
    fact:"When is Competition II? ",
    answer: "August 27th, 2017",
  },
  {
    fact:"Who hosts Competition II? ",
    answer: "SpaceX",
  },
  {
    fact:"Where is the competition held? ",
    answer: "Hawthorne, California at SpaceX's Headquarters",
  },
  {
    fact:"How many teams will be at Competition II? ",
    answer: "24",
  },
  {
    fact:"What is the objective of Competition II? ",
    answer: "Maximum Speed. Fastest pod wins!",
  },
  {
    fact: "Will the event be livestreamed? ",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "What is the length of the vacuum tube? ",
    answer: "3/4ths of a mile (3960 feet)"
  },
  {
    fact: "How big is Badgerloop? ",
    answer: "We have roughly 50 members, ranging from undergrads all the way up to PhDs from all majors "
  },
  {
    fact: "How much did it cost to build Pod II? ",
    answer: "Roughly $40,000"
  },
  {
    fact: "How fast do we expect to go? ",
    answer: "Roughly 223 MPH (100 m/s)"
  },
  {
    fact: "How many competitions have we been in? ",
    answer: "Two! We took third at Design Weekend (January 2015), won the innovation award at Competition I (January 2016) and look forward to Competition II."
  },
];

  if (globalUpdateButtons) globalUpdateButtons();
});
