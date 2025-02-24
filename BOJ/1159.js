const fs = require("fs");
const input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

function solution() {
  let firstLetterCount = {}; // 첫 글자의 빈도수를 저장할 객체

  // 첫 글자 개수 세기
  for (let i = 0; i < input.length; i++) {
    let fl = input[i][0]; // 첫 글자 추출
    firstLetterCount[fl] = (firstLetterCount[fl] || 0) + 1;
  }

  // 5번 이상 나온 알파벳 찾기
  let result = Object.keys(firstLetterCount)
    .filter((letter) => firstLetterCount[letter] >= 5)
    .sort(); // 알파벳순 정렬

  // 결과 출력
  if (result.length > 0) {
    console.log(result.join("")); // 알파벳을 붙여서 출력
  } else {
    console.log("PREDAJA");
  }
}

solution();
