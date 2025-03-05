var x = 10;

//명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.

var str = x.toString();
console.log(typeof str, str);

//x변수의 값이 변경된 것은 아니다.
console.log(typeof x, x);

//자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환 되는 것 --> 암묵적 타입 변환 타입 강제 변환
var x = 10;

//암묵적 타입 변환
//문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.

var str = x + "";
console.log(typeof str, str);

//x변수의 값이 변경된 것은 아니다.
console.log(typeof x, x);

// 피연산자가 모두 문자열 타입이어야 하는 문맥
"10" + 2; // -> '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * "10"; // -> 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0; // -> true
if (1) {
}

//템플릿 리터럴 표현식 삽입도 암묵적 타입 변환된다.
`1 + 1 = ${1 + 1}`; // -> "1 + 1 = 2"

// // 숫자 타입
// 0 +
//   "" - // -> "0"
//   0 +
//   ""; // -> "0"
// 1 +
//   "" - // -> "1"
//   1 +
//   ""; // -> "-1"
// NaN + ""; // -> "NaN"
// Infinity +
//   "" - // -> "Infinity"
//   Infinity +
//   ""; // -> "-Infinity"

// // 불리언 타입
// true + ""; // -> "true"
// false + ""; // -> "false"

// // null 타입
// null + ""; // -> "null"

// // undefined 타입
// // undefined +
// //   ""(
// //     // -> "undefined"

//     // 심벌 타입
//     Symbol()
//   ) +
//   ""(
//     // -> TypeError: Cannot convert a Symbol value to a string

//     // 객체 타입
//     {}
//   ) +
//   ""; // -> "[object Object]"
// Math +
//   ""[ // -> "[object Math]"
//     // [] + ''             // -> ""
//     (10, 20)
//   ] +
//   ""(
//     // -> "10,20"
//     function () {}
//   ) +
//   ""; // -> "function(){}"
// Array + ""; // -> "function Array() { [native code] }"

1 - "1"; // 0
1 * "10"; //10
1 / "one" + //NaN
  //자바스크립트 엔진은 숫자 타입이 아닌 값을 숫자 타입으로 암묵적 타입 변환을 수행할 때 다음과 같이 동작한다.
  // 문자열 타입
  "" + // -> 0
  "0" + // -> 0
  "1" + // -> 1
  "string" + // -> NaN
  // 불리언 타입
  true + // -> 1
  false + // -> 0
  // null 타입
  null + // -> 0
  // undefined 타입
  //   undefined + // -> NaN
  // 심벌 타입
  Symbol() + // -> TypeError: Cannot convert a Symbol value to a number
  // 객체 타입
  {} + // -> NaN
  [] + // -> 0
  [10, 20] + // -> NaN
  function () {}; // -> NaN

//if문이나 for문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 논리적 참/거짓으로 평가되어야 하는 표현식
if ("") console.log(x);
if ("") console.log("1");
if (true) console.log("2");
if (0) console.log("3");
if ("str") console.log("4"); //문자열은 truthy
if (null) console.log("5");

// 2 4

//자바스크립트에서 falsy 값
// false
// 0
// '' (빈 문자열)
// null
// undefined
// NaN

// 아래의 조건문은 모두 코드 블록을 실행한다.
if (!false) console.log(false + " is falsy value");
if (!undefined) console.log(undefined + " is falsy value");
if (!null) console.log(null + " is falsy value");
if (!0) console.log(0 + " is falsy value");
if (!NaN) console.log(NaN + " is falsy value");
if (!"") console.log("" + " is falsy value");

//truthy/falsy 값을 판별하는 함수
//전달받은 인수가 falsy 값이면 true, Truthy 값이면 falsy를 반환한다.
function isFalsy(v) {
  return !v;
}
//전달받은 인수가 Truthy 값이면 true, Falsy값이면 false를 반환한다.
function isTruthy(v) {
  return !!v;
}

//모두 true를 반환
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy("");

//모두 true 반환
isTruthy(true);
isTruthy("0"); //빈 문자열이 아닌 문자열은 Truthy값
isTruthy({});
isTruthy([]);
