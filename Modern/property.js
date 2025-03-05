// var elem = null;
// var value = elem.value; //typeError가 뜬다.

//단축 평가를 사용하면 에러를 발생시키지 않는다.
var elem = null;
// elem이 null이나 undefined와 같은 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;

//함수를 호출할 때 인수를 전달하지 않으면 매개변수에는 undefined가 할당.
//단축 평가를 사용해 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러 방지할 수 있다.

//단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || "";
  return str.length;
}
console.log(getStringLength()); //0
console.log(getStringLength("hi")); //2

//ES6의 매개변수의 기본값 설정
function getStringLength(str = "") {
  return str.length;
}
console.log(getStringLength()); //0
console.log(getStringLength("hi")); //2
//str = ""는 str이 undefined일 경우 ""을 기본값으로 사용하도록 설정하는 문법
//getStringLength() 호출하면 str이 undefined 기본값 ""
//return "".length; 가 출력되어 결과 0 나옴
