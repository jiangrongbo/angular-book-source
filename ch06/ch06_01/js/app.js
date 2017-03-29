var routeModule = angular.module('routeModule', ['ngRoute']);

routeModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
          when('/addOrder', {
            templateUrl: 'templates/add-order.html',
            controller: 'AddOrderController'
          }).
          when('/showOrders', {
            templateUrl: 'templates/show-orders.html',
            controller: 'ShowOrdersController'
          }).
          otherwise({
            redirectTo: '/addOrder'
          });
}]);