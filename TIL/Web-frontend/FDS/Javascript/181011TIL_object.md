# 181011 TIL 

## 객체 심화

### 객체 자신의 속성 (Own Property)

`in`연산자를 통해서는 객체 자신의 속성인지 객체의 프로토타입의 속성인지 확인할 수 없다.

```js
const obj = Object.create({inheritedProp: 'inheritedProp'});
obj.ownProp = 'ownProp';

console.log('inheritedProp' in obj); // true
console.log('ownProp' in obj); // true
console.log('constructor' in obj); // true
```

`Object.prototype.hasOnProperty`메소드를 사용하면 확인할 수 있다.

```js
console.log(obj.hasOwnProperty('inheritedProp')); // false
console.log(obj.hasOwnProperty('ownProp')); // true
console.log(obj.hasOwnProperty('constructor')); // false
```

---

### 데이터 속성(Data Property)의 부수속성(Property Attribute)

`delete`연산자는 속성을 삭제 할 수 있다. 하지만 삭제되지 않는 속성들이 있다.

```js
delete Math.PI; // false
Math.PI; // 3.141592653589793
```

이처럼 각 속성마다 동작방식이 다를 수 있다. 속성의 동작방식 등에 대한 정보가 숨겨져 있는 곳의 이름은 <b>속성의 부수속성(property attribute)</b>라고 한다.

`Object.getOwnPropertyDescriptor`를 통해 부수속성을 나타내는 객체를 반환받을 수 있다. 이 객체를 통틀어 property descriptor(속성 기술자)라고 부른다.

```js
const obj = {prop: 1};

Object.getOwnPropertyDescriptor(obj, 'prop');
// { value: 1, writable: true, enumerable: true, configurable: true }

Object.getOwnPropertyDescriptor(Math, 'PI');
// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
```

 '데이터 속성(data property)'에 대한 속성 기술자는 네 가지 속성을 갖는다.

- value: 속성에 어떤 값이 저장되어 있는지
- writable: 변경할 수 있는 속성인지
- enumerable: 열거 가능한 속성인지
  ```js
    obj // { prop: 1 }
    Math // {} // Math의 여러 메소드들이 열거되지 않는다.
  ```
- configurable: 부수속성을 변경하거나 속성을 삭제할 수 있는지

`Object.getOwnPropertyDescriptors`를 사용하면 객체의 전체 속성에 대한 descriptor를 가져올 수 있다.

`writable: false`, `configurable: false`인 속성을 변경하거나 삭제하려고 해도 에러가 나지 않고 그냥 무시되지만, 엄격 모드일 때에는 에러가 발생한다.

### 속성 기술자를 통해 객체의 속성 정의하기

`Object.create` 정적 메소드는, 사실 두 번째 인수로 속성 기술자 객체를 받는다.

```js
const obj = Object.create(Object.prototype, {
  prop: {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
  },
  another: {
    value: 2
  }
});

console.log(obj); // {prop: 1}

obj.prop = 2;
console.log(obj.prop); // 1

delete obj.prop;
console.log(obj.prop); // 1
```

`Object.defineProperty` 혹은 `Object.defineProperties` 정적 메소드를 사용해서 이미 만들어진 객체에 대한 속성을 정의할 수도 있다.

```js
const obj = {};
Object.defineProperty(obj, 'prop', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(obj) // {prop: 1}

obj.prop = 2
delete obj.prop

console.log(obj) // {prop: 1}
```

---

### 접근자 속성(Accessor Property)과 그 부수속성

`get` 메소드: 속성에 접근만해도 함수가 실행된다.

`setter`메소드: 속성에 값을 부여하면 setter메소드가 된다.

```js
const obj = {

  // 메소드 이름 앞에 `get`을 써주면, 이 메소드는 getter 메소드가 됩니다.
  get prop() {
    console.log('getter가 호출되었습니다.');
    return this._hidden;
  },

  // 메소드 이름 앞에 `set`을 써주면, 이 메소드는 setter 메소드가 됩니다.
  set prop(arg) {
    console.log('setter가 호출되었습니다.');
    this._hidden = arg;
  }
}

// `set prop` 메소드가 `1`을 인수로 해서 호출됩니다.
obj.prop = 1; // setter가 호출되었습니다.

// `get prop` 메소드가 호출되고 해당 메소드의 반환값을 읽어옵니다.
obj.prop; // 1 // getter가 호출되었습니다.
```

> 강사님 코멘트 > getter와 setter의 활용법은 필요시 개인적으로 공부할 것

> 강사님 코멘트 > mob.x 라는 라이브러리가 많이 쓰인다. 이런 실무 라이브러리에서도 getter 함수가 많이 쓰인다.

---

### 객체의 속성 열거하기

객체의 속성을 열거할 때는 프로토타입의 속성까지 열거하지는 않는다.

`for...in` 은 `keys`메소드가 나온 이후로는 안쓰인다.

객체에 들어있는 속성을 모두 출력하고 싶을 때

```js
for (const name of Object.keys(obj)) {
  console.log(name)
}
```

`keys`메소드는 마치 속성이 정의된 순서대로 값을 반환해 주는것처럼 객체에는 순서가 없기 때문에 이 것에 의존해서는 안된다.

---

### 얕은 복사(Shallow Copy) & 깊은 복사(Deep Copy)

`Object.assign`은 객체를 복제하는 수단으로도 사용된다.

참조를 복사하는 것이 아니라 객체 자체를 복사하는 것이다.

