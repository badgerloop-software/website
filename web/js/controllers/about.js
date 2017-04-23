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
];

  if (globalUpdateButtons) globalUpdateButtons();
});
