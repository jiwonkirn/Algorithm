# 소수 찾기

## 문제 설명

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

### 제한 조건

- n은 2이상 1000000이하의 자연수입니다.

---

## 풀이

### 내 풀이

```js
function solution(n) {
  const arr = [2];
  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;
    const sqrt = Math.sqrt(i); // 하지 않으면 효율성 검사 탈락
    for (const item of arr) {
      if (item > sqrt) {
        break;
      }
      if (i % item === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr.length;
}
```

### 다른 사람 풀이

```js
function solution(n) {
  const primes = [];
  for (let j = 2; j <= n; j++) {
    let isPrime = true;
    const sqrt = Math.sqrt(j);
    console.log(sqrt);
    for (let i = 0; primes[i] <= sqrt; i++) {
      if (j % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(j);
    }
  }
  return primes.length;
}
```
