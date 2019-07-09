# typescript section02

## 타입

### 함수 타입

함수는 다음과 같은 형식으로 정의한다.

```ts
function returnMyName(): string {
  return "jiwon";
}
// function returnMyName(): [반환타입] {
//  ...
// }
```

### void 타입

void는 undefined와 같이 함수가 아무것도 반환하지 않는 타입을 말한다.

```ts
function sayHello(): void {
  console.log("hello!");
}
```

### argument 타입

`매개변수: 타입` 형식으로 타입을 지정한다.

```ts
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// function multifly(매개변수: 타입): 반환타입 {
//    ...
// }
```

### 함수 타입 정의

값을 할당하는 코드를 작성하기 전에 함수의 타입을 정의할 수 있다

```ts
function add: (val1: number, val2: number) => number;

add = function (val1, val2) {
  return val1 + val2
}

console.log(add(1, 2)) // 3
```

### 객체

값을 할당하기 전에 객체와 유사한 모습으로 타입을 정의한다.

```ts
const userData: { name: string; age: number } = {
  name: "jiwon",
  age: 28
};
```

### 타입 별칭

복잡한 모양의 객체 타입을 지정하는 것은 가독성에 좋지 않다.

```ts
const complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [1, 2, 3, 4, 5],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
```

타입 별칭을 사용하면 다음과 같이 쓸 수 있다.

```ts
type Complex = { data: number[]; output: (all: boolean) => number[] };
const complex: Complex = {
  data: [1, 2, 3, 4, 5],
  output: function(all) {
    return this.data;
  }
};
```

### 유니온 타입

지정한 여러개의 타입을 가질 수 있다. (or)

```ts
let age: number | string = 28; // number 혹은 string 타입을 가질 수 있다.
age = "28"; // ok
```

### 런타임에서의 타입 체크 (?)

```ts
let finalValue = 30;
if (typeof finalValue === "number") {
  console.log("Finak value is a numner");
} else {
  console.log("Finak value is not a numner");
}
```

### never 타입

undefined 같이 아무 것도 반환하지 않을 때도 쓸 수 있지만 보통 throw와 같이 에러를 발생시키는 경우 사용한다.

```ts
function neverReturns(): never {
  throw new Error("An error!");
}

// function neverReturns(): void {
//   throw new Error("An error!");
// } // ok..
```

### null

`null`, `undefined`는 서브타입이므로 number나 string대신 값을 재할당할 수 있다. 하지만 `strictNullCheck`옵션을 활성화하면 에러를 발생시킨다.

```ts
let canBeNull = 12;
canBeNull = null; // strict 모드에서는 error!
```

```ts
// 왜 strict모드에서 12를 할당했는데 에러가 나지 않는 것인가..
let canThisBeAny = undefined; // null / undefined 을 할당하면 추론에 의해 any 타입이 된다.
canThisBeAny = 12;
```
