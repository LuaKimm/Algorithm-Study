const fs = require("fs");

try {
  const input = fs.readFileSync("input2.txt").toString().trim().split(" ");

  if (input.length !== 2) {
    throw new Error("입력값은 두 개의 숫자여야 합니다.");
  }

  function solution(a, b) {
    let result = BigInt(a) * BigInt(b);
    return String(result);
  }

  console.log(solution(input[0], input[1]));
} catch (error) {
  console.error("오류 발생:", error.message);
}
