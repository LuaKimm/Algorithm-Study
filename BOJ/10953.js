//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const [n, input] = fs.readFileSync("input.txt").toString().trim().split("\n");
const inputArr = input.trim().split(" ");
console.log(inputArr);

for (let i = 1; i < inputArr.length; i++) {
  const sum = inputArr[i].reduce((a, b) => a + b, 0);
}
