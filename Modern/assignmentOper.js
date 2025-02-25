/*
= : x=5  x=5
+=: x+=5 x=x+5
-=: x-=5 x=x-5
*=: x*=5 x=x*5
/= x/=5 x=x/5
%= x%5  x=x%5
*/

var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = "My name is ";

// 문자열 연결 연산자
str += "Lee"; // str = str + 'Lee';
console.log(str); // 'My name is Lee'

//표현식은 값으로 평가될 수 있는 문이고, 문에는 표현식인 문과 표현식이 아닌 문이 있다. 할당문은 표현식일까?
var x;

// 할당문은 표현식인 문이다.
console.log((x = 10)); // 10
//할당문은 값으로 평가되는 표현식인 문으로서 할당된 값으로 평가된다.

//연쇄할당. 오른쪽에서 왼쪽으로 진행
var a, b, c;
a = b = c = 0;
console.log(a, b, c); //000

// 동등 비교
5 == 5; // -> true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == "5"; // -> true

// 동등 비교. 결과를 예측하기 어렵다.
"0" == ""; // -> false
0 == ""; // -> true
0 == "0"; // -> true
false == "false"; // -> false
false == "0"; // -> true
false == null; // -> false
false == undefined; // -> false

//일치 비교(===) 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true반환
// 일치 비교
5 === 5; // -> true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === "5"; // -> false

// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // -> false

//숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN 사용
console.log(Number.isNaN(NaN));
Number.isNaN(10); // -> false
Number.isNaN(1 + undefined); // -> true

// 양의 0과 음의 0의 비교. 일치 비교/동등 비교 모두 결과는 true이다.
0 === -0; // -> true
0 == -0; // -> true

-0 === +0; // -> true
Object.is(-0, +0); // -> false

NaN === NaN; // -> false
Object.is(NaN, NaN); // -> true

// 대소 관계 비교
5 > 0; // -> true
5 > 5; // -> false
5 >= 5; // -> true
5 <= 5; // -> true

// 부동등 비교
5 != 8; // -> true
5 != 5; // -> false
5 != "5"; // -> false

// 불일치 비교
5 !== 8; // -> true
5 !== 5; // -> false
5 !== "5"; // -> true
