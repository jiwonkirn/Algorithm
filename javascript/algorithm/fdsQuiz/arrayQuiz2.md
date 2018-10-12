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

reduce 중첩 (개인적인 시도)

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

concat 메소드 이용하기 (강사님 방법)

```js
function flatten(arr) {
  // 누적값: 지금까지 본 배열이 다 이어붙여진 새 배열
  return arr.reduce((acc, innerArr) => acc.concat(innerArr) , [])
}

flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10, 11, 12]
])
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
function bingo(arr) {
  // 가로
  for (let i = 0; i < 3; i++) {
    let checked = true
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === 0) {
        checked = false
      }
    }
    if (checked === true) {
      return true
    }
  }

  // 가로 2번째 방법
  const horiz = arr.some(
    innerArr => innerArr.every(x => x === 1)
  )

  if (horiz) {
    return true
  }

  // 세로
  for (let i = 0; i < 3; i++) {
    let checked = true
    for (let j = 0; j < 3; j++) {
      if (arr[j][i] === 0) {
        checked = false
      }
    }
    if (checked === true) {
      return true
    }
  }

  // 세로 2번째 방법

  // 대각선
  {
    let checked = true
    for (let i = 0; i < 3; i++) {
      if (arr[i][i] === 0) {
        checked = false
      }
    }
    if (checked === true) {
      return true
    }
  }

  // 역대각선
  {
    let checked = true
    for (let i = 0; i < 3; i++) {
      if (arr[i][2-i] === 0) {
        checked = false
      }
    }
    if (checked === true) {
      return true
    }
  }

  return false

}


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
  [1, 0, 1],
  [0, 1, 1],
  [1, 0, 0]
]) // -> true
```

---

문제 6. (9 * 9) 오목 판이 배열에 저장되어 있습니다. 흑이 이긴 경우 1, 백이 이긴 경우 2, 아무도 이기지 않은 경우 0을 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 흑은 1, 백은 2로 표현합니다.)

예:

```js
omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 1, 0, 0, 0, 2, 0, 0,],
  [0, 0, 0, 1, 0, 0, 2, 0, 0,],
  [0, 0, 0, 0, 1, 0, 2, 0, 0,],
  [0, 0, 0, 0, 0, 1, 2, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 0

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 1, 0, 0, 0, 2, 0, 0,],
  [0, 0, 0, 1, 0, 0, 2, 0, 0,],
  [0, 0, 0, 0, 1, 0, 2, 0, 0,],
  [0, 0, 0, 0, 0, 1, 2, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 1

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 1, 0, 0, 0, 2, 0, 0,],
  [0, 0, 0, 1, 0, 0, 2, 0, 0,],
  [0, 0, 0, 0, 1, 0, 2, 0, 0,],
  [0, 0, 0, 0, 0, 1, 2, 0, 0,],
  [0, 0, 0, 0, 0, 0, 2, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 2
```

