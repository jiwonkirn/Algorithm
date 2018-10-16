# 181015 TIL

## JSON(JavaScript Object Notation)

http는 텍스트 형태로 전송하기 때문에, 네트워트에 전송할 때 저장/전송 가능한 형태로 바꾸는 것이 필요하다.
이 절차를 일러 직렬화(serialization)라 하고
반대로 프로그래밍 하기 위해 불러오는 절차를 역직렬화(deserialization)라 한다.

JSON은 JavaScript 객체와 유사한 표기법을 사용하는 텍스트를 통해 복잡한 자료구조를 나타낸다.

JSON은 JavaScript가 아니다. 

- javascipt는 식별자 규칙을 만족한다면 속성명에 ""를 붙이지 않아도 되지만 JSON은 모든 속성명에 ""를 붙여야한다.

- 주석을 쓸 수 없다.

- 우리가 만든 생성자는 저장할 수 없고, 단순히 객체 리터럴로 만든 단순한 객체만 저장할 수 있다.

- JSON에는 함수등 특별한 동작방식의 객체는 저장할 수 없다.

- undefined, NaN, Infinity과 같은 값을 표현할 수 없다.

- 주의) 저장 표현할 수 없으므로 역직렬화 할 수 없다.

---

## Date

날짜와 시간을 다루기 위해 Date라는 생성자가 존재한다.

- 글로벌 서비스를 만들 때 시간이 이슈가 될 수 있다.

- new Date() 는 시간을 나타내는 특별한 형태의 객체이다.

```js
const now = new Date()
typeof now // 'object'

now.getTime() // 1539571172367 // 밀리세컨드를 반환 (유닉스 시간)

// 1분은 (60000 * 1/1000s)
```

```js
let now = new Date() // 2018-10-15T02:45:00.890Z
// 시간에서 1분을 뺀다.
let minus1Minute = new Date(now - 60000) // 2018-10-15T02:46:00.890Z
```

- 시간데이터를 JSON에 넘길 때 UTC를 문자열로 저장하는 방식이 각각 다르기 때문에 **유닉스 시간으로 바꾼 뒤에 JSON에 저장하는 것이 좋다.** (getTime() 메소드 활용)

     - parse하면 그냥 문자열로 돌려준다.

- Date객체의 시간을 문자열로 표현할 때는 아래 두개는 꼭 외워서 활용한다.

```js
const now = new Date()

now.toLocaleString() // 그 지역과 언어에 맞는 시간을 반환한다. // '2018. 10. 15. 오후 12:04:55'

now.toISOString() // 국제 표준 표기법으로 UTC 시간을 반환한다. // '2018-10-15T03:04:55.069Z' 
// Z가 붙어있으면 UTC기준이라는 뜻이다.
// toJASON() 하고 똑같이 출력한다.
```

주기적으로 실행되는 코드

```js
const start = new Date();

setInterval(() => {
  const end = new Date()
  console.log(`경과시간: ${end - start} 밀리초`)
}, 1000)  // 자바스크립트의 시간은 정확하지는 않다.
```

유닉스 시간을 UTC시간으로 바꾸는 방법

```js
const now = new Date()
const time = now.getTime()

console.log(now.toISOString())
console.log(new Date(time - 60000).toISOString())
```

moment.js 라는 라이브러리를 많이 사용한다.

[moment.js](https://momentjs.com/)

---

## Symbol

심볼은 객체의 속성 키로 사용하기 위해 만들어졌다.

내장 심볼(well-known symbol)을 객체의 속성 키로 사용하면, 특정 상황에서의 객체의 동작 방식을 마음대로 바꿀 수 있다.

심볼은 객체의 속성 키로 사용하기 위해 만들어졌다.

> 속성 이름 => 속성 키

> symbol은 라이브러리 작성자가 아니라면 쓰일 일이 거의 없다.

---

## Map

Map 객체는 데이터의 추가/삭제가 빈번하게 일어나는 경우 일반적인 객체보다 훨씬 빠르게 동작한다는 장점이 있는 반면, 
JSON 등으로 직렬화 하기 어렵다는 특징이 있다. 키-값 쌍 형태의 데이터를 다루면서 속도가 중요한 경우에는 Map의 사용을 고려하도록 한다.

- 문자열과 심볼만이 객체의 속성 키가 될 수 있는 반면, 어떤 값이라도 Map 객체의 키로 사용될 수 있다.

```js
const m = new Map();
const obj = {a:1}
m.set(obj, 1)

console.log(m.get(obj)) // 1
```

---

## SET

중복되지 않아야 하고 순서가 중요하지 않아도 된다면 SET을 쓴다.(집합의 합집합같은 성질을 지닌다.)

아래는 중복되는 배열을 제거할 때 작성할 수 있는 프로그램이다.

```js
function remove(arr) {
  const set = new Set(arr)
  return Array.from(set)
}

remove([1,2,3,1,3,4,5]) // [1, 2, 3, 4, 5]
```

