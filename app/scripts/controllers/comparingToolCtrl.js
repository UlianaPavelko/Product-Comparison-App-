comparisonApp.controller('ComparingToolCtrl', function ($scope, productService)
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
    $scope.getActiveProduct = function (id) {
        if (!id) {
            return false;
        }

        var result;
        angular.forEach($scope.products, function (productInList) {
            if (productInList.id == id && productInList.active == true) {
                result = true;
            }
        });
        return result;
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