var app = angular.module("animTodo", ["ngAnimate"]);
app.controller("MainController", function($scope) {
  $scope.items = [{text: "这是一条已完成事项", complete: true}];
  $scope.newTodo = "";
  
  $scope.addTodo = function() {
    $scope.items.push({text: $scope.newTodo, complete: false});
    $scope.newTodo = "";
  };
  
  $scope.removeTodo = function(index) {
    $scope.items.splice(index, 1);
  };
  
  $scope.clearAll = function() {
    $scope.items = [];
  };
});