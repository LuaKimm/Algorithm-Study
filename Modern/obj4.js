var score = 80;
var copy = score;

console.log(score); //80
console.log(copy); //80

score = 100;

console.log(score); //100
console.log(copy); //80

//변수에 원시값을 갖는 변수를 할당하면 할당받는 변수에는 할당되는 변수의 원시 값이 복사되어 전달된다. => 값에 의한 전달
//copy변수에 원시값을 갖는 score변수를 할당하면 할당받는 변수에는 할당되는 변수(score)의 원시 값 80이 복사되어 전달된다.

var score = 80;

//copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); //80 80
console.log(score == copy); // true

var score = 80;

//copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80  80
console.log(score === copy); //true

//score 변수와 copy변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
//따라서 score 변수의 값을 변경해도 copy변수의 값에는 어떠한 영향도 주지 않음

score = 100;

console.log(score, copy); //100 80
console.log(score == copy); //false
