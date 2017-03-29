var app = angular.module("myApp", ["ngAnimate"])
app.controller("MainController", function ($scope){
    $scope.isShow = false;
});
app.animation('.showBox', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).slideDown(2000, function() {
        done();
      });
    },
    leave: function(element, done) {
      $(element).fadeOut(2000, function() {
        done();
      });
    }
  }
})
