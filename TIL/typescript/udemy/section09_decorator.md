# Decorator

`decorator`는 그저 함수일 뿐이다. 하지만 클래스, 혹은 클래스의 속성/메서드에 확실한 변화를 주거나 새로운 데이터 정보를 부여할 수 있다.

`decorator`를 사용하기 전에 `tsconfig.json` `"experimentalDecorators"`키의 값을 `true`로 변경해주어야 컴파일 경고가 뜨지 않는다.

## Class decorator

### Class decorator

class에 decorator를 달아주는 경우 다음 예제와 같이 동작한다.

```ts
// decorator function
function logged(contructorFn: Function) {
  console.log(constructorFn);
  /* 출력
    ƒ Person() {
        console.log("Hi");
    }
  */
}

// class
@logged
class Person {
  constructor() {
    console.log("hello wolrd");
  }
}
```

class 정의 위에 `@` 키워드와 함께 decorator 함수의 식별자를 적어주면, **decorator 함수의 인자로 해당 클래스 생성자가 들어온다.** 인자는 오직 생성자 함수만이 들어오게 된다.

### Factory

Factorial 하게 사용할 수도 있다.

```ts
function logged(contructorFn: Function) {
  console.log(constructorFn);
}
// Factory
function logging(value: boolean) {
  return value ? logged : () => {};
}

@logging(false) // false 이기 때문에 logged decorator 함수가 실행되지 않는다.
class Car {}
```

### Advanced

`decorator`는 두개를 붙여서 사용할 수도 있고, 다음과 같이 prototype 메서드를 붙여줄 때도 사용할 수 있다.

```ts
function logged(contructorFn: Function) {
  console.log(constructorFn);
}

function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

// 이렇게 두개를 붙여 넣을 수도 있다.
@logged
@printable
class Plant {
  name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print(); // Plant클래스 자체에 print 메서드가 없다고 컴파일러가 생각하기 때문에 any타입으로 지정해준다.
/* logged
  Plant() {
      this.name = "Green Plant";
    }
*/
/* printable
  Plant {name: "Green Plant"}
*/
```

위에서 `(<any>plant.print())`를 통해 타입을 any로 지정해주는 이유는 Plant클래스 자체에 print 메서드가 없다고 컴파일러가 생각하기 때문이다.

---

## Method decorator

`method`에 붙는 `decorator` 함수는 인자를 `생성자`, `메소드 키`, `속성기술서` 세가지를 받는다.

```ts
// method decorator function
function editable(value: boolean) {
  return function (
    target: any, // 해당 클래스 생성자
    propertyName: string, // 메소드 식뵬자
    descriptor: PropertyDescriptor // 메소드 속성 기술서
  ) {
    descriptor.writable: value;
  }
}

class Project {
  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project("Super Project");

project.calcBudget() // 1000
project.calcBudget = function() {
  console.log(2000);
}
project.calcBudget() // 1000 // 변경되지않음!
```

다음과 같이 메소드의 환경설정같은 작업을 `decorator`함수 호출로 가능하게 한다.

---

## Property decorator

안타깝게도 지금 버전에서 메소드가 아닌 속성에 대해 속성기술자를 인자로 받아올 수 없다. 하지만 다음과 같이 속성기술자를 반환해서 속성의 부수속성(`Property Attribute`)을 정의할 수 있다.

```ts
// 속성 decorator 함수
function overwritable(value: boolean) {
  return function(target: any, propertyName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Project {
  @overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }
}

const project = new Project("Super Project");
console.log(project); // {}
```

> 속성 decorator 함수는 `void` 혹은 `any` 타입을 반환함을 명시해줘야 한다.

---

## Parameter decorator

메소드의 매개변수에도 `decorator` 함수를 붙일 수 있으며, 해당 생성자와 메소드의 식별자, 매개변수의 순서가 인자로 들어온다.

```ts
// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number): void {
  console.log("target", target);
  console.log("methodName", methodName);
  console.log("paramIndex", paramIndex);
}

class Course {
  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) console.log(10000);
    else console.log(2000);
  }
}

const course: Course = new Course("Front-end");
course.printStudentNumbers("print all", true);
// target {printStudentNumbers: ƒ, constructor: ƒ}
// methodName printStudentNumbers
// paramIndex 1
```

> decorator 함수의 경우는 metadata와의 결합에 쓰이기도 한다. 현재 metadata는 타입스크립트와 연관성이 많지는 않지만 궁금하다면 typescript docs - handbook - decorator - 가장 아래 metadata에서 확인할 수 있다.
