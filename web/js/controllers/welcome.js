angular.module('controllers')
.controller('welcomeController', function($scope) {
    $scope.test = "WELCOME";

    $scope.tl = {};
    $scope.tl.test= "TEAM_LEADS";
});
