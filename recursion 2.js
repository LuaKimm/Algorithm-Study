//재귀 함수 사용한 합계 계산 함수
function sum1(n) {
  const N = 10;
  if (n === N) return n;
}

//메인코드 실행
(function main() {
  const N = 10;
  let sum = 0;

  //반복문을 사용한 합계 계산 (Bottom-up방식)
  for (let i = 1; i <= N; i++) {
    sum += i;
  }

  sum = 0;

  //반복문을 사용한 역방향 합계 계산
  for (let i = N; i > 0; i--) {
    sum += i;
  }
  console.log(sum);
})();
