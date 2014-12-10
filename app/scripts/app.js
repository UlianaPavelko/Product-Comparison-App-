var syzygyApp = angular.module('syzygyApp', ['ngRoute', 'productService', 'ui.bootstrap']);
syzygyApp.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/desktop.html', 
                controller: 'ComparingToolCtrl'
            })
            .when('/mobile', {
                templateUrl: 'partials/mobile.html', 
                controller: 'ComparingToolCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });