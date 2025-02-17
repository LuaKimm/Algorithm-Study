// const fs = require("fs");
// const input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = input.reduce((a, b) => a + b, 0); // 9명의 총합

for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - input[i] - input[j] === 100) {
      // ✅ 두 명 제외 후 합이 100인지 확인
      input.splice(j, 1); // 인덱스 j 먼저 제거
      input.splice(i, 1); // 인덱스 i 제거 (index가 변동되었으므로 j를 먼저 삭제)

      console.log(input.sort((a, b) => a - b).join("\n")); // ✅ 오름차순 정렬 후 출력
      process.exit(0); // ✅ 정답 찾으면 종료
    }
  }
}
