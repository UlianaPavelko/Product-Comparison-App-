syzygyApp.controller('ComparingToolCtrl', function ($scope, productService)
{
    $scope.products = [];
    productService.getProducts()
        .success(function (data) {
            $scope.products = data;
        });
        
    $scope.productIsSelected = function () {
        angular.forEach($scope.products, function (productInList) {
            if (productInList.id == $scope.productFromSelect1 ||
                    productInList.id == $scope.productFromSelect2 ||
                    productInList.id == $scope.productFromSelect3
                    )
            {
                productInList.disable = true;
            }
            else {
                productInList.disable = false;
            }
        });
    },

    $scope.findProduct = function (id) {
        var product = {};
        angular.forEach($scope.products, function (productInList) {
            if (productInList.id == id) {
                product = productInList;
            }
        });
        return product;
    }
});