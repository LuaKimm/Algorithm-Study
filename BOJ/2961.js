const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//S는 곱하고 B는 더해야함
//B를 기준으로 S 값의 차 min을 구하면 되지 않을까...
//

const N = parseInt(input.shift());

const data = input.map((line) => line.split(" ").map(Number)); // 숫자로 변환

let S = data.map((arr) => arr[0]).reduce((acc, cur) => acc * cur, 1);
let B = data.map((arr) => arr[1]).reduce((acc, cur) => acc + cur, 0);

let mindif = Math.abs(S - B);
let bestS = S,
  bestB = B;

for (let i = 0; i < N; i++) {
  let newB = B - data[i][1];

  if (newB >= 0) {
    let dif = Math.abs(S - newB);
    if (dif < mindif) {
      mindif = dif;
      bestB = newB;
    }
  }
}
for (let i = 0; i < N; i++) {
  let newS = S / data[i][0]; // S에서 요소 제거 (곱셈이므로 나눔)

  if (newS >= 1) {
    // S가 최소 1 이상 유지
    let dif = Math.abs(newS - bestB);
    if (dif < mindif) {
      mindif = dif;
      bestS = newS;
    }
  }
}
console.log(mindif);
