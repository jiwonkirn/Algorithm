# 181012 TIL

## 연산자 더 알아보기

### 표현식

---

### Short-circuit Evaluation

```js
// 왼쪽이 falsy이면 왼쪽 것을 반환하지만 왼쪽이 truthy이면 오른쪽이 truthy여도 오른쪽을 반환한다.
1 && 1; // 1

// 왼쪽이 truthy이면 왼쪽 것을 반환하지만 왼쪽이 falsy이면 오른쪽이 falsey여도 오른쪽을 반환한다.
0 || null; // null
```

|| 연산자와 && 연산자는 왼쪽이 각각 truthy 나 falsy 이면 오른쪽 코드가 실행(혹은 확인)조차 하지 않는다.

```js
print = () => console.log('실행되었습니다.')
}

// print()는 한번도 실행되지 않는다.
1 || print() // 1

// print()는 한번도 실행되지 않는다.
0 && print() // 0
```

기본 매개변수가 없던 ES2015 이전에는 아래와 같이 사용됐다.

```js
// 이 코드는 undefined일 때만 hello를 반환하고 이 외의 falsy가 들어오더라도 인수로서 대입된다.
function func2(arg = "hello") {
  console.log(arg);
}

// 이 코드는 arg가 falsy 라면 'hello'를 출력한다.
// 즉 0을 인수로 준다면 0은 falsy이므로 0을 인수로 사용할 수 없다는 제약이 있다.
function func2(arg) {
  arg = arg || "hello";
  console.log(arg);
}
```

---

### 증가/감소 연산자

세번 실행된다.

```js
let i = 3;
while (i--) {
  console.log("감소 연산자를 뒤에 쓰면 어떻게 될까요?");
}
```

두번 실행된다.

```js
let j = 3;
while (--j) {
  console.log("감소 연산자를 앞에 쓰면 어떻게 될까요?");
}
```

> `++` 이나 `--` 연산자는 그 자체로도 값을 반환함과 동시에 주변 환경에도 영향을 주는 연산자이기 때문에 조심해야 한다.

> 또한 `++`이나 `--`를 앞에 붙이나 뒤에 붙이나 주변에 미치는 영향은 같다.

---

### 연산자 우선순위

아래의 경우 `typeof`와 `'helloworld'`가 먼저 연산이 되기 때문에 false 가 출력된다.

```js
typeof "helloworld" === "hello" + "world"; // false
```

---

### 연산자 결합 순서 (Operator Associativity)

부등호를 연달아 쓸 수 없다.

```js
3 > 2 > 1;
3 > 2 > 1;
true > 1; // false
```

아래와 같이 해야한다.

```js
3 > 2 && 2 > 1; // true
```

오른쪽부터 연산되는 연산자가 있다.

```js
//모든 첫번째 두번째 식은 같은 방식으로 동작된다.
2 ** (2 ** 3); // 256
2 ** (2 ** 3); // 256

let x, y, z;
z = y = x = 1;
z = y = x = 1;

// 아래의 연산은 괄호가 오른쪽부터 쳐지지만 '계산 자체'는 왼쪽에서 부터 된다.
a ? b : c ? d : e ? f : g;
a ? b : c ? d : e ? f : g;
```

---

### 엄격한 동일성 (Strict Equality)

`===`연산자는 아래와 같은 특별한 성격을 가진다.

```js
// `===` 연산에서, `NaN`은 number 타입의 **모든** 값과 다르다. 이는 자기 자신에 대해서도 마찬가지.
NaN === NaN; // false

// `0`과 `-0`은 서로 다른 값이지만, `===` 연산은 이 둘을 같은 것으로 취급한다.
0 === -0; // true
```

---

### Spread Syntax

[...arr] 연산자는 어떤 배열에 추가하는 기능이다. 아래 예제를 통해 원리를 이해할 수 있다. 보통은 `Array.prototype.slice`메소드를 많이 사용한다.

```js
arr = [4, 5, 6];
arr2 = [1, 2, 3, ...arr, 7, 8, 9]; // [1,2,3,4,5,6,7,8,9]
```

배열의 요소를 인수로 넘겨줄 때도 사용한다.

```js
const arr = [1, 2, 3, 4, 5];

// 아래 코드는 `Math.max(1, 2, 3, 4, 5)`와 동일
Math.max(...arr); // 5

// 이전에는 같은 작업을 하기 위해 `Function.prototype.apply` 메소드를 사용됐었다.
Math.max.apply(null, arr); // 5
```

<b>객체</b>에도 사용할 수 있다.

```js
const obj1 = { prop: 1, a: 2, b: 3 };
const obj2 = { ...obj1 }; // {prop: 1, a:2, b:3}
```

아래의 경우 같이 같은 속성이 있으면 덮어쓴다.

```js
const obj1 = { prop: 1, a: 2, b: 3 };
const obj2 = { a: 3, b: 4 };
const obj = {
  a: 7,
  b: 8,
  ...obj1,
  ...obj2,
  c: 4,
  d: 5
};

obj; // { a: 3, b: 4, prop: 1, c: 4, d: 5 }
```