```js
function omok(arr) {
  // 가로오목 ====================
  for (let i = 0; i < 9; i++) {
    let memory1 = 0;
    let memory2 = 0;
    for (let j = 0; j < 9; j++) {
      // 흑돌승리
      if (memory1 === 5) {
        return 1
      } else if (arr[i][j] === 1) {
        memory1++
      } else if (arr[i][j] === 0) {
        memory1 = 0
      }
      // 백돌승리
      if (memory2 === 10) {
        return 2
      } else if (arr[i][j] === 2) {
        memory2 += 2
      } else if (arr[i][j] === 0) {
        memory2 = 0
      }
    }
  }

  // 세로오목 ====================
  // 세로오목의 원리는 [모든 바깥 배열 인덱스]의 [안쪽 배열 i번째 인덱스]에서
  // 돌 5개가 연속해서 흑돌 또는 백돌이어야 한다.
  for (let i = 0; i < 9; i++) {
    let memory1 = 0; // 이 메모리값이 5가 되면 흑돌아 이기고
    let memory2 = 0; // 이 메모리값이 10이 되면 백돌이 이긴다.
    for (let j = 0; j < 9; j++) {
      // 흑돌승리
      if (memory1 === 5) { // 흑돌을 연속으로 5개 봤으면 흑돌이 승리한다.
        return 1 // 승리한다면 함수의 결과값 1을 반환한다.
      } else if (arr[j][i] === 1) { // 모든 바깥배열 j번째 인덱스의 안쪽 배열 i번째 인덱스가 1이면
        memory1++ // memory1 에 1씩 더한다.
      } else if (arr[j][i] === 0) { // 만약 바깥배열 j번째 인덱스의 안쪽 배열 i번째 인덱스가 0이면
        memory1 = 0 // memory1은 0으로 초기화한다.
      }
      // 백돌승리
      if (memory2 === 10) { 
        return 2 // 백돌 또한 흑돌의 승리 조건과 같지만 승리할 시 2를 반환한다.
      } else if (arr[j][i] === 2) {
        memory2 += 2
      } else if (arr[j][i] === 0) {
        memory2 = 0
      }
    }
  }

  // 대각선오목 ====================
  // 대각선오목의 원리는 [바깥 배열의 i, i+1, i+2, i+3, i+4 번째 인덱스]가
  // [안쪽 배열의 j, j+1, j+2, j+3, j+4 번째 인덱스]가 모두 흑돌이거나 백돌이어야 한다.
  for (let i = 0; i < 5; i++) {
    let memory1 = 0;
    let memory2 = 0;
    for (let j = 0; j < 5; j++) { // 인덱스 10번까지 순회하면 안된다.
      // 흑돌승리
      if (memory1 === 1) { // 연속되는 것을 한번에 체크하기 때문에 메모리가 한번만 추가돼도 승리한다.
        return 1 
      } else if (
        arr[i][j] === 1 &&
        arr[i+1][j+1] === 1 &&
        arr[i+2][j+2] === 1 &&
        arr[i+3][j+3] === 1 &&
        arr[i+4][j+4] === 1
        ) {
        memory1++ // 상단의 대각선의 오목의 원리를 그대로 적용한다.
      }
      // 백돌승리
      if (memory2 === 2) {
        return 2
      } else if (
        arr[i][j] === 2 &&
        arr[i+1][j+1] === 2 &&
        arr[i+2][j+2] === 2 &&
        arr[i+3][j+3] === 2 &&
        arr[i+4][j+4] === 2
      ) {
        memory2 += 2 // 상단의 대각선의 오목의 원리를 그대로 적용한다.
      }
    }
  }

  // 반대방향 대각선 오목
  // 반대 방향 대각선의 원리는 대각선의 원리와 같으나,
  // 방향이 오른쪽에서 왼쪽으로 흘러가기 때문에 
  // 안쪽 인덱스가 큰 숫자부터 작은 숫자로 흘러가야 한다.
  for (let i = 0; i <= 4; i++) {
    let memory1 = 0;
    let memory2 = 0;
    for (let j = 8; j >= 4; j--) { // 오른쪽에서 왼쪽으로 흘러가야 하기 때문에 j의 값을 끝에서부터 빼나간다.
      // 흑돌승리
      if (memory1 === 1) {
        return 1
      } else if (
        arr[i][j] === 1 &&
        arr[i+1][j-1] === 1 &&
        arr[i+2][j-2] === 1 &&
        arr[i+3][j-3] === 1 &&
        arr[i+4][j-4] === 1
        ) {
        memory1++
      }
      // 백돌승리
      if (memory2 === 2) {
        return 2
      } else if (
        arr[i][j] === 2 &&
        arr[i+1][j-1] === 2 &&
        arr[i+2][j-2] === 2 &&
        arr[i+3][j-3] === 2 &&
        arr[i+4][j-4] === 2
      ) {
        memory2 += 2
      }
    }
  }

  return 0
}


omok([
  [1, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 1, 0, 0, 0, 2, 0, 0,],
  [0, 0, 0, 1, 0, 0, 2, 0, 0,],
  [0, 0, 0, 0, 1, 0, 2, 0, 0,],
  [0, 0, 0, 0, 0, 1, 2, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 1,]
]) // -> 1

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 2,],
  [0, 0, 0, 0, 0, 1, 0, 0, 0,],
  [0, 0, 0, 1, 1, 0, 2, 0, 0,],
  [0, 0, 0, 1, 0, 2, 0, 0, 0,],
  [0, 0, 0, 1, 2, 0, 0, 0, 0,],
  [0, 0, 0, 2, 0, 0, 0, 0, 0,],
  [0, 0, 2, 0, 0, 0, 2, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [2, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 2

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 1
```

강사님의 가로 오목 코드
```js
function omok(arr) {
  for (let i = 0; i < 9; i++) {
    let currentPlayer
    let count
    for (let j = 0; j < 9; j++){
      // 새로운 플레이어를 봤을 때
      if (currentPlayer !== arr[i][j]) {
        currentPlayer = arr[i][j]
        count = 1
      } else {
        count++
      }
      
      // 만약 1이나 2가 5번 연속되어있으면
      if((currentPlayer === 1 || currentPlayer === 2) && count === 5) {
        return currentPlayer
      }
    }
  }
}

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 1, 1, 1, 1, 1, 2, 0, 0,],
  [0, 0, 0, 1, 0, 0, 2, 0, 0,],
  [0, 0, 0, 0, 1, 0, 2, 0, 0,],
  [0, 0, 0, 0, 0, 1, 2, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 2
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