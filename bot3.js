const fs = require("fs");
const input = fs.readFileSync("obj/input.txt").toString().trim();

function solution(a) {
  let result = 0;

  for (let i = 0; i < a.length + 5; i++) {
    let b = Number(a.slice(0, 15));
    result = b % 20000303;
    a = result !== 0 ? result + a.slice(15) : a.slice(15);
  }

  return result;
}
console.log(solution(input));
