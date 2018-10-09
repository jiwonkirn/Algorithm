문제 1. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (루프를 이용하세요)

예:

```js
max([3, 1, 4, 5, 2]) // -> 5
```

루프를 이용한 방법
```js
function maxNum(arr) {
  // 배열 0번째 인덱스 요소와와 나머지 인덱스 요소를 비교해서 
    let memory = arr[0]
    for (let i = 1; i < arr.length; i++) {
    // 가장 큰 요소를 기억하고
      if (memory < arr[i]) {
        memory = arr[i]
      }
    }
  // 가장 큰 요소를 출력한다.
  return memory
}

maxNum([3, 1, 4, 5, 2]) //  5
```

sort 메소드를 이용한 방법
```js
function maxNum(arr) {
  // 배열을 내림차순한다.
  arr.sort((x, y) => y - x);
  // 가장 앞에 있는 인덱스를 출력한다.
  return arr[0]
}

maxNum([3, 1, 4, 5, 2]) //  5
```

---

문제 2. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

if문
```js
function maxNum(arr) {
  // 누적값(기억장치)는 지금까지 봤던 숫자 중에 제일 큰수를 기억한다.
  return arr.reduce((acc, item) => {
  // 안에 들어있는 함수 값이 다음 단계의 누적값(기억값)이 된다.
  if(item > acc) {
    return item
  } else {
    return acc
  }})
}

maxNum([1,5,3,7,9,3,4,10,2]) // 10
```

삼항연산자
```js
function maxNum(arr) {
  // return arr.reduce((acc, item) => acc > item ? acc : item) // 이렇게 가능.. 하지만 초기 누적값을 누락하면 좋지는 않다.
  // return arr.reduce((acc, item) => acc > item ? acc : item, arr[0]) // []을 반환받으면 undefined를 반환하기 때문에 좋지않다.
  return arr.reduce((acc, item) => acc > item ? acc : item, -Infinity) // -Infinity를 사용하는 것을 추천한다. Math메소드를 사용할 때도 인수를 비우면 -Infinity를 반환한다.
}

maxNum([1,5,3,7,9,3,4,10,2]) // 10
```

---

문제 3. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (루프를 이용하세요)

예:

```js
flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

루프
```js
function flatten(arr) {
  // 반환받을 새 배열을 선언한다.
  const result = [];
  // 배열의 모든 요소를 확인하는 루프를 만든다.
  for (let item of arr) {
    for (let i = 0; i < item.length; i++) {
      // 반환받을 배열에 요소추가한다.
      result.push(item[i])
      console.log(result)
    }
  }
  // 요소추가가 완료된 배열을 반환한다.
  return result
}

flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10]
]) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

문제 4. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

```js
function flatten(arr) {
  // 반환받을 빈 배열을 생성한다.
  let result = []
  // 배열의 인덱스를 확인한다.
  arr.reduce ((outAcc, item) =>
  // 배열의 인덱스의 인덱스를 각각 확인해서 reult에 요소추가한다. 
  item.reduce((acc, itemOfItem) => 
  // acc에 누적되는 값은 없고, 고려하지 않는다.
    result.push(itemOfItem),[] )
  ,[])
  // 결과를 반환한다.
    return result
}

flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10, 11, 12]
]) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

---

문제 5. (3 * 3) 빙고 판이 배열에 저장되어 있습니다. 빙고인 경우 `true`, 아니면 `false`를 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 칸이 채워져 있는 경우는 1로 표현합니다.)

예:

```js
bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> false

bingo([
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> true

bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 1, 1]
]) // -> true
```

```js
// 가로 빙고 => 배열의 [i]번째의 모든 요소가 1이면 빙고
// 세로 빙고 => 모든 배열 요소의 같은 [i]번째 인덱스가 1이어야 빙고
// 대각선 빙고 => [0][0], [1][1], [2][2]가 1이어야 빙고
// 역대각선 빙고 => [0][2], [1][1], [2][0]이 1이어야 빙고
function bingo(arr) {
  for (let i = 0; i < 3; i++) {
    if(arr[i][0] === 1 && arr[i][1] === 1 && arr[i][2] === 1) {
      return true
    } else if (arr[0][i] === 1 && arr[1][i] === 1 && arr[2][i] === 1) {
      return true
    } else if (arr[0][0] === 1 && arr[1][1] === 1 && arr[2][2] === 1) {
      return true
    } else if (arr[2][0] === 1 && arr[1][1] === 1 && arr[0][2] === 1) {
      return true 
    } 
    }
    return false
  }
