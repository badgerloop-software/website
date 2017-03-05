angular.module('controllers')
.controller('navbarController', function($scope, $location) {
    
    $scope.buttons = [
        { text: "docs",         enabled: false },
        { text: "pod",          enabled: false },
        { text: "contact",      enabled: false },
        { text: "sponsorship",  enabled: false },
        { text: "media",        enabled: false },
        { text: "team",         enabled: false }
    ];
    
    $scope.curr_button = $scope.buttons[0];
    
    $scope.changeView = function(button) {
        $scope.curr_button.enabled = false;
        $scope.curr_button = button;
        $scope.curr_button.enabled = true;
        $location.path(button.text);
    };
    
    $scope.changeViewDirect = function(view) {
        $location.path(view);
    };
    
});
