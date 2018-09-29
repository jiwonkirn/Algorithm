
---

#  180928 TIL(Today I Learned)

<br>

## 0. 목차 

1. string type

    - 1-1. 
    - 1-2. 
    - 1-3. 

1. boolean type

    - 2-1. 
    - 2-2. 
    - 2-3. 
    - 2-4. 

1. null & undefined

    - 3-1. 
    - 3-2. 
    - 3-3. 
    - 3-4. 

1. TIF (Today I Found Out)

1. Reference

<br>

---

## 1. string type

string 타입이란 문자열을 의미한다. javascript 문자열은 유니코드를 통해 출력된다.

unicode : 전 세계의 모든 문자를 컴퓨터에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 표준이며, 유니코드 협회(Unicode Consortium)가 제정한다.

- Unicode Code Point : 문자에 새겨진 번호, 입력시에는 소문자로 입력한다.

[유니코드 위키백과](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C)

[graphemica - Unicode Code Point 확인](http://graphemica.com/)

<br>

---

### 1-1. 문자열(string) 리터럴

문자열은 다음과 같은 형식으로 표기가 가능하다. 문자열끼리는 quote(',",`) 안에 내용만 같다면 같은 값으로 인식된다. 

```javascript
'hello world' // 'string' // 작은 따옴표 문자열

"hello javascript" // "string" // 큰 따옴표 문자열

`My name is jiwonKim` // `string` // 템플릿 리터럴 (Template literal)
```

<br>

---

### 1-2. 템플릿 리터럴 (Template literal)

backtick(`)으로 둘러싸는 문자열로 탬플릿 리터럴의 내샵(interpolation) 기능을 사용하면 동적인 코드를 쉽게 작성 할 수 있다.

```js
const name1 = 'Foo';
const name2 = 'Bar';
const sentence = `${name1} meets ${name2}!`; 
console.log(sentence); // 'Foo meets Bar'
```

개행도 쉽게 할 수 있다. backtick(`)을 사용하지 않는다면 Escape Sequence를 사용해야한다.
```js
`hello
world
javascript!
`
```

다른 언어와 javascript를 통합할 때 쓰는 특이한 함수 호출 방식을 사용하는데 이를 `tagged template literal` 이라 한다.

[MDN - tagged template literal](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)

<br>

---
### 1-3. Escape Sequence

유니코드 코드포인트(Unicode code point)를 통해 특수문자, 문자 등을 직접 문자열에 넣을 수 있다. 단 다른 종류의 따옴표들 끼리는 자유롭게 쓸 수 있다.

```js
\'  // 홀따옴표
\"  // 쌍따옴표
\\  // 백슬래시
\n  // 개행(라인피드, LF)
\r  // 개햏(캐리지 리턴. CR)
\t  // 탭
\uXXXX  //유니코드문자(네자리)
\u{X....}  //유니코드문자(다섯자리 이상 _ 최신 유니코드 문자가 보통 5자리이다.)
\$  // 달러($)
\` // 백틱(`)
```

결과를 확인하려면 출력해야 한다. 

```js
console.log('\uD55C\uAE00'); // 한글
console.log('\u{1F435}'); // 이모티콘 출력
```

개행 문자는 운영체제마다 다르기 때문에 enter를 쳤을 때 입력되는 문자가 다르다.

- 윈도우 = ‘\r\n’ (CR + LF)

- 맥/리눅스 = ‘\n’ (LF)

결국 커밋한 파일을 공유할 때 등 문제가 발생할 수 있다.

(git에서 개행문자를 바꿀 수 있는 옵션이 존재한다.)

<br>

---
### 1-4. 문자열과 연산자

문자열에서도 연산자를 사용할 수 있다. 비교 연산자도 사용할 수 있는데 이는 문자도 각각의 유니코드 코드포인트 값을 가지고 있기 때문이다.

- 문자열 연결하기

    ```javascript
    'hello' + 'world'; // 'helloworld'

    //덧셈은 왼쪽에서 오른쪽으로 진행하기 때문에 다른 값이 나온다.
    'number' + 1 + 3;   //number13
    1 + 3 + 'number';   //4number
    ```

- 등호 비교

    ```javascript
    'hello' === 'hello'; // true
    'hello' !== 'hello'; // false
    ```

- 유니코드 코드포인트 비교. 앞에서부터 한 글자씩 차례대로 비교합니다.

    ```javascript
    'a' < 'b'; // true
    'aaa' < 'abc'; // true // 첫 a가 같으므로 그 다음 문자를 비교한다.
    'a' < 'Z'; // false // Z가 유니코드상 앞선 순위에 있다.
    '한글' < '한국어'; // false
    '2' < '10'; // false
    ```

- 문자열을 배열로 바꾸기

    ```javascript
    [...'hello']; // ['h', 'e', 'l', 'l', 'o']
    ```

<br>

---
### 1-5. 속성 및 메소드

string타입도 래퍼 객체의 속성과 메소드를 사용할 수 있다.


- 문자열의 길이를 나타낸다.
    
    ```javascript
    'string'.length; //6

    // 다음과 같이 변수에 문자열을 선언해서 대입해도 동작한다.
    const foo = ‘hello’
    foo.length // ‘5’ // 래퍼객체이기 때문
    ```

- 문자열을 연결한다.

    ```javascript
    'hello'.concat('fun', 'javascript'); // 'hellofunjavascript'
    ```

- 지정된 문자열을 반복하는 새 문자열을 생성한다.

    ```javascript
    '*'.repeat(3); // '***'
    ```

- 특정 문자열이 포함되어 있는지 확인하기

    ```javascript
    'hello javascript'.includes('hello'); // true
    'hello javascript'.startsWith('he'); // true
    'hello javascript'.endsWith('ript'); // true
    'hello javascript'.indexOf('java'); // 6
    'hello javascript'.indexOf('python'); //-1 //존재하지 않는다는 뜻
    ```

- 문자열의 특정 부분을 바꾼 새 문자열 생성하기

    ```javascript
    'hello javascript'.replace('java', 'type'); // 'hello typescript'
    ```

- 문자열의 일부를 잘라낸 새 문자열 생성하기

    ```javascript
    'hello'.slice(2, 4); // 'll'

    // 0 h 1 e 2 l 3 l 4 o 5  문자 사이사이 공간에 번호를 매겨 그 사이를 자르기 때문에 'll'이 출력된다.

    ```

- 좌우 공백문자를 제거한 새 문자열 생성하기

    ```javascript
    '   hello  '.trim(); // 'hello'
    '   hello  '.trimLeft(); // 'hello  '
    '   hello  '.trimRight(); // '   hello'
    ```

- 좌우 공백문자를 추가한 새 문자열 생성하기

    ```javascript
    'hello'.padStart(8); // '   hello'
    'hello'.padEnd(8); // 'hello   '
    ```

- 문자열을 특정 문자를 기준으로 잘라 새 배열 생성하기

    ```javascript
    'hello!fun!javavscript'.split('!'); // ['hello', 'fun', 'javascript']
    'hello'.split(''); // ['h', 'e', 'l', 'l', 'o']

    // split으로 이메일의 아이디값 받기
    'jhd1925@gmail.com'.split('@')[0]; // 'jhd1925'

    ```

- 모든 문자를 소문자, 혹은 대문자로 변환한 새 문자열 생성하기

    ```javascript
    'Hello JavaScript'.toLowerCase(); // 'hello javascript'
    'Hello JavaScript'.toUpperCase(); // 'HELLO JAVASCRIPT'

    // 대소문자 관계없이 처리
    'Hello JavaScript'.toLowerCase() === 'hello javaScript'.toLowerCase()
    ```

<br>

---
### 1-6. 인코딩

문자의 유니코드를 어떤식의 2진수로 입출력할지를 





---
## 2. boolean type

### 2-1. 변수(variable)의 선언(declare)

- 변수는 `let` 과 `const`로 선언한다. 다만 const는 값을 재대입할 수 없기 때문에 `상수`라고 한다.

    ```javascript
    let a;
    a = 1; //a의 값은 1
    a = 2; //a의 값은 2
    a += 2; //a의 값은 4

    // 다음과 같이 한 번에 선언하는 것도 가능하다.
    let x = 1, y = 3, nothing;

    const a = 1; //const는 선언과 값 대입을 같이 해주어야 한다.
    a = 2; //에러가 발생한다.
    ```

    코드가 길어지면 변수가 재대입 될 수 있기 때문에 `const를 사용하는 것이 좋다.`

<br>

---
### 2-2. 식별자(Identifier) 규칙

- 변수의 이름을 `식별자(Identifier)`라 한다. 식별자를 사용할 때는 아래와 같은 `식별자 규칙`이 존재한다.

    - 숫자, 알파벳, 달러 문자($), 언더스코어(_)가 포함될 수 있다.
    - 숫자로 시작되어서는 안 된다.
    - 예약어는 식별자가 될 수 없다.

<br>

---
### 2-3. Camel Case

- 식별자는 띄어쓰기를 할 수 없기 때문에 이름을 지을 때 두번쨰 단어의 시작은 대문자로 표기한다.

    - `fastCampus`
    - `helloJavascriptWorld`

<br>

---
### 2-4. 타입(type)

- 값의 종류를 나타내며 자료형(data type)의 줄임말이다.

    - number
    - string
    - boolean
    - object
    - undefined

    ```javascript
    const three = 3;
    typeof three; //number
    typeof three + 3; //number3
    typeof (three + 3); //number 
    //서로 다른 연산자를 사용할 때는 괄호를 써주는 것이 좋다.
    ```

<br>

---
## 3. null & undefined

### 3-1. number 타입의 리터럴

- 수를 나타내는 타입으로 다음과 같은 리터럴을 가진다
    ```js
    7; // 정수 리터럴
    2.5; // 부동 소수점 리터럴
    0b111; // 2진수 리터럴 (binary literal)
    0o777; // 8진수 리터럴 (octal literal)
    0xf5; // 16진수 리터럴 (hexademical literal)

    0x4d === 77; // true
    0b1001101 === 77; // true
    ```

<br>

---

### 3-2. 정수와 실수 판별

-   정수와 실수를 판별하는 메소드는 다음과 같다.

    ```js
    Number.isInteger(1); // true
    Number.isInteger(0.1); // false
    ```

<br>

---

### 3-3. 연산(Operate), 연산자(Operator)

-  === 연산자, == 연산자

    ```js
    1 == '1' //true //string을 number로 변환한 후 같은지 확인하게 해서 true가 나옴
    1 === '1' //false
    ```

-   증가 / 감소 연산

    ```js
    let a = 1;
    ++a // 2  (1을 증가시킨 후의 값을 표현식의 결과값으로 반환, a의 값은 a+1)
    a++ // 1  (1을 증가시키기 전 값을 표현식의 결과값으로 반환, a의 값은 a+1)
    --a // 0
    a-- // 1

    //변수에 표현식을 대입할 경우.
    let b = 2;
    b = a++; //b는 1로 출력된다. 표현식의 결과값은 1이기 때문이다.
    ```

- 할당 연산

    ```js
    let x = 0;
    x += 1;

    // `+=` 연산은 아래 연산과 완전히 같은 동작을 합니다.
    x = x + 1;

    // 덧셈 뿐 아니라 다른 모든 산술 연산자에 대해 할당 연산을 할 수 있습니다.
    x -= 1;
    x *= 2;
    x /= 3;
    x %= 4;
    x **= 5;
    ```

<br>

---

### 3-4. 연산자의 우선순위

- 연산자는 각자 우선순위를 가지며 우선순위부터 식을 풀어나간다.

    [*연산자의 우선순위*](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)

<br>

---

### 3-5. 부동 소수점 (Floating Point) vs 고정 소수점 (Fixed Point)

- 부동 소수점 (Floating Point)

    부동 소수점은 컴퓨터가 소수를 처리하는 방식이다. 소수를 2진법으로 처리하기 때문에 오차가 존재한다.

- 고정 소수점 (Fixed Point)

    실수(소수)를 정확하게 다루기 위해 사용하는 기능으로, 관련 라이브러리를 사용해야 한다.

    [*runkit - 고정소수점 라이브러리*](https://runkit.com/embed/iw9fpzeivj7g)

<br>

---

### 3-6. number타입을 가지는 여러 값들

-  NaN (Not a Number)

    계산 불가능한 연산의 결과값을 나타내기 위해 사용된다.

    ```js
    0 / 0; // NaN
    1 * 'hello'; // NaN

    NaN === NaN   // 무조건 false
    ```
    '===' 연산자는 숫자 타입에 특화된 연산자이다. 

    NaN은 숫자가 아니기 때문에 `“어떤 숫자와도 같지 않다”`는 규칙이 있다. 
    즉 `NaN은 같은 number타입의 NaN`과 같지 않다.
    ```js
    // 값이 NaN임을 확인하기 위해서는 다음 메소드를 사용한다.
    const thisIsNan = NaN;

    Number.isNaN(thisIsNan); // true
    Object.is(thisIsNan, NaN); // true
    ```

-   -0

    0과 -0을 비교 연산을 해보면 결과값이 true로 나온다.

    ```js
    0 === -0; // true
    1 * -0; // -0
    1 + -0; // 1
    ```

    이는 ===연산자가 number타입에 최적화된 연산자이기 때문에 그런데, javascript에서 두개의 값이 다른 값임을 다음을 통해 알 수 있다.

    ```js
    Object.is(0, -0); // false
    ```

    0이 아닌 어떤 수를 0 혹은 -0으로 나눌 때에도 결과값이 다르다.
    ```js
    1 / 0; // Infinity
    1 / -0; // -Infinity
    ```

-   infinity

    javascript에서 무한대임을 나타내는 값이다.

    ```js
    1 / Infinity; // 0
    1 / -Infinity; // -0
    ```

    Number.isFinite는 어떤 값이 Infinity인지 아닌지 판별해준다.

    ```js
    Number.isFinite(1); // true
    Number.isFinite(Infinity); // false
    Number.isFinite('1'); // false
    isFinite('1'); // true - `isFinite`는 문자열을 숫자로 변환한다.
    ```

<br>

---

### 3-7. parseInt, parseFloat

-   문자열을 number 타입으로 바꾸기 위해 parseInt 혹은 parseFloat 함수를 사용할 수 있다.

    ```js
    parseInt('123'); // 123
    parseInt('110', 2); // 6 (문자열을 2진수로 간주한다.)
    parseFloat('12.345'); // 12.345
    parseInt('hello'); // NaN
    ```

-   NaN과 parseInt를 이용하여 숫자만을 입력받아 값을 더해주는 기능을 만들 수 있다.

    ```js
    // 사용자에게 a, b의 값을 입력받는다.
    const a = prompt('a: ');
    const b = prompt('b: ');

    // 입력받은 값이 문자열이므로 숫자로 반환한다.
    const parsedA = parseInt(a);
    const parsedB = parseInt(b);
    // parsedA가 숫자가 아니거나 parsedB가 숫자가 아니라면...
    if (Number.isNaN(parsedA) || Number.isNaN(parsedB)) {
    alert('숫자를 입력해 주세요')
    } else {
    alert(parsedA + parsedB)
    }
    ```

<br>

---

### 3-8. Math 객체

-   Math 객체에는 수 연산을 위한 많은 메소드와 상수들이 내장되어 있다.

    ```js
    // 절대값, 올림, 내림, 반올림, 소수점 아래 잘라내기
    Math.abs // 절댓값
    Math.ceil // 올림
    Math.floor // 내림
    Math.round // 반올림
    Math.trunc // 소수점 아래 잘라내기

    // 최대값, 최소값
    Math.max
    Math.min

    // 랜덤
    Math.random
    ```
-   Math 객체의 메소드를 이용한 주사위 게임과 카드게임

    ```js
    // 주사위게임
    Math.ceil(Math.random()*6);

    // 카드게임
    const CARDS = ['a', 'b', 'c'];
    CARDS[Math.floor(Math.random()*2)]
    ```

<br>

---

### 3-9. number 타입의 메소드

-   JavaScript는 래퍼 객체(wrapper object)라는 기능을 제공한다. 때문에  `number 타입은 객체가 아니지만, 마치 객체처럼 메소드를 사용할 수 있다. `

    ```js
    (12345).toString(); // '12345'
    (12345).toLocaleString(); // '12,345'
    (1.2345).toFixed(2); // '1.23'
    ```

<br>

---
## 4. TIF (Today I Found Out)

지원

```javascript
1. 경험(Fact)

    자바스크립트의 값을 다루는 방법과 number 타입에 대해 학습했다.


2. 감정(Feeling)

    복잡하고 어려운 느낌까지는 아니지만 완전히 이해한 것 같지 않아 아쉽다.


3. 교훈(Finding) & 계획(Future)

    함수 및 조건문 짜는 것에 대해 훈련해야할 필요성을 느꼈다. 
    
    우선은 기초 문법에 대해 충분히 학습하고 강사님꼐서 내주신 퀴즈 위주로 연습하려고 한다. 
    
    코드를 작성할 때 주석을 잘 기입하는 습관을 들이려고 한다.

```

윤재

```javascript
```

<br>

---

## 5. Reference

[연산자의 우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)

[runkit 고정소수점 라이브러리](https://runkit.com/embed/iw9fpzeivj7g)

[강사님 퀴즈 링크](https://github.com/fds11/fds-js-quiz)

<br>

---
