const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = Number(input[0]);

const inputArr = input.slice(1).map((line) => line.split(",").map(Number));

for (let i = 0; i < inputArr.length; i++) {
  const sum = inputArr[i].reduce((a, b) => a + b, 0);
  console.log(sum);
}
