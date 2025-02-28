//반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행흐름을 이동시킨다. break문 처럼 반복문을 탈출하지 않는다.
var string = "Hello World";
var search = "l";
var count = 0;

for (var i = 0; i < string.length; i++) {
  // 'l' 이 아니면 현 지점에서 실행 중단하고 반복문 증감식으로 이동한다.
  if (string[i] !== "l") continue;
  count++; //continue문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); //3

//참고로 String.prototype.match 메서드를 사용해도 같은 동작 한다.
// const regexp = new RegExp(search, "g");
// console.log(string.match(regexp).length);

// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== search) continue;

  count++;
  // code
  // code
  // code
}
