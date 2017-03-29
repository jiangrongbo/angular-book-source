describe('service test', function() {
  beforeEach(module('myApp'));
    
  it('sayHello service test', function() {
       inject(function(sayHello) {
            var result = sayHello.greeting("Smith");
            expect(result).toBe("Hello Smith");
       });
  });
});