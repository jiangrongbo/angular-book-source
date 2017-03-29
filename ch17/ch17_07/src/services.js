app.service('sayHello',function(){
    this.greeting = function(name){
        return "Hello " + name;
    }
});