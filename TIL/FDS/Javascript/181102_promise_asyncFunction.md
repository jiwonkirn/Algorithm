# 181102 TIL Promise & 비동기 함수(Async Function)

## Promise

`then`메소드를 쓰면 promise 객체에 값이 채워졌을 떄 인수로 받아 콜백을 넘겨준다.

promise 객체 안에 있는 `promise` 객체의 반환값을 다음 `then` 메소드의 인수로 넘겨줌

`Promise.all(arr)` 은 `promise`로 된 배열을 받고 그 값이 모두 채워졌을 때 그 값으로 된 배열을 다음 작업의 인수로 반환한다.

---

## 비동기 함수 (Async Function)

ES2017

비동기 함수는 항상 Promise 객체를 반환한다. 그러므로 반환값이 promise 객체 안에 있는 promise 객체의 반환값도 다음 then 으로 접근한다.

`await` 은 표현식의 기능을 해서 값으로 반환할 수 있다.

generator로 비동기 함수를 컨트롤하면 프로그래머가 진행을 직접 세밀하게 컨트롤할 수 있다는 장점이 있다.