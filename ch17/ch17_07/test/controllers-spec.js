describe("MainController", function() {
    var $rootScope,
        scope,
        controller;
    
    beforeEach(function(){
        module("myApp");
        inject(function($injector){
            $rootScope = $injector.get("$rootScope");//获取根作用域对象$rootScope
            scope = $rootScope.$new();//使用$rootScope.$new()方法创建子作用域对象
            var $controller =  $injector.get("$controller")//获取$controller对象
            //使用$controlle实例化MainController
            controller = $controller("MainController",{'$scope':scope});
        });
        
        //初始化作用域模型数据
        scope.price = 10.2;
        scope.num = 20;
    });
    
    it("Test calculate function",function(){
        var result = scope.num * scope.price;
        // 对控制器中的calculate()方法进行测试
        scope.calculate();
        expect(scope.total).toEqual(result);
    });

});