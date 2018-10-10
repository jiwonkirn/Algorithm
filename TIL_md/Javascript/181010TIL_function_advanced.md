# 181010 TIL 함수 심화

## 함수 심화

### this 바꿔치기

`bind`, `call`, `apply` this를 임의로 원하는 값을 가리키게 만들 수 있다.

```js
// 다음은 공통된 코드입니다.
function printGrade (grade) {
    console.log(`${this.name}님의 점수는 ${grade}점 입니다.`)
}
const student = {name : '자원'}
```

`bind`
```js
const printGradeForJiwon = printGrade.bind(student)
printGradeForJiwon(100) // '지원님의 점수는 100점입니다.'
```

`call`
```js
printGrade.call(student, 100) // '지원님의 점수는 100점입니다.'
```

`apply`
```js
printGrade.apply(student, [100]) // '지원님의 점수는 100점입니다.'
```

---

### 나머지 매개변수(rest parameters)

나머지 매개변수를 이용하면 입력받은 인수를 갯수에 상관없이 배열로서 모두 입력받은 수 있다. 실제 배열이기 때문에 <b>배열 메소드를 사용할 수 있다.</b>
(...문법을 사용한다.)

```js
function sum (...ns) {
    return ns.reduce((acc, item) => acc + item, 0)
}

sum(1,2,3,4) //10
```

`...`문법은 마지막 매개변수 자리에만 사용할 수 있다.

```js
function sum (name, ...ns) {
    console.log(`${name}님의 점수는 ${ns.join(', ')}입니다.`)
}
sum ('김지원', 66, 77, 88) // 김지원님의 점수는 66, 77, 88입니다.
```

---

### 화살표 함수

화살표 함수 리터럴은 다음과 같다. 

```js
const add = (x, y) => { return x + y; }
const add = (x) => { return !x; }
```

매개변수가 하나이거나 구문이 하나라면 다음과 같이 표기할 수 있다.

```js
// 구문이 하나이기 때문에 중괄호와 return 이 생략된다.
const add = (x, y) => x + y

// 매개변수가 하나이기 때문에 괄호가 생략됐다.
const add = x => !x
```

화살표 함수는 다음과 같은 특징을 가진다.

- 화살표 함수는 생성자로 사용할 수 없다. 즉 prototype을 갖지 못한다.

-  화살표 함수 내부에서 `yield` 키워드를 사용할 수 없다.

- 스스로 `this`, `arguments`, `super`, `new.target`을 가지지 않는다.

여기서 `this`, `arguments`, `super`, `new.target`를 가지지 않는다는 말은 사용할 수 없다는 뜻이 아니고, `this`가 가리키는 방식이 다름을 의미한다.

> 화살표 함수에서의 `this`

- 화살표 함수가 전역스코프 바로 아래있는 객체 리터럴에 정의되었다면 this는 전역스코프(window)를 가리킨다.

```js
```

- 화살표 함수가 정의된 스코프에 존재하는 `this`를 가리킨다. 

```js
    // 아래와 같이 화살표 함수가 정의된 함수 스코프 안에서의 name을 찾는다.
    function Person(name) {
        this.name = name;
        this.getName = () => {
            return `${this.name}님 안녕하세요.`
        }
    }

    const jiwon = new Person('jiwon') // jiwon = Person {name: 'jiown', getName: 'jiwon님 안녕하세요'}

    function printHello(func) {
        console.log(func())
    }

    printHello(jiwon.getName) // jiwon님 안녕하세요
```

> function 키워드의 `this`

- function 키워드에서 `this`는 호출된 장소를 중심으로 `this`를 가리킨다.

```js
    function Person(name) {
        this.name = name;
        this.getName = function() {
            return `${this.name}님 안녕하세요.`
        }
    }

    const jiwon = new Person('jiwon') // jiwon = Person {name: 'jiown', getName: 'jiwon님 안녕하세요'}

    function printHello(func) { 
        console.log(func())
    }

    // function 키워드 함수는 호출된 스코프를 기준으로 this를 찾는데, 
    // printHello에는 this.name이 존재하지 않는다.
    printHello(jiwon.getName) //'님 안녕하세요'
```

아래의 코드를 통해 호출 기준을 알 수 있다.

```js
    function printHello(func) { 
        name = 'jieun'
        console.log(func())
    }

    // function 키워드 함수는 호출된 스코프를 기준으로 this를 찾는데, 
    // 호출된 스코프인 printHello에 name은 jieun이므로 'jieun님 안녕하세요' 를 출력한다.
    printHello(jiwon.getName) //'jieun님 안녕하세요'
```







