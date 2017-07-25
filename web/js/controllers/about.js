angular.module('controllers')
.controller('aboutController', function($scope) {

$scope.factoids = [
  {
    fact:"Competition II Date: ",
    answer: "August 27th, 2017",
  },
  {
    fact:"Host of Competition II: ",
    answer: "SpaceX",
  },
  {
    fact:"Location of the competition: ",
    answer: "Hawthorne, California at SpaceX's Headquarters",
  },
  {
    fact:"Number of Teams at Competition II: ",
    answer: "24",
  },
  {
    fact:"Objective of the Competition: ",
    answer: "Maximum Speed",
  },
  {
    fact: "Will the event be livestreamed? ",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "Length of the Vacuum Tube: ",
    answer: "3/4ths of a mile (3960 feet)"
  },
  {
    fact: "How big is Badgerloop? ",
    answer: "We have roughly 40 members "
  },
  {
    fact: "How long did it take to make Pod II?",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "Will the event be livestreamed? ",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "Will the event be livestreamed? ",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "Will the event be livestreamed? ",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "Will the event be livestreamed? ",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "How much did it cost to build Pod II? ",
    answer: "??? "
  },
];

  if (globalUpdateButtons) globalUpdateButtons();
});
