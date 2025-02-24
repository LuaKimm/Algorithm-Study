var integer = 10; //정수
var double = 10.12; //실수
var negative = -20; //음의 정수

var binary = 0b01000001; //2진수
console.log(binary);

var octal = 0o101; //8진수
console.log(octal);

var hex = 0x41;

console.log(binary == octal); //true

console.log(1 === 1.0); //자바스크립트는 정수도 실수로 처리된다.

console.log(10 / 0); //Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "String"); //NaN

// 자바스크립트는 대소문자를 구별한다.
// var x = nan; // ReferenceError: nan is not defined

var string = hello;
