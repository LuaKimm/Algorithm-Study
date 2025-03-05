//논리곱(&&) 연산자 두개의 피연산자가 모두 true로 평가될때 true반환한다. 논리곱 연산자는 좌항에서 우항으로 평가 진행
"Cat" && "Dog"; // "Dog"

//논리합(||) 두개의 피연ㄴ산자 중 하나만 true여도 true반환
// "Cat" || "Dog"; // -> "Cat"

// // 이 두개 연산자를 단축 평가라고 한다.

// // 단축 평가 규칙
// true || anything; // true
// false || anything; // anything
// true && anything; // anything
// false && anything; //false

// // 논리합(||) 연산자
// "Cat" || "Dog"; // -> "Cat"
// false || "Dog"; // -> "Dog"
// "Cat" || false; // -> "Cat"

// // 논리곱(&&) 연산자
// "Cat" && "Dog"; // -> "Dog"
// false && "Dog"; // -> false
// "Cat" && false; // -> false

var done = true;
var message = "";

//주어진 조건이 true일 때
if (done) message = "완료";

//if 문은 단축 평가로 대체 가능
//done이 true 라면 message에 '완료' 할당
message = done && "완료";
console.log(message); //완료

//조건이 Falsy 값(거짓으로 평가되는 값)일 때 무언가를 해야한다면 논리합(||)으로 if문 대체할 수 있다.
var done = false;
var message = "";

//주어진 조건이 false일 때
if (!done) message = "미완료";
message = done || "미완료";
console.log(message); //미완료

//삼항 조건 연산자는 if else 문을 대체할 수 있다.
var done = true;
var message = "";

//if else 문
if (done) message = "완료";
else message = "미완료";
console.log(message); //완료

//if else 문은 삼항 조건 연산자로 대체 가능
message = done ? "완료" : "미완료";
console.log(message); //완료
