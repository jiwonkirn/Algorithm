# 181031 TIL

## class(클래스)

### 클래스 상속

javascript에는 두가지 상속이 있다.

- prototype 상속
- class 상속

class 상속은 다음과 같은 문법으로 정의한다.
```js
// '부모 클래스' 혹은 '슈퍼 클래스'
class Parent {
  // ...
}

// '자식 클래스' 혹은 '서브 클래스'
class Child extends Parent {
  // ...
}
```

A클래스가 B클래스를 상속받으면, 다음과 같은 일들이 가능해진다.

- 자식 클래스 A를 통해 부모 클래스 B의 **정적메소드와 정적 속성**을 사용할 수 있다.
- 부모클래스 B의 **인스턴스 메소드와 인스턴스 속성**을 자식클래스의 A의 인스턴스에서 사용할 수 있다.

```js
class Parent {
  static staticProp = 'staticProp';
  static staticMethod() {
    return 'I\'m a static method.';
  }
  instanceProp = 'instanceProp';
  instanceMethod() {
    return 'I\'m a instance method.';
  }
}

class Child extends Parent {}

console.log(Child.staticProp); // staticProp
console.log(Child.staticMethod()); // I'm a static method.

const c = new Child();
console.log(c.instanceProp); // instanceProp
console.log(c.instanceMethod()); // I'm a instance method.
```

---

#### super

자식클래스에 부모클래스의 같은 키의 속성을 정의할 경우 가리기 현상이 나타난다. 따라서 부모 클래스의 속성에 접근하기 위해서는 `super`키워드를 사용한다.

```js
class Melon {
    getColor() {
        return `제 색깔은 초록색입니다.`
    }
}

class WaterMelon extends Melon {
    getColor() {
        return super.getColor() + `속은 빨간색입니다.`
    }
}

const waterMelon = new WaterMelon()
waterMelon.getColor(); //제 색깔은 초록색입니다. 하지만 속은 빨강색입니다.
```

`super` 키워드의 동작방식은 다음과 같다.

- 생성자 내부에서 `super`를 함수처럼 호출하면, 부모 클래스의 생성자가 호출된다.
- 정적 메소드 내부에서는 `super.prop`과 같이 써서 부모 클래스의 `prop` 정적 속성에 접근할 수 있다.
- 인스턴스 메소드 내부에서는 `super.prop`과 같이 써서 부모 클래스의 `prop` 인스턴스 속성에 접근할 수 있다.

```js
class Person {
    constructor ({name, age}) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `제 이름은 ${this.name}입니다.`
    }
}

class Student extends Person {
    constructor ({grade, ...ns}) {
        super(ns)
        this.grade = grade
    }
    introduce() {
        return super.introduce() + `제 나이는 ${this.age}이고, ${this.grade}입니다.`
    }
}

const s = new Student({grade: 3, name: '김지원', age: 27})
console.log(s.introduce()) // 제 이름은 김지원입니다.제 나이는 27이고, 3학년입니다.
```

메소드 오버라이딩(method overriding): 부모클래스의 기능을 확장해서 쓰고 싶은 경우 부모 메소드를 재정의한다.
