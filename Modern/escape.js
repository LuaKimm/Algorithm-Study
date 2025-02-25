/*이스케이프 시퀀스
\0 Null
\b 백스페이스
\f 폼피드 프린터로 출력할 경우 다음 페이지의 시작 지점으로 이동한다.
\n 개행 다음행으로 이동
\r 개행 커서를 처음으로 이동
\t 탭(수평)
\v 탭(수직)
\uXXXX 유니코드, 
\' 작은따옴표
\" 큰따옴표
\\ 백슬래시
*/

var template = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;

console.log(template);
/*
<ul>
  <li><a href="#">Home</a></li>
</ul>
템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용된다.
*/

var first = "Ung-mo";
var last = "Lee";

console.log("My name is " + first + " " + last + "."); //My name is Ung-mo Lee.

console.log(`1+2 = ${1 + 2}`);

var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

var foo;
console.log(foo); // undefined

var element = document.querySelector(".myClass");

// HTML 문서에 myClass 클래스를 갖는 요소가 없다면 null을 반환한다.
console.log(element); // null
