registerModule.controller("UserController",function($scope,$log){
    $scope.uname = "register";
    $scope.pword = "admin";
    $scope.submit = function() {
        alert("注册模块：UserController");
    }
});