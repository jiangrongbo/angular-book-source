
describe('directive test', function() {
  var elm, scope;

  beforeEach(module('myApp'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element('<say-hello name-attr="Smith"></hello-world>');
    scope = $rootScope.$new();
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('sayHello directive test', function() {
    expect(elm.attr('name-attr')).toBe("Smith");
    expect(elm.text()).toBe("hello,Smith");
  });
});