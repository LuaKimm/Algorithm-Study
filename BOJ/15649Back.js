function solution(M, N) {
  let sequence = [];
  let used = new Array(N + 1).fill(false);
  let results = []; // 결과 저장 배열

  function backtrack(depth) {
    if (depth == M) {
      results.push(sequence.join(" ")); // 결과 저장
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!used[i]) {
        used[i] = true;
        sequence.push(i);
        backtrack(depth + 1);
        sequence.pop();
        used[i] = false;
      }
    }
  }

  backtrack(0);
  return results; // 결과 배열 반환
}

console.log(solution(1, 3).join("\n")); // 결과를 출력
