//주어진 조건식의 평가 결과가 참이면 코드블록을 계속해서 반복 for문은 반복횟수가 명확할 때 주로 사용 while문은 반복 횟수 불명확 할때..
//조건문의 평가결과가 거짓이 되면 코드 블록을 실행하지 않고 종료,
//불리언 값이 아니면 불리언 값으로 강제 변환하여 논리적 참, 거짓 구별

var count = 0;
while (true) {
  console.log(count);
  count++;
  //count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2

//do-while
var count = 0;

//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.

do {
  console.log(count); // 0 1 2
  count++;
} while (count < 3);

// if (true) {
//     break; // Uncaught SyntaxError: Illegal break statement
//   }

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log("foo");

//레이블 문은 프로그램의 실행 순서를 제어하는데 사용한다. switch문의 case문과 default문 레이블 문임. break문에 레이블 식별자를 지정한다.

// foo라는 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log("Done!");

//중첩된 for문의 내부 for문에서 break문을 실행하면 내부 for문을 탈출하여 외부 for문으로 진입
// 내부 for문이 아닌 외부 for문을 탈출하려면 레이블 문을 사용
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i+j ===3이면 outer이라는 식별자가 붙은 레이블 for문을 탈출
    if (i + j === 3) break outer;
    console.log(`inner[${i},${j}]`);
  }
}

console.log("Done!");

//문자열에서 특정 문자의 인덱스 위치 검색할때
var string = "Hello world";
var search = "l";
var index;

//문자열은 유사배열이므로 for문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    index = i;
    break; //반목문 탈출
  }
}
console.log(index); //2

//String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
// console.log(string.indexOf(search)); //2
