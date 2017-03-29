'use strict';

var myApp = angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'validation', 
  'validation.rule', 
  'users',
  'dashboard',
  'reports',
  'customers'
]);


myApp.config(function($urlRouterProvider, $httpProvider) {
  // 判断用户是否登录
  if(!window.sessionStorage["userInfo"]){
	$urlRouterProvider.otherwise("/login");  
  }else{
	$urlRouterProvider.otherwise("/dashboard");  
  }
});


myApp.run(function($rootScope, $state) {
	$rootScope.$state = $state; //Get state info in view
	
	if(window.sessionStorage["userInfo"]){
		$rootScope.userInfo = JSON.parse(window.sessionStorage["userInfo"]);
	}
	
	//检查Session，然后重定向页面
	$rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){
		if(toState && toState.data && toState.data.auth
           && !window.sessionStorage["userInfo"]){
			event.preventDefault();
			window.location.href = "#login";
		}		
		
		if(!toState && !toState.data && !toState.data.auth
           && window.sessionStorage["userInfo"]){
			event.preventDefault();
			window.location.href = "#dashboard";
		}
	});
});

//Datatable
myApp.factory('dataTable', ['$filter', 'ngTableParams',
function($filter, ngTableParams) {

    var factoryDefinition = {
      render: function($scope, config, componentId, data) {
        
		if(!config) config ={};
		var config = angular.extend({}, {page:1, count:10}, config)
		
		$scope[componentId] = new ngTableParams(config, {
			total: data.length, 
			getData: function($defer, params) {
				var filteredData = params.filter() ?
						$filter('filter')(data, params.filter()) :
						data;
				var orderedData = params.sorting() ?
						$filter('orderBy')(filteredData, params.orderBy()) :
						data;
				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), 
                        params.page() * params.count()));
			}
		}); 
      }
    }
    return factoryDefinition;
  }
]);

$(function () {
	$('.subnavbar').find ('li').each (function (i) {
		var mod = i % 3;
		if (mod === 2) {
			$(this).addClass ('subnavbar-open-right');
		}
	});
});