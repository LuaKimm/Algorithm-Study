const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

console.log(solution(A, B));

function solution(A, B) {
  return (A + B) * (A - B);
}
