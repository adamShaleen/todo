angular.module('yagonnawanna').controller('controller', function($scope, $state, service) {


//REGISTER NEW USER
$scope.register = function() {
    service.register($scope.credentials).then(function(response) {
        if (response) {
            $scope.login();
        }
    });
};

//LOGIN
$scope.login = function() {
    service.login($scope.credentials).then(function(response) {
        $state.go('todo');
    });
};


});  // closing controller tag
