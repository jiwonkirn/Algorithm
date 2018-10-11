# 181011 TIL 

## 함수형 프로그래밍

### 고차함수 (Higher-order Function)

함수를 인수로 받는 함수 또는 함수를 반환하는 함수를 <b>고차함수</b>라고 한다.

ex) forEach, map, reduce, filter, sort, every, some, find, bind ...

다른 함수의 인수로 넘겨지는 함수를 콜백(callback)이라고 부른다.

```js
arr.reduce((x, y) => x + y, 0) // 안에 인수로 넘겨진 함수는 callback
```

---

#### 클로저 (closer)

바깥 스코프에 있는 변수를 가져다 사용하고 있는 함수와 변수가 저장되는 저장소를 말한다.

```js
// 고차 함수의 인수로 함수를 넘길 때, 해당 함수에서 바깥 스코프에 있는 변수를 사용할 수 있습니다.
const people = [
  {name: '윤아준', age: 19},
  {name: '신하경', age: 20}
]

function peopleOlderThan(people, threshold) {
  return people.filter(person => person.age > threshold);
} // 바깥 스코드에 있는 (매개)변수를 받아서 쓰기 때문에 클로저이다.

peopleOlderThan(people, 19); // [ { name: '신하경', age: 20 } ]
```

```js
function makeAdder(x) {
    return function() {
        return x + y;
    }
}

// x에 2라는 인수를 부여한 함수를 add2에 저장, add2의 저장공간에는 x = 2가 저장돰
const add2 = makeAdder(2)
// add2(y)임을 의미한다. x = 2가 저장되어있기 때문에 2 + 3 = 5 가 반환된다.
console.log(add2(3)) // 5
```

 x의 값(클로저)은 숨겨져있고, 정해진 값을 사용해야 하기 때문에 변경하지 못한다.

 ```js
 function personFactory(initialAge) {
  let age = initialAge;
  return {
    getOlder() {
      age++;
    },
    getAge() {
      return age;
    }
  }
}

//`age`를 직접 변경할 수 있는 방법이 없다.
// 데이터를 숨기고 있기 때문에 나이를 아래로 내리는 등의 방법은 외부에서 하지 못한다.
const person = personFactory(20)
person.getAge() // 20
person.getOlder() // 20++
person.getAge() // 21
 ```

예전에는 클로저를 활용해서 전역변수 생성을 막기도 했는데 지금은 잘 쓰이지 않는다.

```js
(function() {
  let count = 0
  count++
  console.log(count)
})() // 1
```

---

#### 화살표 함수와 고차함수

화살표 함수 문법을 이용해서 고차함수를 만들 수 있다.

```js
const makeAdder = x => y => x + y;

const add2 = makeAdder(2);
add2(3); // 5
```

```js
const makeCounter = (x = 1) => () => x++;
const counter = makeCounter()
console.log(counter()) // 1 // 1을 출력한 뒤에 x = 2가 되어있다.
console.log(counter()) // 2 // 2을 출력한 뒤에 x = 3가 되어있다.
```

---

### 재귀함수 

자기 자신을 호출하는 함수를 말한다.

```js
function func() {
    func()
}
```

---

#### 루프와 재귀함수

문제를 같은 형태의 부분문제로 쪼갤 수 있을 때 재귀함수을 사용한다.

> tip - 재귀함수를 만들 때 생성자에 Rec를 붙여주는 경우가 많다.

```js
function sumByRec(n) {
  if (n === 1) {
    return 1 // 종료조건을 항상 작성해주어야 한다.
  } else {
    return sumByRec(n - 1) + n
    // 함수 호출을 만나면 실행을 멈추고 다시 해당 함수로 가서 실행을 하는 방식으로 루프를 만든다.
    // 처음 : sumByRec(4) //이 전에서 일시정지하고 함수호출// + 5 // + 5는 정지된상태 
    // 두번째 : sumByRec(3) // 정지 // + sumByRec(4) + 5
    // 세번째 : sumByRec(2) // 정지 // + sumByRec(3) + sumByRec(4) + 5
    // 네번째 : sumByRec(1) // 정지 // + sumByRec(2) + sumByRec(3) + sumByRec(4) + 5
    // 다섯번째 : sumByRec(1)를 실행했더는 1을 반환
    // => 1 + sumByRec(2) + sumByRec(3) + sumByRec(4) + 5
    // sumByRec(2)는 sumByRec(1) + 2 이므로 1 + 2 = 3
    // => 3 + sumByRec(3) + sumByRec(4) + 5
    // sumByRec(3)은 sumByRec(2) + 3 이므로 3 + 3 = 6
    // => 6 + sumByRec(4) + 5
    // sumByRec(4)은 sumByRec(3) + 4 이므로 6 + 4 = 10
    // => 10 + 5 === sumByRec(5)
  }
}

sumByRec(5) // 15
```

피보나치 수열을 for 구문으로 아래와 같이 작성했었다.

```js
function fibo(n) {
  // 다음 단계의 수는 이전 두 단계 수의 합
  let x = 0
  let y = 1
  for  (let i = 0; i < n; i++) {
    const sum = x + y
    x = y
    y = sum
  }
  return x
}

fibo(5) // 5
```

피보나치 수열을 재귀함수로 짧게 표현할 수 있다.

```js
function fiboRec(n) {
  let result = 0
  // n === 0 ? 1 : ~ 은 종료조건
  return n === 0 ? 0 : n === 1 ? 1 : fiboRec(n-2) + fiboRec(n-1)
}

fiboRec(5)
```

재귀함수를 사용해서 루프를 만들었을 때 코드를 간결하게 작성할 수 있는 경우가 종종 있으니 알아두도록 한다.

> 강사님 코멘트: 재귀함수는 프론트엔드 개발자가 쓸 일은 잘 없다. (연 1 ~ 2회)

---

#### 분할정복 (Divide and Conquer)

> 강사님 코멘트: 분할정복은 알고리즘이 복잡하기 때문에 추후 학습하도록 하겠습니다.
