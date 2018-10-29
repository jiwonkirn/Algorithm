# 181029 TIL

## Iterable

반복 가능한 객체는 Symbol.iterator 메소드가 내장되어있다. 이를 반복 가능한 객체(iterable object) 혹은 줄여서 iterable이라 부르고, 해당 객체는 iterable protocol을 만족한다고 말한다.
```js
const str = 'hello';
str[Symbol.iterator]; // [Function]
```

내장된 생성자 중 iterable 객체를 만들어내는 생성자에는 아래와 같은 것들이 있다.

- String
- Array
- TypedArray
- Map
- Set

```js
const s = new Set([1,2,3])
const [c1] = s
c1 // 1
```

어떤 객체가 Iterable이라면, 그 객체에 대해서 아래의 기능들을 사용할 수 있다.

- for...of 루프
- spread 연산자 (...)
- 분해대입(destructuring assignment)
- 기타 iterable을 인수로 받는 함수

---

### Generator 함수

Generator 함수를 호출하면 환값이 없어도 iterable 객체가 반환된다.

```js
// generator 함수 선언하기
function* gen1() {
  // ...
}

// 표현식으로 사용하기
const gen2 = function* () {
  // ...
}

// 메소드 문법으로 사용하기
const obj = {
  * gen3() {
    // ...
  }
}
```

`yield*`표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있다.

```js
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

function* numberGen2() {
  yield* numberGen();
  yield* numberGen();
}

// 1, 2, 3, 1, 2, 3이 순서대로 출력
for (let n of numberGen2()) {
  console.log(n);
}
```

```js
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

// 1, 2, 3이 순서대로 출력
for (let n of numberGen()) {
  console.log(n);
}
```

generator 함수는 아래와 같은 장점이 있다.

- 코드에 간결성을 주거나, 루프를 값으로 줄 때나, 무한의 루프를 사용해야 할 때 유용하다.
- 루프를 값으로 만드는 것은 조합성을 향상시키는데 좋다.
- generator로 부터 생성된 iterator는 한번만 사용 될 수 있다.

다음과 같이 일반적인 함수에서 할 수 있는 것들을 generator함수에서 더 효율적으로 처리할 수 있는 방법도 있다.

```js
// 등차수열 생성하기
function* range(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// 피보나치 수열 생성하기
function* fibonacci(count = Infinity) {
  let x = 1;
  let y = 1;
  for (let i = 0; i < count; i++) {
    yield x;
    [x, y] = [y, x + y];
  }
}
```

generator 함수는 일시정지를 할 수 있는 함수이다. 아래처럼 `yield`를 만나면 멈춘다.

```js
function* myGem() {
  console.log('hello1')
  yield 1
  console.log('hello2')
  yield 2
  console.log('bye')
}

const iter = myGem()

iter() // 출력: hello1, return: { value: 1, done: false } 
iter() // 출력: hello2, return: { value: 1, done: false }
iter() // 출력: bye, return: { value: undefined, done: done }
```