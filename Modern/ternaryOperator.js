//조건식의 평가 결과에 따라 반환할 값 결정.

var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수

var x = 2,
  result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = "홀수";
else result = "짝수";

console.log(result); // 짝수

var x = 2,
  result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = "홀수";
else result = "짝수";

console.log(result); // 짝수

var x = 10;

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수

// 논리합(||) 연산자
true || true; // -> true
true || false; // -> true
false || true; // -> true
false || false; // -> false

// 논리곱(&&) 연산자
true && true; // -> true
true && false; // -> false
false && true; // -> false
false && false; // -> false

// 논리 부정(!) 연산자
!true; // -> false
!false; // -> true

// 암묵적 타입 변환
!0; // -> true
!"Hello"; // -> false

// 단축 평가
"Cat" && "Dog"; // -> 'Dog'

//드 모르간 법칙
//논리 연산자로 구성된 복잡한 표현식은 가독성이 좋지 않아 한눈에 이해하기 어려울 때가 있다. 드 모르간 법칙을 활용하면 복잡한 표현식을 좀 더 가독성이 좋은 표현식으로 변환 될수 있다.
!(x || y) === (!x && !y);
!(x && y) === (!x || !y);

//쉼표 연산자
// 왼쪽 연산자부터 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가결과를 반환
var x, y, z;

(x = 1), (y = 2), (z = 3); // 3

10 * 2 + 3; // -> 23

// 그룹 연산자를 사용하여 우선순위를 조절
10 * (2 + 3); // -> 50

typeof ""; // -> "string"
typeof 1; // -> "number"
typeof NaN; // -> "number"
typeof true; // -> "boolean"
typeof undefined; // -> "undefined"
typeof Symbol(); // -> "symbol"
typeof null; // -> "object"
typeof []; // -> "object"
typeof {}; // -> "object"
typeof new Date(); // -> "object"
typeof /test/gi; // -> "object"
typeof function () {}; // -> "function"

//typeof 연산자로 null값을 연산해보면 null이 아닌 object를 반환하는데 주의하기.
//자바스크립트 첫 번째 버전의 버그. 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정되지 못함.
//null 타입인지 확인할때는 typeof연산자를 사용하지말고 연산자 === 이용

var foo = null;

typeof foo === null; // -> false
foo === null; // -> true

// undeclared 식별자를 선언한 적이 없다.
typeof undeclared; // -> undefined

//지수 연산자 : 좌항의 피연산자를 밑으로, 우항의 피연산자를 지수로 거듭 제곱하여 숫자 값을 반환한다.
2 ** 2; //4
2 ** 2.5; //5.65685424949238
2 ** 0; //1
2 ** -2; //0.25

//지수 연산자 도입되기 전 Math.pow 메서드
Math.pow(2, 2); //4
Math.pow(2, 2.5); //5.65685424949238

//지수 연산자는 Math.pow보다 가독성이 좋다.
2 ** (3 ** 2); //512
Math.pow(2, Math.pow(3, 2)); //512

//음수를 거듭제곱 밑으로 사용해 계산하려면 괄호로 묶어야한다.
(-5) ** 2;

//지수 연산자는 할당 연산자와 사용 가능하다.
var num = 5;
num **= 2; // -> 25

//지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다.
2 * 5 ** 2; // -> 50

//부수효과 있는 연산자 할당 연산자 = , 증가/감소 연산자(++/--), delete 연산자
var x;

// 할당 연산자는 변수 값이 변하는 부수 효과가 있다.
// 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x = 1;
console.log(x); // 1

// 증가/감소 연산자(++/--)는 피연산자의 값을 변경하는 부수 효과가 있다.
// 피연산자 x의 값이 재할당되어 변경된다. 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
x++;
console.log(x); // 2

var o = { a: 1 };

// delete 연산자는 객체의 프로퍼티를 삭제하는 부수 효과가 있다.
// 이는 o 객체를 사용하는 다른 코드에 영향을 준다.
delete o.a;
console.log(o); // {}
