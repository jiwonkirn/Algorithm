# Using classes to create object

es6의 클래스는 사용자가 정의한 속성과 메소드를 가진 객체를 생성할 수 있게해준다. 타입스크립트의 class는 좀 더 확장된 기능을 가진다.

## class 만들기

typescript에서는 속성에 `public`, `private`, `protected` 같은 **접근제어자** 옵션을 부여할 수 있다.

`public`: 어느 곳에서든 접근할 수 있다.
`private`: 해당 클래스 이내에서만 접근할 수 있다. (인스턴스에서 직접적으로 접근하는 것도 불가능하다.)
`private`: 해당 클래스와 해당 클래스를 상속받은 클래스에서만 접근할 수 있다.

```ts
class Person {
  public name: string;
  // default가 public 이기 때문에 생략하고 작성할 수 있다.
  // name = string;
  private age: number;
  protected city: string;

  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const person = new Person("jiwon", 28, "incheon");
console.log(person.name); // "jiwon"
console.log(person.age); // error! Property 'age' is private and only accessible within class 'Person'.
console.log(person.name); // error! Property 'city' is protected and only accessible within class 'Person' and its subclasses.
```

---

## 생성자 정의

생성자 선언을 할 때는 다음과 같이 작성하면 별도로 선언을 하지 않더라도 **접근제어자**와 함께 매개변수를 작성하면 해당 매개변수를 키로한 속성이 생긴다.

```ts
class Person {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}

const person = new Person("jiwon", 28);
console.log(person.name); // "jiwon"
console.log(person.age); // 28
```

---

## 상속

어떤 class를 상속받을 때는 `extends`키워드로 작성이 가능하며, `constructor`를 정의하지 않은 경우는 인스턴스를 생성할 때 상위 클래스 생성에 필요한 인수를 넣어줘야한다.

```ts
class Person {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}

class Person2 extends Person {
  // ...
}

const person = new Person2(); // error! 매개변수가 2개 필요하지만 0개만 할당됐습니다.
const person2 = new Person2("jiwon", 28); // ok!
```

`constructor`를 정의한 경우는 내부에서 `super`함수를 실행하여 상위 class를 생성해야 한다.

```ts
class Person {
  name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}

class Jiwon extends Person {
  city: string;

  constructor(age: number, city: string) {
    super("jiwon", age); // 상위 class 생성
    this.city = city;
  }
}

const person = new Jiwon(28, "Incheon"); // ok!
console.log(person2.name); // "jiwon"
console.log(person2.age); // 28
console.log(person2.city); // "Incheon"
```

위에서 설명한 접근제어자 `private`, `protected`를 통해 선언된 상위 클래스의 속성에 상속받은 클래스에서 접근하랴고 하면 다음과 같은 일이 생긴다.

```ts
class Person {
  name: string;
  private age: number;
  protected city: string;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

class ExtendedPerson extends Person {
  constructor(name: string, age: number, city: string) {
    super(name, age, city);
  }

  printAge() {
    console.log(this.age); // error! age 속성은 Person class 내에서만 접근할 수 있습니다.
  }
  printCity() {
    console.log(this.city);
  }
}

const jiwon = new ExtendedPerson("jiwon", 28, "Incheon");
console.log(jiwon.name);
console.log(jiwon.city); // error! city 속성은 protectec 되어있기 때문에 Person 클래스와 그 서브 클래스에서만 접근할 수 있습니다.
console.log(jiwon.printCity); // "Incheon" // printCity 메소드는 서브 클래스 내에서 city 속성에 접근한 것이므로 에러가 나지 않습니다.
```

> 하위 클래스에서 정의된 속성이 상위 클래스 속성들을 덮어씌운다.
