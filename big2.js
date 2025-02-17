function solution(num) {
  let remainder = 0n; // BigInt로 초기화
  const divisor = 20000303n; // 나눌 수를 BigInt로 선언

  for (let i = 0; i < num.length; i++) {
    remainder = (remainder * 10n + BigInt(num[i])) % divisor;
  }

  return remainder.toString();
}

// 함수 호출 및 결과 출력
const favoriteNumber =
  "20000303200003032000030320000303200003032000030320000303200003032000030320000303";
console.log(solution(favoriteNumber));
