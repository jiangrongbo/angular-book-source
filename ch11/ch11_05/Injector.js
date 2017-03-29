var Injector = {
   dependencies: {},
   add : function(qualifier, obj){
      this.dependencies[qualifier] = obj; 
   },
   get : function(func){
      var obj = {};
      var dependencies = this.resolveDependencies(func);
      func.apply(obj, dependencies);
      return obj;
   },
   resolveDependencies : function(func) {
      var args = this.getArguments(func);
      var dependencies = [];
      for ( var i = 0; i < args.length; i++) {
         dependencies.push(this.dependencies[args[i]]);
      }
      return dependencies;
   },
   getArguments : function(func) {
      var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      var args = func.toString().match(FN_ARGS)[1].split(',');
      return args;
   }
};