angular.module('controllers')
.controller('aboutController', function($scope) {

$scope.factoids = [
  {
    fact:"Competition II Dates: ",
    answer: "August 25th - August 27th, 2017",
  },
  {
    fact:"Host: ",
    answer: "SpaceX",
  },
  {
    fact:"Location: ",
    answer: "SpaceX's Headquarters in Hawthorne, California",
  },
  {
    fact:"Number of Teams: ",
    answer: "22",
  },
  {
    fact:"Where are the Teams From? ",
    answer: "16 from the United States, one from Poland, two from Germany, one from the United Kingdom, one from India, one from Japan",
  }, // this needs to be checked, I don't think it includes rLoop
  {
    fact:"Objective of the Competition: ",
    answer: "Maximum Speed",
  },
  {
    fact: "Length of the Vacuum Tube: ",
    answer: " 3960 feet (3/4ths of a mile)"
  },
  {
    fact: "Will the event be livestreamed? ",
    answer: " You bet! We will post the link as the event draws closer."
  },
  {
    fact: "Can We See the Badgerloop Pod Before it goes to California? ",
    answer: " Yes! Our reveal event will be in late June. More details to come!"
  },
];

  if (globalUpdateButtons) globalUpdateButtons();
});
