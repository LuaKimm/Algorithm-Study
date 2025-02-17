const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let q = [];
let result = [];

for (let i = 1; i < N + 1; i++) {
  q.push(i);
}

//q의 길이가 0보다 클때 k-1까지 반복문을 돌려라
while (q.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    //그리고 맨앞 요소를 빼라
    let a = q.shift();
    q.push(a);
  }
  result.push(a.shift());
}
console.log(a);
// 그 값을 q 에 push하고

//result에 push해라 뺀값을
