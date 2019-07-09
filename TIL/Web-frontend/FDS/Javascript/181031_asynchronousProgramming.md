# 181031 TIL

## 비동기 프로그래밍(Asynchronous Programming)

### Motivation - 타이머 API

웹 브라우저에는 한번에 실행되는 것이 아니라 특정 시간이 지나서 실행시키거나 주기적으로 실행시키는 함수가 내장되어 있다.

```js
setTimeout(() => {
  console.log('setTimeout이 실행된 지 2초가 지났습니다.');
}, 2000);

setInterval(() => {
  console.log('3초마다 출력됩니다.');
}, 3000);
```

setTimeout과 setInterval은 각각 **타이머 식별자**를 반환한다.  이 식별자를 가지고 실행 중인 타이머를 취소할 수 있다.

```js
const timeoutId = setTimeout(() => {
  console.log('setTimeout이 실행된 지 2초가 지났습니다.');
}, 2000);

const intervalId = setInterval(() => {
  console.log('3초마다 출력됩니다.');
}, 3000);

clearTimeout(timeoutId);
clearInterval(intervalId);

// 아무것도 출력되지 않는다.
```

하지만 setTimeout과 setInterval은 **정확한 지연시간을 보장해 주지 않는다.** 때문에 시간에 예민한 프로그램을 만들 때는 javascript를 사용하면 안된다.

```js
const start = new Date();

setTimeout(() => {
  console.log(new Date() - start);
}, 100);

// 실제 지연시간과 약간의 ms 차이가 존재한다.
```

같은 이유로 아래와 같이 동작한다.
```js
setTimeout(() => {
  console.log('hello');
}, 0);

console.log('world');

// 출력 결과:
// world
// hello
```

---

### 브라우저의 javascript 코드 실행 과정

#### 호출 스택 (Call Stack)

호출 스택(call stack)은 스택 형태의 저장소로, JavaScript 엔진은 함수 호출과 관련된 정보를 이 곳에서 관리한다.

```js
function add(x, y) {
  return x + y;
}

function add2(x) {
  return add(x, 2); // `add`를 호출
}

function add2AndPrint(x) {
  const result = add2(x); // `add2`를 호출
  console.log(result); // `console.log`를 호출
}

add2AndPrint(3);//  // `add2AndPrint`를 호출

// 코드 실행 순서
// add2AndPrint => add2 => add1 => add2 => console.log => add2AndPrint
```

호출 스택에 저장되는 각 항목을 **실행 맥락(execution context, EC)**이라고 부른다. 실행 맥락에는 아래와 같은 정보들이 저장된다.

- 함수 내부에서 사용되는 변수
- 스코프 체인
- this가 가리키는 객체

웹 브라우저는 호출 스택에 실행 맥락이 존재하는 동안, 즉 실행 중인 함수가 존재하는 동안에는 먹통이 되어 버린다. 따라서, 브라우저에서 동작하는 JavaScript 코드, 특히 사용자와의 상호작용을 위한 코드를 작성할 때에는 코드의 실행 시간이 얼마나 될지를 항상 염두에 두어야 한다.

> 브라우저는 대개 60fps로 동작하기 때문에, 대략 16ms 안에 코드의 실행을 완료하지 못하면 브라우저의 애니메이션이 뚝뚝 끊기는 현상이 나타납니다. 이는 사용자 경험에 악영향을 미칠 수 있다.

```js
// 특정 시간동안 계속 루프를 도는 코드
function sleep(milliseconds) {
  const start = Date.now();
  while ((Date.now() - start) < milliseconds);
}

sleep(5000);
// 5초 동안 while 루프가 실행되므로, 호출 스택이 비워지지 않고 브라우저는 먹통이 된다.
```

---

#### 작업 큐 (Task Queue)

모든 작업은 16ms 안에 처리할 수 없기 때문에 **앞선 이벤트가 일어날 때 까지 기다리거나 큰 데이터에 대한 계산이 완료될 때까지 기다리는 데 시간이 오래걸린다.** (호출 스택이 비워져야 브라우저는 화면을 새로 그릴 수 있다.) 그러므로 다음과 같이 일을 처리할 수 있다.

1. 기다려야 하는 일을 Js엔진에서 직접 처리하는 것이 아니라 API를 통해 브라우저에 위임한다. 이 때, 일이 끝나면 실행시킬 콜백을 같이 등록한다.
2. 위임된 일이 끝나면, 그 결과와 콜백을 작업 큐(task queue)에 추가한다.
3. 브라우저는 호출 스택이 비워질 때마다 작업 큐에서 가장 오래된 작업을 꺼내와서 해당 작업에 대한 (결과를 포함한)콜백을 실행시킨다.

브라우저는 이 과정을 끊임없이 반복하는데 이를 **이벤트 루프(event loop)**라고 부른다.

> 어떤 사이트에서 자료를 받거나(통신), 방대한 계산은 브라우저가 담당한다. 브라우저는 자료를 받거나 계산을 한뒤 콜백과 함께 작업큐에 넘긴다. 호출스택에 실행맥락이 없을 경우(비워질 경우)에 작업큐에 있는 콜백을 실행시킨다.

> `requestAnimationFrame` 함수는 16ms단위 이 후에 작업을 실행시켜달라는 함수이다.

자바스크립트로 코드를 작성할 때에는, 호출 스택과 작업 큐의 성질을 반드시 염두에 두어야 한다.

- 각 작업은 작업 큐(task queue)에 쌓인 순서대로 실행된다.
- 이미 작업큐에 작업이 쌓여있다면, 뒤늦게 추가된 작업은 앞서 추가된 작업이 모두 실행된 다음에, 즉 호출스택이 비워진 다음에 실행된다.
- 호출 스택이 비워지지 않는다면 작업 큐(task queue)에 쌓여있는 작업을 처리할 수 없다.
- **각 작업 사이에 브라우저는 화면을 새로 그릴 수 있다.** 호출 스택이 비워지지 않는다면 화면을 새로 그릴 수 없다.

```js
setTimeout(() => {
  console.log('hello1');
}, 0); // 브라우저에 콜백과 함께 위임한 뒤, 작업 큐에 콜백이 첫번쨔로 추가됨 

setTimeout(() => {
  console.log('hello2');
}, 1); // 브라우저에 콜백과 함께 위임한 뒤, 작업 큐에 콜백이 두번쨔로 추가됨

console.log('world'); // 위임한 뒤 호출 스택에서 실행되고 있는 실행 맥락(EC)
// world => hello1 => hello2
```

---

### 비동기 프로그래밍 (Asyncronous Programming)

완료되기를 기다리지 않고 다음 코드를 실행해 나가는 프로그래밍 방식을 일러 **비동기 프로그래밍(asynchronous programming)**이라고 한다. 반대로 어떤 일이 완료될 때까지 코드의 실행을 멈추고 기다리는 프로그래밍 방식을 **동기식 프로그래밍(synchronous programming)**이라고 부른다.

---

#### 콜백(Callback)

콜백은 다른 함수의 인수로 넘기는 함수를 말하는데, 이 콜백을 가지고 비동기 프로그래밍을 할 수 있다.

- 콜백은 동기식으로 호출될 수도 있고, 비동기식으로 호출될 수도 있다.
- 복잡한 데이터흐름을 컨트롤하기가 어렵다.(코드가 길어진다.)

---

#### Promise

ES2015 표준

Promise는 통이고 비어있다가 비동기 작업이 끝나면 성공이든 실패든 결과값이 담긴다.
