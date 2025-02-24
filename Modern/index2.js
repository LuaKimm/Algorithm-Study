function foo() {
  return;
  {
  }
}

console.log(foo()); //undifined

var bar = (function () {})(function () {})();

console.log(bar); //TypeError: (intermediate value)(...) is not a function

// var foo = var x; // 표현식이 아닌 문은 값처럼 사용할 수 없다.

var foo = (x = 100);
console.log(foo); // 100
// 표현식인 문은 값처럼 사용할 수 있다
