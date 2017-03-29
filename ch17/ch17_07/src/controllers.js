var app = angular.module("myApp",[]);
app.controller("MainController",function($scope){
    
    $scope.calculate = function(){
        $scope.total = $scope.price * $scope.num;
    }
});

