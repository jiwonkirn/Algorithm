// first try
function solution(n) {
  let count = 0;
  let num;
  for (let i = 1; i <= n / 2; i++) {
    num = n;
    const arr = [];
    for (let j = i; j <= n; j++) {
      num -= j;
      if (num < 0) break;
      if (num === 0) {
        count++;
        break;
      } else arr.push(j);
    }
  }
  return count + 1;
}

// other's try
// 헌데 이 방법은 15 케이스의 경우 7,8의 경우를 찾아내지는 못하는데도 정답은 맞다..? 왜 그럴까...
function solution(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) {
      answer++;
    }
  }
  return answer;
}
