/*set() 집합 생성하는 자바스크립트 객체
중복값을 허용하지 않으므로 문제에서 요구하는 중복 문제 한번에 해결가능
스프레드 연산자를 통해 집합 다시 배열로 변환
자바스크립트에 내장된 기능을 통해 해결할 수있는 문제는 기능을 이용하자..
(성능 개선을 위해..)
Set() 알고리즘으로 데이터를 저장하므로 시간 복잡도 O(N) 보장
*/

function solution(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr;
}

console.log();
