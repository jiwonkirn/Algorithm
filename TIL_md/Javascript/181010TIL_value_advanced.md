# 181010 TIL 값 심화

## 값 심화

### `const`, `let`, `var`

`const`, `let`, `var`는 아래와 같은 차이를 가지고 있다.

| | const | let | var |
|-|-------|-----|-----|
|스코프|블록스코프|블록스코프|함수스코프|
|재대입|X|O|O|
|재선언|X|X|O|
|호이스팅|X|X|O|
|사용권장|1순위|2순위|3순위|

블록스코프의 성격을 이용해 다음과 같이 반복되는 코드들을 같은 변수에 담아 작성할 수 있다.
```js
{
let i = 0
console.log(i, 'a')
}
{
let i = 0
console.log(i, 'b')
}
{
let i = 0
console.log(i, 'c')
}
{
let i = 0
console.log(i, 'd')
}
```

---

#### `var`의 호이스팅(hosting)

var로 선언된 변수는 내부적으로 함수 혹은 파일의 맨 위로 끌어올려지는 과정을 거치기 때문에, 같은 스코프 안에만 있다면 변수가 선언되기 전에도 해당 변수에 접근할 수 있다. 이를 호이스팅이라고 한다.

let의 경우 에러를 발생시킨다.
```js
console.log(letFoo) // Uncaught ReferenceError: letFoo is not defined
let letFoo = 1
```

var의 경우 에러는 나타나지 않는다.
```js
console.log(varFoo) // undefined
var varFoo = 2
```

var는 아래와 같다고 볼 수 있다.
```js
var varFoo
console.log(varFoo)
varFoo = 2
```

---

#### `var`의 스코프

`var`는 함수 스코프를 가지지만 블록 스코프를 가지지 않는다. 때문에 블록스코프에서 `var`를 이용해 변수르 선언하면 의도하지 않은 동작이 나타날 수 있다.

```js
for (var i = 0; i < 3; i++) {
  console.log('outer');
  // 위아래 두 `i` 변수는 같은 함수 스코프에서 정의된 같은 변수입니다.
  // 바깥쪽 루프를 한 번 도는 동안, 안쪽 루프를 도느라 이미 `i`의 값이 3이 되어버렸다.
  for (var i = 0; i < 3; i++) {
    console.log('inner');
  }
}
// 결과적으로 한바퀴만 돈다.
```

---

### 전역 변수

전역 스코프는 가장 상위의 스코프이다. 브라우저가 이 전역 스코프에 해당되며, 전역스코프에서 선언된 변수를 전역 변수라고 한다. 

하지만 전역 변수 사용은 다음과 같은 이유로 지양된다.

- 코드가 길어짐에 따라 어떤 변수가 어디에서 선언될지 모른다.
- 여러 파일을 연결하게 될텐데 이 때 많은 부분이 결합(coupling)된다. (a파일을 수정했더니 b파일이 문제를 일으킴)
- 현재 코드를 작성하는 시점에서 선언된 변수가 멀리 있으면 확인하기 힘들다.

또한 아래와 같이 `const`, `let`, `var`를 사용하지 않고 변수를 선언할 경우 전역 스코프에 변수가 만들어진다.(전역변수)

```js
function func() {
  variable = 1; // `variable`이라는 변수가 선언된 적 없으므로, 전역 변수가 된다.
}

func(); // 함수를 실행시키고 variable를 풀력해보면
console.log(variable); // 1
```

전역변수는 전역 스코프의 속성이다.
```js
var foo = 1
console.log(window.foo) // 1
// let과 const로 선언하면 전역변수가 되지 않는다.
```

---

### 참조 (Reference)

참조란 <b>객체가 컴퓨터 메모리 상에서 어디에 저장되었는지를 가리키는 값</b>이다.

아래 코드는 객체를 생성한 것이 아니라 객체에 대한 참조가 저장됐다는 표현이 맞디.
```js
const obj = {} // 변수 'obj'에 객체에 대한 참조가 저장됐다.
```
역참조(dereference)란 참조를 통해 메모리에 저장되어 있는 객체에 접근해서 해당 객체의 속성을 읽는 것을 말한다.
```js
const obj = {prop: 1};
obj.prop; // `obj`를 통해 역참조된 객체의 속성을 읽어왔다.
```

#### 함수 호출

#### 자바스크립트의 7가지 타입 

원시 타입(primitive type)
- Boolean
- Null
- Undefined
- Number
- String
- Symbol

참조 타입(referance type)
- Object

