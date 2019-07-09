# interface

## class에 interface 상속

클래스끼리 `extends`라는 키워드로 상속을 해주지만 interface의 타입들을 상속 받을 때는 `implements` 키워드를 통해 상속받아야한다.

```ts
interface Person {
  name: string;
  age: number;
}

class John implements Person {
  name: string = "John";
  age: number = 28;
}

const john = new John(); // {name: "jiwon", age: 28}

function greet(person: Person) {
  console.log("Hello, " + person.name);
}

greet(john); // John은 Person을 상속받았기 때문에 John의 인스턴스인 john도 가능
```

---

## interface로 함수 정의

`interface`로 함수를 정의할 때는 다음과 같은 문법으로 정의할 수 있다.

```ts
interface Calc {
  // (인자: 타입): 반환타입
  (number1: number, number2: number): number;
}

const calc: Calc = function(value1, value2) {
  return value1 * value2;
};
```

함수가 반환값과 객체 속성을 모두 가지는 경우는 다음과 같이 정의할 수 있다.

```ts
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

---

### interface 상속 (확장)

`interface`는 `class` 와 비슷한 방식으로 상속을 해줄 수 있다.

```ts
interface Person {
  name: string;
  age: number;
}

interface Jiwon extends Person {
  city: string;
}

const jiwon: Jiwon = {
  name: "jiwon",
  age: 28,
  city: "Incheon"
};
```
