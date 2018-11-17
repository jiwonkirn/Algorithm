# 프로그래머스 코딩 테스트

## LEVEL01 -2

### 자릿수 더하기

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항

- N의 범위 : 100,000,000 이하의 자연수

```js
function solution(input) {
    return parseInt([...input.toString()]
                    .reduce((acc, item) => parseInt(acc) + parseInt(item)))
}
```

---

### 정수 내림차순으로 배치하기

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건

- n은 1이상 8000000000 이하인 자연수입니다.

```js
function solution(n) {
    return parseInt(n.toString().split('').sort((x, y) => y - x).join(''))
}
```

---

### 정수 제곱근 판별

임의의 정수 n에 대해, n이 어떤 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항

- n은 1이상, 50000000000000 이하인 정수입니다.

```js
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1)**2 : -1
}
```

---

### 제일 작은 수 제거하기

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건

- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

```js
function solution(arr) {
    if (arr.length > 1) {
     const arr2 = arr.slice()
     const num = arr.indexOf(arr2.sort((x, y) => x - y)[0])
     arr.splice(num, 1)
     return arr   
    }
    return [-1]
}
```

```js
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
```