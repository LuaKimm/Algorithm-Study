// 산술 연산자
5 * 4; // -> 20
// 문자열 연결 연산자
"My name is " + "Lee"; // -> 'My name is Lee'
// 할당 연산자
color = "red"; // -> 'red'
// 비교 연산자
3 > 5; // -> false
// 논리 연산자
true && false; // -> false
// 타입 연산자
typeof "Hi"; // -> string

5 + 2; // -> 7
5 - 2; // -> 3
5 * 2; // -> 10
5 / 2; // -> 2.5
5 % 2; // -> 1

/*
단항 산술 연산자
++ 피연산자 값을 증가/감소 시킨 후 다른 연산을 수행한다.
--
+
-
*/

var x = 5,
  result;

//선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x);

//선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x);

// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당 (prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

var x = "1";

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // true

// 불리언 값을 숫자로 타입 변환한다.
x = false;
console.log(+x); // 0
// 부수 효과는 없다.
console.log(x); // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = "Hello";
console.log(+x); // NaN
// 부수 효과는 없다.
console.log(x); // "Hello"

//-는 부호를 반전한 값을 반환. 숫자 타입 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.
-(-10); //10
-"10"; //-10
-true; //-1
-"Hello"; //NaN

// 문자열 연결 연산자
"1" + 2; // -> '12'
1 + "2"; // -> '12'

// 산술 연산자
1 + 2; // -> 3

// true는 1로 타입 변환된다.
1 + true; // -> 2

// false는 0으로 타입 변환된다.
1 + false; // -> 1

// null은 0으로 타입 변환된다.
1 + null; // -> 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // -> NaN
1 + undefined; // -> NaN
