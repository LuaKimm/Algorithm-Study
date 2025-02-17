const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("");

const alpha = "abcdefghijklmnopqrstuvwxyz".split("");

let count = new Array(26).fill(0);

input.forEach((i) => {
  let index = alpha.indexOf(i); // 대문자 처리
  if (index !== -1) count[index]++; // 알파벳이면 카운트 증가
});

console.log(count.join(" "));
