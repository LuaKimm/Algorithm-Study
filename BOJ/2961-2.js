const fs = require("fs");

// 입력 읽기 및 데이터 변환
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift()); // 첫 번째 줄은 재료 개수이므로 제거
const data = input.map((line) => line.split(" ").map(Number)); // 숫자로 변환

// 신맛(S) → 곱하기, 쓴맛(B) → 더하기
let S = data.map((arr) => arr[0]).reduce((acc, cur) => acc * cur, 1);
let B = data.map((arr) => arr[1]).reduce((acc, cur) => acc + cur, 0);

let mindif = Math.abs(S - B);
let bestS = S,
  bestB = B;

// 인덱스 1(쓴맛) 요소 제거하면서 최소 차이 찾기
for (let i = 0; i < N; i++) {
  let newB = B - data[i][1]; // B에서 요소 제거

  if (newB >= 0) {
    let dif = Math.abs(S - newB);
    if (dif < mindif) {
      mindif = dif;
      bestB = newB;
    }
  }
}

// 인덱스 0(신맛) 요소 제거하면서 최소 차이 찾기
for (let i = 0; i < N; i++) {
  if (data[i][0] !== 0) {
    // 0 나누기 방지
    let newS = S / data[i][0];

    if (newS >= 1) {
      let dif = Math.abs(newS - bestB);
      if (dif < mindif) {
        mindif = dif;
        bestS = newS;
      }
    }
  }
}

// 결과 출력
console.log(mindif);
