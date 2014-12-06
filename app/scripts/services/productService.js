angular.module('productService', [])
    .factory('productService', function($http) {
        return {
            getProducts: function() {
                return $http.get('data.json');
            },
        };
    });

