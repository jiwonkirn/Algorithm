# 하사드의 수

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 n을 입력받아 n이 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

- 제한 조건
  - n은 1 이상, 10000 이하인 정수입니다.

### 내 풀이

```js
function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((acc, item) => {
      return acc + parseInt(item);
    }, 0);
  return x % sum === 0 && true;
}
```

### 다른사람 풀이

```js
function Harshad(n) {
  return !(
    n %
    (n + "").split("").reduce(function(i, sum) {
      return +sum + +i;
    })
  );
}
```
