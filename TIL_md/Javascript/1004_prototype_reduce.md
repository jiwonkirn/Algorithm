비슷한 객체들이 공통적으로 공유하는 속성을 지정하는 것을 프로토타입이라고 한다.

프로토타입을 통해 속성을 상속받는다고 할지라고 그 속성이 상속받는 객체에 들어가는 것은 아니다.

하지만 메소드 호출을 하면 호출은 된다.

---

프로토타입 체인 (Prototype Chain)

할아버지 집에 아버지 아들 모두 산다.

아들의 집이  할아버지 집이라한다.

하지만 아들의 소유엔 할아버지 집이 없다.

속성을 상속받았을뿐 그 것이 아들의 것은 아니다.

---

프로토타입 상속을 타고올라가다가 그 속성을 찾으면 상위에 같은 속성이 있다고 해도 먼저 찾은 속성을 사용한다.

---

프로토타입 체인을 복잡하게 작성하면 속도가 느려진다.

---

Object.prototype.isPrototypeOf()
객체리터럴을 통해 생성한 객체의 ()프로토타입인가.

---

```js
// 생성자 정의
function Person(name) {
  this.name = name;
}

Person.prototype.familyName = '김'
Person.prototype.introduce = function() {
  console.log(`안녕하세요, ${this.familyName}${this.name}입니다.`)
}

// 생성자를 통한 객체 생성
const person1 = new Person('아준');
person1.introduce()

// 생성자로 person1이라는 인스턴스를 생성하면 person1에는 자동으로 객체가 생성되며, 
// Person.prototype 는 {} 라고 보여지지만 빈객체가 아니다. Object.prototype = ...

// this는 Person.prototype에 들어가있는것이지 person1에 들어있는 것이 아니다.

// function 키워드 함수로 만들어진 메소드 내부에 this는 호출되는 시점에 결정된다.
// = 화살표 함수랑 다르다는 것이다.
// 화살표 함수의 this는 결정되는 시점을 기준으로 생성된다.
const person2 = new Person('지원');
person2.introduce()

// 객체 파트의 11번 예제

// Object.getPrototypeOf(person1) === Person.prototype; // true
```

---

어떤 객체의 생성자를 가지고 오고 싶다.

```js
function Person() {
  // ...
}
const person = new Person();
// 객체.constructor 는 생성자를 가져올 수 있다.
person.constructor === Person;
```

---

정적 메소드 (Static Method)

생성자의 속성에 저장해서 쓰는 함수를 말한다.

this가 필요 없으면 정적메소드 
(다른 값으로부터 끌어오는 개념. Array.from())

this가 필요하면 메소드.
(특정 배열 등에서 끌어오는 것이기 때문에.)

강사님 레플 내용
```js
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.familyName = '김'
Person.prototype.introduce = function () {
  console.log(`안녕하세요, ${this.familyName}${this.name}입니다.`)
}
Person.compareAge = function(person1, person2) {
  if (person1.age < person2.age) {
    return '첫 번째 사람의 나이가 더 많습니다.';
  } else if (person1.age === person2.age) {
    return '두 사람의 나이가 같습니다.';
  } else {
    return '두 번째 사람의 나이가 더 많습니다.';
  }
}

const person1 = new Person('승하', 25)
person1.introduce()

const person2 = new Person('아준', 28)
person2.introduce()

Person.compareAge(person1, person2)

// 이렇게 할 수 없습니다!
// person1.compareAge(person1, person2)

// 아래와 같은 에러가 납니다:
// TypeError: person1.compareAge is not a function
//     at eval:28:9
//     at eval
//     at new Promise
```

---

reduce를 이용한 fitter 기능 만들기

```js
function filter(arr, func) {
  return arr.reduce(function(acc, item) {
    if (func(item)) {
      acc.push(item)
    }
    return acc
  }, [])
}


const arr = [1, 2, 3, 4, 5]

filter(arr, x => x % 2 === 0)

```

---

주의할 점 

순회중에 순회중인 배열을 편집하면 안된다.

---