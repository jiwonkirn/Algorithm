// 줄 서는 방법
/*
n명의 사람이 일렬로 줄을 서고 있습니다. n명의 사람들에게는 각각 1번부터 n번까지 번호가 매겨져 있습니다. n명이 사람을 줄을 서는 방법은 여러가지 방법이 있습니다. 예를 들어서 3명의 사람이 있다면 다음과 같이 6개의 방법이 있습니다.

- [1, 2, 3]
- [1, 3, 2]
- [2, 1, 3]
- [2, 3, 1]
- [3, 1, 2]
- [3, 2, 1]

사람의 수 n과, 자연수 k가 주어질 때, 사람을 나열 하는 방법을 사전 순으로 나열 했을 때, k번째 방법을 return하는 solution 함수를 완성해주세요.
*/
function solution(n, k) {
  const arr = makeArr(n);
  const result = [];
  let order = k - 1;
  for (let i = n - 1; i >= 0; i--) {
    const divided = Math.floor(order / factorial(i) || 0);
    const rest = order % factorial(i);
    result.push(arr[divided]);
    arr.splice(divided, 1);
    order = rest;
  }
  return result;
}

function makeArr(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// second
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));

const makeArr = (end, start = 1, arr = []) =>
  start > end ? arr : makeArr(end, start + 1, arr.concat([start]));

function solution(n, k) {
  const arr = makeArr(n);
  const result = [];
  let order = k - 1;
  for (let i = n - 1; i >= 0; i--) {
    const divided = Math.floor(order / factorial(i) || 0);
    const rest = order % factorial(i);
    result.push(arr[divided]);
    arr.splice(divided, 1);
    order = rest;
  }
  return result;
}
