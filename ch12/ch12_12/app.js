var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'MainController'
    	})
    	.when('/about', {
    		templateUrl: 'page-about.html',
            controller: 'AboutController'
    	})
    	.when('/contact', {
    		templateUrl: 'page-contact.html',
            controller: 'ContactController'
    	});

});

animateApp.controller('MainController', function($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('AboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

animateApp.controller('ContactController', function($scope) {
    $scope.pageClass = 'page-contact';
});