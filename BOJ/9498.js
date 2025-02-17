//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D,
// 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
//첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let a = input[0];
let score = ["A", "B", "C", "D", "F"];
// console.log(score[0]);

function solution(a) {
  if (a >= 90) {
    return score[0];
  } else if (a >= 80) {
    return score[1];
  } else if (a >= 70) {
    return score[2];
  } else if (a >= 60) {
    return score[3];
  } else {
    return score[4];
  }
}
console.log(solution(a));
