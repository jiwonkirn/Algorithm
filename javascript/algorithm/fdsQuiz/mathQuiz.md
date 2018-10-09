### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

```js
function circleArea(input) {
  return (input**2) * Math.PI
}

circleArea(10) // 314.1592653589793
```

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

```js
function minToMax(min, max) {
  // 임의의 배열을 생성한다.
  const arr = []
  // min 이상 max 미만의 수를 배열에 요소추가한다.
  for (let i = min; i < max; i++) {
    arr.push(i)
  }
  // 배열의 랜덤인덱스를 반환한다.
  return arr[Math.floor(Math.random() * arr.length)]
}

minToMax(2,8)
```

### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```

```js
function ceilBy5(input) {
  return input + (input % 5 !== 0 ? 5 - (input % 5) : 0)
}

ceilBy5(30); //-> 30
ceilBy5(32); //-> 35
ceilBy5(37); //-> 40
ceilBy5(40); //-> 40
```

### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.
```js
function mix(arr) {
  // 받환받을 배열을 선언한다.
  const result = []
  // while문을 작성 해서 arr의 길이와 result의 길이가 같아질 때 까지 반복시킨다.
  while (result.length !== arr.length) {
    // 랜덤메소드를 이용해 result에 없는 요소만 요소추가한다.
    let ran = Math.floor(Math.random() * arr.length)
    if(result.includes(arr[ran]) === false ) {
      result.push(arr[ran])
    }
  }
  // result를 반환한다.
  return result
}

mix([1,2,3,4,5])
```

### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.

```js
function htmlHexCode() {
  const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
  const result = []
  for (let i = 0; i <= 5; i++) {
    let ran = Math.floor(Math.random()*16)
    console.log(ran)
    result.push(hex[ran]);
  }
  return '#' + result.join('')
}

htmlHexCode()
```

### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.

```js
function str(num) {
const result = []
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  for (let i = 0; i < num; i++) {
    let ran = Math.floor(Math.random() * arr.length)
    result.push(arr[ran])
  }
return result.join('')
}

str(9)
```

### 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.

```js
function stdDev(arr){
  // arr의 평균 구하기
  const sum = arr.reduce((acc, item) => acc + item, 0) //15
  const mean = sum / arr.length // 3
  // 각 요소에 대한 편차 구하기 (편차 = 값 - 평균)
  const dev = arr.map(item => item - mean) // [-2, -1, 0, 1, 2]
  // 각 요소에 대해 제곱하기
  const square = dev.map(item => item ** 2) // [4, 1, 0, 1, 4]
  // 위 제곱한 배열의 평균 구하기(분산)
  const vv = square.reduce((acc, item) => acc + item, 0) / 5 // 2
  // 루트 씌우기
  return Math.sqrt(vv)
}

stdDev([1,2,3,4,5]) // 1.4142135623730951
```