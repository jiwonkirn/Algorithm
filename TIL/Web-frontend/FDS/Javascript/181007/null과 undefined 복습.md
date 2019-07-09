# null과 undefined 복습

## null 과 undefined
`null`과 `undefined`는 '없음'을 나타내는 값이지만 각각 다른 성격을 띄고있다.

* undefined : 정의되지 않았음을 나타낸다.
```js
let foo;
foo // undefined
```

* null : 값이 없음.
```js
// 보통 이렇게 하는 경우가 있지만 지양한다.
{
  name: 'Seungha',
  address: null // 없음을 굳이 나타냄
}

//보통은 아래와 같이 한다.
{
  name: 'Seungha'
}
```

---
##  Null Check
`null` 혹은 `undefined`인지 확인하는 작업을 null check라고 한다.

 `null`과 `undefined`는 다음과 같은 성격을 지닌다.
```js
null === undefined // false
null == undefined // true

null == 1 // false
null == 'string' // false
null == false // false
```

`null` 과 `undefined` 는  == (abstract equality comparison operator) 비교연산자를 사용했을때 서로에게만 true를 반환한다. 아래와 같은 방식으로 null 체크를 할 수 있다.
```js
input == null; // input은 null인가?
input == undefined; // input은 undefined(==null)인가?
```
