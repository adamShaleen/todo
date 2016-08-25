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
        method: 'POST',
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

//CREATE todo

this.addTodo = function(todo) {
    return $http({
        method: 'PUT',
        url: '/todo/add',
        data: todo
    }).then(function(response) {
        return response.data;
    });
};

// this.createTodo = function(newTODO) {
//     return $http({
//         method: 'POST',
//         url: '/todo',
//         data: newTODO
//     }).then(function(response) {
//         console.log(response.data);
//         return response.data;
//     });
// };



});  // closing service tag
