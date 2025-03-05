var elem = null;

//elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티를 참조
var value = elem?.value;
// console.log(value); //undefined

//?.는 객체를 가리키기를 기대하는 변수가 null 또는 undefined 아닌지 확인하고 프로퍼티 참조할 때 유용

var str = "";

// 문자열의 길이(length)를 참조한다.
var length = str && str.length;

// 문자열의 길이(length)를 참조하지 못한다.
console.log(length); // ''

//옵셔널체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 falsy값이라도 null. undefined가 아니면
var length = str?.length;
console.log(length); //0

//ES11 도입된 null병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환 or 좌항의 피연산자 반환
//null 병합 연산자 ?? 는 변수에 기본값 설정할 때 유용
var foo = null ?? "default string";
console.log(foo); //default string

//null 병합 연산자??는 변수에 기본값 설정할 때 유용
var foo = "" || "default string";
console.log(foo); //default string

var foo = "" ?? "default string";
console.log(foo); // ""
