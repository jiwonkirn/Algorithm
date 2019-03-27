# Generic

`generic`은 동적으로 타입을 지정해줄때 사용할 수 있는 문법이다. 생성자나 함수를 호출할 때나 변수에 값을 할당할 때 타입을 지정해주어, 지정된 타입 + 정의할때의 규칙에 맞춰 타입이 정의된다.

다음 코드를 살펴보자

```ts
function echo(data: any) {
  return data;
}

console.log(echo("jiwon").length); // 5
console.log(echo(28).length); // undefined
console.log(echo({ name: "jiwon", age: 28 }).length); // undefined
```

해당 함수를 호출할 때 반환되는 값의 타입은 `string`일 수도 있고 `number`, `object`일 수도 있다. 반환되는 값의 타입은 `any`로 지정되어 있기 때문에 length 메소드를 호출 했을 경우, 따로 에러를 발생시키지 않고 `undefined`를 밷어낸다.

이 경우 동적으로 함수 호출을 할 때 타입을 지정해준다면 실수를 방지할 수 있다.

```ts
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho("jiwon").length); // 5
console.log(betterEcho<string>("jiwon").length); // 다음과 같이 타입을 동적으로 지정해주어 사용한다.
console.log(betterEcho(28).length); // error!
console.log(betterEcho({ name: "jiwon", age: 28 }).length); // error!
```

---

## array

배열의 경우 타입을 지정할 때 `generic`이 default로 정의돼있어 지정해줄 수 있다.

```ts
const testResult: Array<number> = [1.23, 5.32];
testResult.push(-2.99);
console.log(testResult); // [1.23, 5.32, -2.99];

function printAll<T>(args: T[]) {
  arg.forEach(element => console.log(element));
}
printAll<string>(["Apple", "Banana"]);
```

---

## generic type

generic을 정의할 때 타입을 정의하는 것 처럼 정의할 수 있다.

```ts
const echo2: <T>(data: T) => T = function(data) {
  return data;
};
console.log(echo2<string>("Somthing"));

type echo3<T> = T;
const hello: echo3<string> = "world";
```

---

## generic class

class는 다음과 같이 정의할 수 있다.

```ts
class Person<T> {
  name: T;
  age: T;
  //...
}
```

`generic`의 타입의 경우 타입의 범위를 지정해 줄 수 있고, 복수의 타입을 지정할 수 있다.

```ts
class SimpleMath<T extends string | number, U extends string | number> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multipleValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multipleValue = 20;
console.log(simpleMath.calculate()); // 200
```

다만 다음과 같이 정의할 경우 `T`와 `U`는 같은 타입이어야 한다.

```ts
class SimpleMath<T extends U, U extends string | number> {
  //...
}
```
