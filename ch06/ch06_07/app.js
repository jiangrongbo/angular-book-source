var routeModule = angular.module('routeModule', ['ui.router']);
routeModule.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home",{
        url:"/home",
        templateUrl:"template/home.html",
        controller:function($scope) {
            $scope.books = ["Think In Java","Learning Bootstrap","NG Book2"];
        }
    
    });
    
    $stateProvider.state("about",{
        url:"/about",
        templateUrl:"template/about.html",
        controller:function($scope) {
            $scope.name = "江荣波";
        }
    
    });
    
    $stateProvider.state("contact",{
        url:"/contact",
        templateUrl:"template/contact.html"
    });
});