app.directive("sayHello",function(){
    return {
        restrict:'E',
        scope:{
            name:'@nameAttr'
        },
        template:"<h3>hello,{{name}}</h3>"
    }
});