```

---

문제 6. (9 * 9) 오목 판이 배열에 저장되어 있습니다. 흑이 이긴 경우 1, 백이 이긴 경우 2, 아무도 이기지 않은 경우 0을 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 흑은 1, 백은 2로 표현합니다.)

예:

```js
omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 1, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 1, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 1, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 1, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 0

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 1, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 1, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 1, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 1, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 1, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 1

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 1, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 1, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 1, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 1, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 2
```

```js
// 오목은 가로로 연속해서 5개가 있거나
// 세로로 연속해서 5개가 있거나
// 대각선으로 연속해서 5개가 있어야 한다.
// 모든 조건을 만족하지 않으면 0
// 조건이 1이 연속하면 1
// 조건이 2가 연속하면 2 를 반환한다.

function omok(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].lastIndexOf(1) - arr[i].indexOf(1) + 1 === 5) {
      return 1
    } else if (arr[i].lastIndexOf(2) - arr[i].indexOf(2) + 1 === 5) {
      return 2
    }
  }

  for (let i = 0; i < arr.length - 5; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1 && arr[i+1][j] === 1 && arr[i+2][j] === 1 && arr[i+3][j] === 1 && arr[i+4][j] === 1) {
        return 1
      } else if (arr[i][j] === 2 && arr[i+1][j] === 2 && arr[i+2][j] === 2 && arr[i+3][j] === 2 && arr[i+4][j] === 2){
        return 2
      }
    }
  }

  for (let i = 0; i < arr.length - 5; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1 && arr[i-1][j-1] === 1 && arr[i-2][j-2] === 1 && arr[i-3][j-3] === 1 && arr[i-4][j-4] === 1) {
        return 1
      } else if (arr[i][j] === 2 && arr[i+1][j+1] === 2 && arr[i+2][j+2] === 2 && arr[i+3][j+3] === 2 && arr[i+4][j+4] === 2){
        return 2
      }
    }
  }

  for (let i = 0; i < arr.length - 5; i++) {
    for (let j = 0; j < arr[i].length - 5; j++) {
      if (arr[i][j] === 1 && arr[i+1][j+1] === 1 && arr[i+2][j+2] === 1 && arr[i+3][j+3] === 1 && arr[i+4][j+4] === 1) {
        return 1
      } else if (arr[i][j] === 2 && arr[i+1][j+1] === 2 && arr[i+2][j+2] === 2 && arr[i+3][j+3] === 2 && arr[i+4][j+4] === 2){
        return 2
      }
    }
  }
  
  return 0
}
```

---

문제 7. 배열을 입력받아 있는 요소 중 아무거나 하나를 골라서 반환하는 함수를 작성하세요.

예:

```js
randomItem([1, 2, 3, 4, 5]) // 1, 2, 3, 4, 5 중 아무거나 반환
```

```js
// 반환할 배열의 인덱스를 랜덤으로 설정한다.

function randomItem(arr) {
  return arr[Math.floor(Math.random() * 5)]
}

randomItem([1, 3, 5, 7, 9])
```

```js

```

---

문제 8. 배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요. (단, 원본 배열이 변경되어서는 안 됩니다.)

예:

```js
shuffle([1, 2, 3, 4, 5]) // [3, 1, 4, 5, 2] 와 같이 순서가 뒤섞인 새 배열 반환
```

```js
function shuffle(arr) {
  let result = []
  while (result.length !== arr.length) {
    let random = arr[Math.floor(Math.random() * 5)]
    if (!(result.includes(random))) {
      result.push(random)
    }
  }
  return result
}

shuffle([1, 2, 3, 4, 5])
```