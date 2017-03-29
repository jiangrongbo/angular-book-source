var loginModule = angular.module("loginModule",[]);

loginModule.controller("UserController",function($scope,$log){
    
    $scope.uname = "login";
    $scope.pword = "admin";
    $scope.submit = function() {
        alert("登录模块：UserController");
    }

});


var registerModule = angular.module("registerModule",[]);

registerModule.controller("UserController",function($scope,$log){
    $scope.uname = "register";
    $scope.pword = "admin";
    $scope.submit = function() {
        alert("注册模块：UserController");
    }
});