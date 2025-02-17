//피보나치 수열
function fib(n) {
  //base case : n이 0또는 1일때 n을 반환
  if (n <= 1) {
    return n;
  } else {
    //recursive case (이전 두 수의 합을 반환)
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(5));
