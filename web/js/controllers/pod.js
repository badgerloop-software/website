angular.module('controllers')
.controller('MainCtrl', function($scope, $location, $anchorScroll, $routeParams) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }
});

//.controller('podController', function($scope) {
//    $scope.test = "POD_PAGE";
//});
