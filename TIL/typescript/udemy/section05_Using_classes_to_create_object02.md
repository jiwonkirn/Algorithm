# Using classes to create object2

## Getter, Setter

클래스를 사용하면 좀 더 쉽게 `getter`, `setter` 메소드를 작성할 수 있다.

```ts
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species); // "Default"

plant.species = "AB";
console.log(plant.species); // "Default"

plant.species = "Green Plant";
console.log(plant.species); // "Green Plant"
```

`private _species: string = "Default";` 부분은 접근할 `private`으로 접근을 제어했기 때문에 class 밖에서는 접근할 수 없다. 때문에 `get`, `set` 키워드로 다음과 같이 메소드를 선언하면 `getter`, `setter` 메소드로만 값을 읽고 변경할 수 있다.

- 값 읽기: 객체 속성을 읽을 때 처럼 호출 `<인스턴스>.<getter메소드키>`.
- 값 수정하기: 객체 속성에 값을 할당할 때 처럼 `<인스턴스>.<getter메소드키> = <할당하고 싶은 값>`.

---

## 정적 속성, 정적 메소드 (Static Properties & Methods)

class에서 정적 속성, 정적 메소드를 정의할 때는 `static` 키워드를 사용한다.

```ts
class Helpers {
  static PI: number = 3.14;
  static celcCircumference(dianter: number): number {
    return this.PI * dianter;
  }
}

console.log(Helpers.PI); // 3.14
console.log(Helpers.celcCircumference(8)); // 25.12
```

---

## 추상 클래스 (Abstract Classes)

자체로는 인스턴스를 생성하지 못하고 상속을 통해 해당 속성들을 클래스, 인스턴스의 메소드, 속성으로 만들 수 있는 클래스를 말한다.

```ts
abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  // 타입만 정의하고 서브클래스에서 로직을 정의한다.
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  // 만약 상위 class의 abstract 속성/메소드를 서브 class에서 정의하지 않으면 에러를 발생시킨다.
  changeName(name: string): void {
    this.project = name;
  }
}

// 추상 클래스는 인스턴스로 만들 수 없다.
const newProject = new Project(); // Cannot create an instance of an abstract class.

// 추상 클래스의 서브 클래스를 인스턴스로 만들 수 있다.
const newProject = new ITProject();
console.log(newProject); // ITProject {projectName: "Default"}
newProject.changeName("front-end");
console.log(newProject); // ITProject {projectName: "front-end"}
```

---

## private constructor

다음 코드는 생성자(`constructor`)에 접근 제어자 `private`를 달았기 때문에 생성자를 직접 호출해서는 인스턴스를 만들 수 없다.

```ts
class OnlyOne {
  private static instance: OnlyOne | undefined;

  private constructor(public name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

let right = OnlyOne.getInstance();
console.log(right.name); // "The Only One"
right.name = "Somthing else!";
console.log(right.name); // "Somthing else!"
```

때문에 `OnlyOne.getInstance()` 정적 메소드를 통해 인스턴스를 불러올 수 있는데, 인스턴스가 이미 존재한다면 생성자를 호출하지 않고 존재하는 인스턴스를 반환하기 때문에 _클래스는 단 하나의 인스턴스만을 가질 수 있다._ 이를 `singleton pattern`이라고 한다.

`singleton pattern`은 고정된 메모리 영역을 얻으면서 단 한번만 인스턴스를 생성하기 때문에 메모리 낭비를 방지할 수 있고, 다른 클래스의 인스턴스들이 이 공통된 데이터를 공유 할 수 있다.

> DBCP(DataBase Connection Pool)처럼 공통된 객체를 여러개 생성해서 사용해야하는 상황에서 많이 사용한다. (쓰레드풀, 캐시, 대화상자, 사용자 설정, 레지스트리 설정, 로그 기록 객체등)

---

## 읽기 전용 속성

클래스에서는 값을 변경할 수 없는 읽기 전용 속성을 정의할 수 있다. 속성 선언 앞에 `readonly` 키워드를 달아서 부여할 수 있다.

```ts
class Person {
  readonly age: number;
  city: string;

  constructor(public readonly name: string, age: number, city: string) {
    this.age = 28;
    this.city = city;
  }
}

const person = new Person("jiwon", 28, "Incheon");
console.log(person); // Person {name: "jiwon", age: 28, city: "Incheon"}
person.name = "seho"; // error! Connot assign to "name" property. because it is a read-only property
person.age = 30; // error! Connot assign to "age" property. because it is a read-only property
person.city = "Seoul"; // ok!
```

---

## exercise

### javascript

```js
// Exercise 1 - How was your TypeScript Class?
function Car(name) {
  this.name = name;
  this.acceleration = 0;

  this.honk = function() {
    console.log("Toooooooooot!");
  };

  this.accelerate = function(speed) {
    this.acceleration = this.acceleration + speed;
  };
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
var baseObject = {
  width: 0,
  length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
  _firstName: ""
};
Object.defineProperty(person, "firstName", {
  get: function() {
    return this._firstName;
  },
  set: function(value) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  },
  enumerable: true,
  configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
```

### typescript

```ts
// Exercise 1 - How was your Typescript Class?
console.log("Exercise 1 - How was your Typescript Class?");

class Car {
  acceleration: number;

  constructor(public name: string) {
    this.acceleration = 0;
  }

  hook(): void {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car("BMW");
car.hook();
console.log(car.acceleration); // 0
car.accelerate(10);
console.log(car.acceleration); // 10

// Exercise 2 - Two objects, based on each other ...
console.log("Exercise 2 - Two objects, based on each other ...");

class BaseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize()); // 50

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
console.log(
  "Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)"
);

class FirstName {
  private _firstName: string;

  constructor() {
    this._firstName = "";
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

const person1 = new FirstName();
console.log(person1.firstName); // ""
person1.firstName = "Ma";
console.log(person1.firstName); // ""
person1.firstName = "Maximilian";
console.log(person1.firstName); // "Maximilian"
```
