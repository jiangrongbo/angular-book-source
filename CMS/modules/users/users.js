'use strict';
angular.module('users', []);
//路由定义
myApp.config(function($stateProvider) {
  //登录
  $stateProvider.state('login', {
	url: "/login",
    templateUrl: 'modules/users/login.html',
	controller: 'loginController'
  });
  //注册
  $stateProvider.state('signup', {
	url: "/signup",
    templateUrl: 'modules/users/signup.html',
	controller: 'signupController'
  });
  //登出
  $stateProvider.state('logout', {
	url: "/logout",
	template: "<h3>Logging out...</h3>",
    controller: 'logoutController'
  });
});

//Factories
myApp.factory('userServices', ['$http', function($http) {

    var factoryDefinitions = {
      login: function(loginReq) {
        return $http.get('modules/users/mock/login.json', loginReq)
        .success(function(data) { return data; });
      },
	  signup: function(signupReq) {
        return $http.get('modules/common/mock/success.json', signupReq)
        .success(function(data) { return data; });
      }
	}
    return factoryDefinitions;
  }
]);
	  
//Controllers
myApp.controller('loginController', 
                ['$scope', 
                 'userServices',
                 '$location', 
                 '$rootScope', 
function($scope, userServices, $location, $rootScope) {

	$scope.login = {"email":"jiangrongbo@gmail.com",
                    "password": "mypassword"};
	$scope.doLogin = function() {
		if ($scope.loginForm.$valid) {	
			userServices.login($scope.login).then(function(result){
				$scope.data = result;
				if (!result.error) {
				  window.sessionStorage["userInfo"] = JSON.stringify(result.data);
				  $rootScope.userInfo = JSON.parse(window.sessionStorage["userInfo"]);
  				  $location.path("/dashboard");
				}
			});	
		}
	};
}]);
myApp.controller('signupController',
                 ['$scope', 
                  'userServices', 
                  '$location', 
function($scope, userServices, $location) {
	$scope.doSignup = function() {
		if ($scope.signupForm.$valid) {	
			userServices.signup($scope.signup).then(function(result){
				$scope.data = result;
				if (!result.error) {	
					$location.path("/login");
				}	
			});	
		}
	}
}]);
myApp.controller('logoutController',
                 ['$scope', 
                  '$location', 
                  '$rootScope', 
function($scope, $location, $rootScope) {
	sessionStorage.clear();
	$rootScope.userInfo = false;
	$location.path("/login");
}]);