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

//GET USER /DISPLAY USER
$scope.displayUser = function() {
    service.getUser().then(function(response) {
        $scope.user_name = response;
    });
};

$scope.displayUser();

//Logout
$scope.logout = function() {
    service.logout().then(function(response) {
        $state.go('login');
    });
};


});  // closing controller tag
