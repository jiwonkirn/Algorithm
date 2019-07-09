# interface

`interface`는 해당 객체가 (인스턴스 등..) 어떤 타입을 가지고, 어떤 멤버를 가져야 하는지를 서술하는 문법으로, 대개 이런 작업을 추상화한다고 한다. `interface` 혹은 `class`로 확장이 가능하다는 점에서 `type` 키워드와 차이를 둔다.

## interface 정의

`interface`는 다음과 같은 문법으로 정의한다.

```ts
interface Person {
  name: string;
  // ...
}
```

인터페이스는 해당 식별자(혹은 매개변수, 반환값 등)에 타입을 지정해주는 것과 같은 방법으로 서술할 수 있다.

```ts
function greet(person: Person): void {
  console.log(`Hello, My name is ${person.name}`);
}

const person = { name: "jiwon", age: 28 };

greet(person); // "Hello, My name is jiwon"
```

함수를 호출할 때 변수가 아닌 객체 리터럴 자체를 인수로 할당하면 `interface` 내에 정의한 멤버들만을 가져야 한다.

```ts
greet({ name: "jiwon", age: 28 }); // 객체 리터럴은 인터페이스에서 명시한 속성만 사용할 수 있고, age 속성은 Person 인터페이스에 존재하지 않는다.
```

---

## 선택 속성

있어도 되고 없어도 되는 속성을 정의할 때는 `?` 키워드를 속성키 뒤에 정의해주면 된다.

```ts
interface Person {
  name: string;
  age?: number;
}

function greet(person: Person): void {
  console.log(`My name is ${person.name}`);
}

greet({ name: "jiwon", age: 28 }); // "Hello, My name is jiwon"
greet({ name: "jiwon" }); // "Hello, My name is jiwon"
```

---

## 색인 가능 타입

인터페이스는 속성 키를 고정하지 않고 동적으로 부여하할 수 있다.

```ts
interface Person {
  name: string;
  age: number;
  [prop: string]: any;
}

const person: Person = {
  name: "jiwon",
  age: 28,
  city: "Incheon"
};
```

다만 색인 타입 규칙에 위베되는 다른 속성이 있다면 에러를 발생시킨다. 즉 쉽게 말해서 다음 코드는 에러가 발생한다.

```ts
interface Person {
  name: string;
  age: number;
  [prop: string]: number;
}
```

다음 코드에서 `name` 키도 `string`, `prop`의 키도 `string`인데 값은 각각 `string`과 `number`로 다르기 때문에 에러를 발생시킨다. 값의 타입을 서로의 타입을 포함하는 `any` 타입을 사용하거나, 같은 타입을 지정해줘야 한다.

### 2개의 색인 타입 사용

다음과 같은 경우도 에러가 발생한다.

```ts
interface Person {
  [prop1: string]: string;
  [prop2: number]: number;
}
```

키의 타입이 다른데 에러가 나는 이유는 자바스크립트의 색인 동작 방식 때문이다. 자바스크립트는 객체의 키를 참조할 때 `(속성키).toString()` 메소드를 호출한다. 즉 `obj[1]`은 실제로 `obj["1"]`로 참조된다. 때문에 값의 타입을 같은 타입으로 지정하거나 다른 속성의 타입을 포함하는 타입을 (`any`같은) 사용해야 한다.