임의 수 배열의 요소를 합치는데 아래의 코드처럼 쉽게 코드를 작성할 수 있다.

```js
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function flatten(arr) {
  return arr.reduce((acc, item) => [...acc, ...item], []);
  // return arr.reduce((acc, item) => acc.concat(item), [])
}

flatten(arr); // [1,2,3,4,5,6,7,8,9]
```

> Spread Syntax 문법은 많이 쓰이는 문법이므로 기억해서 활용하도록 한다.

> ES2018 에서 추가된 기능이기 때문에 브라우저 테크를 하거나 이전 버전 문법으로 변환해줘야한다.

---

### 분해대입 (Destructuring Assignment)

> 혹은 '비구조와 할당' 이라고도 부른다.

#### 배열의 분해대입

다음과 같이 배열을 이용해서 변수에 대입을 할 수 있다.

```js
const [a, b, c] = [1, 2, 3]; // a = 1, b= 2, c = 3

const [a, , c] = [1, 2, 3, 4]; // a = 1, c = 3
```

활용

```js
let x = 1,
  y = ((2)[(x, y)] = [y, x]); // x = 2, y = 1
```

> 배열의 순서 뒤집는 문제를 위의 방법으로 풀 수 있으니 실습해보도록 하자.

배열이 중첩된 경우 다음과 같이 할 수 있다.

```js
const [a, b, [c, d]] = [1, 2, [3, 4]];

console.log(a, b, c, d); // 1 2 3 4
```

나머지 매개변수처럼 아래와 같이 동작할 수 있다.

```js
const [a, b, ...c] = [1, 2, 3, 4, 5];

console.log(c); // [3, 4, 5]
```

#### 객체의 분해대입

아래 방법으로 많이 쓰인다.

```js
const obj = ({ a, b } = { a: 1, b: 2 }); // {a, b}는 {a: a, b: b} 와 같은 의미이다.

obj.a; // 1
obj.b; // 2
```

문장의 첫 글자가 `{}`중괄호라면 블록스코프(구문)으로 취급되기 때문에 주의해야 한다. 이는 `()`괄호 안에 넣어주어 해결할 수 있다.

```js
let a, b;
// 문장이 여는 중괄호(`{`)로 시작되면 이는 '블록'으로 간주되므로,
// 아래와 같이 분해대입을 할 때는 식 전체를 괄호로 둘러싸주어야 한다.
({ a, b } = { a: 1, b: 2 });

console.log(a, b); // 1 2

// 같은 이유로 다음과 같은 방법도 안된다.
const returnObj = (x, y) => {
  x, y;
};
returnObj(1, 2); // undefined
// 객체를 반환 받으려면 ()괄호로 감싸주어야 한다.
const returnObj2 = (x, y) => ({ x, y });
returnObj2(1, 2); // {x: 1, y: 2}
```

객체의 중첩 또한 같은 방식으로 대입한다.

```js
const {
  a,
  b: { c }
} = { a: 1, b: { c: 2 } };

console.log(a, c); // 1 2
```

객체 역시 나머지 매개변수처럼 아래와 같이 동작한다.

```js
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

console.log(rest); // { c: 3, d: 4 }
```

> ES2018 에서 추가된 문법이다. 그러므오 Babel / typeScript 같은 트랜스파일러를 사용하도록 한다.

---

#### 분해대입의 기본값

기본으로 대입될 수 있는 값을 미리 지정해줄 수 있다.

```js
// `c` 위치에는 대입될 값이 없으므로, 기본값인 `3`이 대신 사용됩니다.
let [a, b, c = 3] = [1, 2];

console.log(c); // 3
```

다음과 같이 활용할 수 있다.

```js
function func({ prop, arr: [i, j, k = 4] }) {
  console.log(prop);
  console.log(i);
  console.log(j);
  console.log(k);
}

func({ prop: 1, arr: [2, 3] }); // 1 2 3 4
```

매개변수에서 객체를 분해대입 하는 코드가 많이 쓰이고 있다.

```js
// 아래 함수의 매개변수는 순서가 바뀌면 원하는 값을 반환받을 수 없고,
// 부평구가 주소인지, 이사가는 곳인지 어떤 정보를 담고 있는지 모른다.
function func1(name, age, address, country) {

}

func('김지원', 27, '부평구', '대한민국')

// 아래처럼 객체의 분해대입을 사용하면 순서가 뒤바뀌어도 상관이 없고,
// 각각 어떤 정보의 내용인지를 알 수 있다.
function func2({name, age, address, country}) {
  return `제 이름은 ${name}입니다. 나이는${age}, 사는곳은 ${country} ${address} 입니다.` 
}

func2({
  country: '대한민국',
  age: 27,
  name: '김지원',
  address: '부평구'
}) // '제 이름은 김지원입니다. 나이는27, 사는곳은 대한민국 부평구 입니다.'
```
> 매개변수의 분해대입은 실무에서 많이 쓰인다.