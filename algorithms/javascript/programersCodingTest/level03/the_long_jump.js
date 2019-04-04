// 멀리뛰기
// 피보나치 수열을 사용해야하는 알고리즘 문제 이지만, 단순히 재귀함수를 사용하면 성능상 좋지 않다.
// 메모지에이션을 활용, 결과값을 배열에 쌓아가고 마지막 값을 읽어오는 방식으로 문제를 풀었다.
function solution(n) {
  const arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n - 1];
}