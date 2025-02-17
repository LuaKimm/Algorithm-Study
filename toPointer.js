// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let lines = [];

// rl.on("line", (line) => {
//   lines.push(
//     line
//       .trim()
//       .split(" ")
//       .map((e) => Number(e))
//   );
// }).on("close", () => {
//   console.log(solution(lines));
//   process.exit(0);
// });
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const x = Number(input[2]);

// 투 포인터 알고리즘 (합이 x인 쌍의 개수 찾기)
function countSubnumbersSumOf(numbers, x, n) {
  let count = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === x) {
      count++;
      left++;
      right--;
    } else if (sum < x) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}

// 올바른 함수 호출
console.log(countSubnumbersSumOf(numbers, x, n));

//n^2으로 할수 있는 건 n으로 떨어뜨리자...!
