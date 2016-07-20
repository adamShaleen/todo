angular.module('yagonnawanna', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './login/login.html',
            controller: 'controller',
        })

        .state('todo', {
            url: '/todo',
            templateUrl: './todo/todo.html',
            controller: 'controller',
        });

        $urlRouterProvider
        .otherwise('/login');



}); // closing app tag
