//N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
//출력형식과 같게 N*1부터 N*9까지 출력한다.
//출력형식과 같게 N*1부터 N*9까지 출력한다.

const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let a = input;
console.log(a);

for (let i = 0; i < input.length; i++) {
  for (let j = 1; j < 10; j++) {
    let mul = input * j;
    console.log(`${input} * ${j} = ${mul}`);
  }
}
