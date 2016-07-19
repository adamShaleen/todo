angular.module('yagonnawanna').service('service', function($http) {


//LOGIN
this.login = function(user) {
    return $http({
        method: 'POST',
        url: '/login',
        data: user
    }).then(function(response) {
        return response.data;
    });
};

//GET USER/DISPLAY ME
this.getUser = function() {
    return $http({
        method: 'GET',
        url: '/me'
    }).then(function(response) {
        return response.data;
    });
};

//REGISTER NEW USER
this.register = function(user) {
    return $http({
        mthod: 'POST',
        url: '/users',
        data: user
    }).then(function(response) {
        return response.data;
    });
};

//LOGOUT CURRENT USER
this.logout = function() {
    return $http({
        method: 'GET',
        url: '/logout',
    }).then(function(response) {
        return response.data;
    });
};



});  // closing service tag
