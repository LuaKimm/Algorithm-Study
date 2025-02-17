const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const mul = input.map((num) => num * num).reduce((a, b) => a + b) % 10;

console.log(mul);
