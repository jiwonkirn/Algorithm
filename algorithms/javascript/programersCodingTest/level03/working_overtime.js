// 야근 지수
/* 
회사원 Demi는 가끔은 야근을 하는데요, 야근을 하면 야근 피로도가 쌓입니다. 야근 피로도는 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값입니다. Demi는 N시간 동안 야근 피로도를 최소화하도록 일할 겁니다.Demi가 1시간 동안 작업량 1만큼을 처리할 수 있다고 할 때, 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값을 리턴하는 함수 solution을 완성해주세요.
*/

// 간결화한 답안
function solution(n, works) {
  let count = 0;
  const arr = works.slice().sort((x, y) => y - x);
  while (1) {
    const first = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (first !== arr[i]) break;
      arr[i] = Math.max(0, arr[i] - 1);
      count++;
      if (count === n) return arr.reduce((a, c) => a + c ** 2, 0);
    }
  }
}

// 첫 답안
function solution(n, works) {
  let count = 0;
  const arr = works.slice().sort((x, y) => y - x);
  while (count < n) {
    for (let i = 0; i < works.length; i++) {
      if (count >= n) break;
      if (arr[i] > (arr[i + 1] || arr[i])) {
        arr[i] -= 1;
        if (arr[i] < 0) return 0;
        count++;
        break;
      }
      if (arr[i] === (arr[i + 1] || arr[i])) {
        arr[i] -= 1;
        count++;
        if (arr[i] < 0) return 0;
        continue;
      }
    }
  }
  return arr.reduce((a, i) => a + i ** 2, 0);
}
