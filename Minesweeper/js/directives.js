minesweeper.directive("mineGrid",function(){
    return {
        restrict:'E',
        replace:false,
        templateUrl:'../templates/mineGrid.html'
    }
});

// 自定义ngRightClick指令，处理鼠标右键事件
minesweeper.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});