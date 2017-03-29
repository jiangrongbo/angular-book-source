loginModule.controller("UserController",function($scope,$log){
    
    $scope.uname = "login";
    $scope.pword = "admin";
    $scope.submit = function() {
        alert("登录模块：UserController");
    }
});