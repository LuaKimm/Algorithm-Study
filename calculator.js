const fs = require("fs");
const path = require("path");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");

let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map(Number);

function solution(A, B) {
  const A = input[0];
  const B = input[1];
}
