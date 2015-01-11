var comparisonApp = angular.module('comparisonApp', ['ngRoute', 'productService', 'ui.bootstrap']);
comparisonApp.config(
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