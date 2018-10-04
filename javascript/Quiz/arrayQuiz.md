### 문제 1

두 정수 `start`, `end`를 입력받아, `start`부터 `end`까지의 모든 정수를 배열로 반환하는 함수를 작성하세요.

예:
```
range(3, 6); -> [3, 4, 5, 6]
```

```js
function range(start, end) {
  const arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

range(2,5)
```

### 문제 2

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.

```js
// reduce
function sum(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

sum([1,2,3,6]); // 12
```

```js
// 루프
function sum(arr) {
  // 나중에 결과로 반환받을 초깃값이 0인 변수를 선언한다.
  let result = 0;
  // 회문을 돌아 각 인덱스값을 result에 하나씩 더해준다.
  for (let item of arr) {
    result += item;
  }
  // 배열 값이 다 더해진 결과값을 반환한다.
  return result
}

sum([1,2,3,6]);
```

### 문제 3

배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```js
// 배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

function notFalsy(arr) {
  // 반환받을 새 배열을 선언한다.
  const result = []
  // 배열 안에 인는 요소를 확인했을 때, turthy는 푸쉬하고 falsy는 푸쉬하지 않는다.
  for (let item of arr) {
    if(!!item) {
      result.push(item)
    }
  }
  return result
}

notFalsy([NaN, 'hi', 0, 12, '']); // [ 'hi', 12 ]
```

### 문제 4

배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```js
function notEqual(arr) {
  // 반환받을 배열 resultfmf 빈 배열로 선언한다.
  const result = []
  // 회문중에 result를 확인해서 같은 요소를 포함하고 있으면 푸쉬하지 않고 아니면 푸쉬한다.
  for (let item of arr) {
    if (!result.includes(item)) [
      result.push(item)
    ]
  }
  return result
  // result를 반환받는다.
}

notEqual(['apple', 'banana', 1, 2, 3, 'apple', 1, 3])
```

### 문제 5

수 타입의 값으로만 이루어진 두 배열을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- 두 배열의 같은 자리에 있는 요소를 더한 결과가 새 배열의 요소가 됩니다.
- 만약 입력받은 두 배열의 길이가 갖지 않다면, 긴 배열에 있는 요소를 새 배열의 같은 위치에 포함시키세요.

예:
```
addArray([1, 2, 3], [4, 5, 6, 7]) -> [5, 7, 9, 7]
```

```js
function addArray(arr1, arr2) {
// 반환받을 빈 배열 선언
const result = []
// arr1이 크다면 같은 인덱스 요소까지는 더해서 푸쉬하고 이 후에는 arr1의 남은자리만 푸쉬한다.
if (arr1 > arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if(i < arr2.length) {
      result.push(arr1[i] + arr2[i])
      } else {
        result.push(arr1[i])
      }
  }
} else {
  // arr2이 크거나 같으면 같은 인덱스 요소까지는 더해서 푸쉬하고 이 후에는 arr2의 남은자리만 푸쉬한다.
  for (let i = 0; i < arr2.length; i++) {
    if(i < arr1.length) {
      result.push(arr1[i] + arr2[i])
      } else {
        result.push(arr2[i])
      }
  }
}
return result
}

addArray([4, 5, 6, 7, 9, 10, 200], [1, 2, 3]) // [ 5, 7, 9, 7, 9, 10, 200 ]
```

```js

```

### 문제 6

배열을 입력받아, 배열의 요소 중 두 개를 선택하는 조합을 모두 포함하는 배열을 작성하세요.

예:
```
combination([1, 2, 3]); -> [[1, 2], [1, 3], [2, 3]]
```

```js
function combination(arr) {
  // 반환받을 배열을 선언한다.
  const result = [];
  // i가 0일때 j는 0+1부터 arr의 요소 갯수 -1 만큼 회문을 돌아서 푸쉬
  // i가 1일때 j는 1+1부터 arr의 요소 갯수 -1 만큼....
  // i가 i일때 j는 i+1부터 arr의 요소 갯수 -1 만큼....
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
    result.push( [arr[i] , arr[j]] )
    }
  }
  // 결과 반환.
  return result
}

combination([1,2,3,4,5]) // [ [ 1, 2 ],[ 1, 3 ],[ 1, 4 ],[ 1, 5 ],[ 2, 3 ],[ 2, 4 ],[ 2, 5 ],[ 3, 4 ],[ 3, 5 ],[ 4, 5 ] ]
```

### 문제 7

'금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.
(단, 동전의 종류가 들어있는 배열에는 큰 동전부터 순서대로 들어있다고 가정합니다.)

예:
```
coins(263, [100, 50, 10, 5, 1]);
// 출력
100
50
10
1
1
1
```

```js
function coins(amount, arr) {
  // 루프중 총액에서 각각의 동전을 뺀 값을 나타내는 변수를 정하며, 초기값은 amount이다.
  let value = amount
  for (let i = 0; i < arr.length; i++) {
    while(true) {
      // 총액 이 arr[i] 보다 작다면 루프를 빠져나간다.
      if (value  < arr[i]) {
        break
      } else {
      // 총액 이 arr[i] 보다 크다면 arr[0]을 출력한 뒤 반복하고, 
        console.log(arr[i]);
        value -= arr[i]
      }
    }
  }
  return `나머지는 ${value}입니다.`
}

coins(263, [100, 50, 10, 5, 1]); //100 100 50 10 1 1 1 => '나머지는 0입니다.'
```

### 문제 8

수 타입의 값만 들어있는 배열을 입력받아, 해당 배열을 오름차순 정렬하는 함수를 작성하세요. (`Array.prototype.sort`를 사용하지 않고 작성해보세요. [선택 정렬](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)을 참고하세요.)

```js
function combination(arr) {
  // 반환받을 배열을 선언한다.
  let result = arr;
  // 모든 자리를 두 자리씩 묶어서 비교하기위해 두개의 루프를 작성한다.
  for (let i = 0; i < arr.length; i++) {
      // 작은 루프 안에서 비교한 값 중에서 최소값을 기억할 변수이다.
      let memory = result[i]
      // 인덱스가 i일때 남은 모든 인덱스를 비교하는 구문이다.
    for (let j = i + 1; j < arr.length; j++){
      // 두 비교 숫자중 작은수가 memory보다 작은수라면 메모리에 그 최소값을 재대입한다.
      if(result[i] < result[j] && result[i] <= memory) {
        memory = result[i]
      } else if (result[j] < result[i] && result[j] <= memory) {
        memory = result[j]
      }
    }
      // 최소값이 있던 인덱스를 자르고 맨 앞자리로 옮긴다.
      result.splice(result.indexOf(memory),1)
      result.unshift(memory)
  }
  // 결과 반환.
  return result
}
  
combination([4,3,1,5,2]) // [ 5, 4, 3, 2, 1 ]
combination([9,3,1,7,0]) // [ 9, 7, 3, 1, 0 ]
```