var person, $elem, _name, first_name, val1;

// var first-name; 명명 규칙에 위배되는 변수 이름
// var 1st;

var firstname;
var firstName;
var FIRSTNAME;

var x = 3; // NG. x 변수가 의미하는 바를 알 수 없다.
var score = 100; // OK. score 변수는 점수를 의미한다.

// 경과 시간. 단위는 날짜다
var d; // NG

var elapsedTimeInDays; // OK

// 카멜 케이스 (camelCase)
var firstName;

// 스네이크 케이스 (snake_case)
var first_name;

// 파스칼 케이스 (PascalCase)
var FirstName;

// 헝가리언 케이스 (typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById("myId"); // DOM 노드
var observable$ = fromEvent(document, "click"); // RxJS 옵저버블
