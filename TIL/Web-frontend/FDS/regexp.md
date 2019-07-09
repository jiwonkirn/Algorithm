# 정규표현식

## 정규 표현식 만들기

```js
// 정규식을 생성하는 방법

// 1. 정규식 리터럴
const re1 = /abc+/; // 컴파일이 한 번 되기 때문에 이 방법을 추천한다. 아래의 방법은 호출될 때 마다 생성하고 컴파일 과정이 많기 때문에 추천하지 않는다.

// // 2. RegExp 생성자
const re2 = new RegExp("abc+"); // 정규식을 동적으로 생성해야 할 때. (사용자나 서버의 데이터를 이용해 정규식을 생성할 때.)
```

```js
typeof re1; // 'object'
re1.constructor; // [Function: RegExp]
```

---

## 정규표현식 사용하기

문자열 래퍼 객체(String)의 match, search, split, replace 메소드가 정규 표현식을 지원

match는 검색할 때 많이 쓰이고, replace도 많이 쓰인다.

```js
"Hi, do you know your abc's?".match(/abc/);
/* 
[ 'abc',
  index: 21,
  input: 'Hi, do you know your abc\'s?',
  groups: undefined ] 
*/

"Hi, do you know your abc's?".search(/abc/);
// 21
// 'abc'(패턴)의 위치를 알 수 있다. indexOf와 비슷하다.

"Hi, do you know your abc's?".split(/abc/);
// [ 'Hi, do you know your ', '\'s?' ]
// 특정 패턴을 기준으로 쪼갤 수 있다.

"Hi, do you know your abc's?".replace(/abc/, "ABC");
// 'Hi, do you know your ABC\'s?'

"1234 abbbbbc 1234".match(/ab*c/);
/*
[ 'abbbbbc',
  index: 5,
  input: '1234 abbbbbc 1234',
  groups: undefined ]
*/
// b가 0회 이상 등장하는 패턴

"1234  1234".match(/ab*c/);
// null
// 패턴을 찾지 못한다면 null을 반환한다.

"1234 abbbbbc 1234".split(/ab*c/);
// [ '1234 ', ' 1234' ]

"1234 abbbbbc 1234".replace(/ab*c/, "{$&}");
// '1234 {abbbbbc} 1234'
// b가 0회이상 등장하는 패턴을 {}안에 패턴과 일치하는 모든 부분을 담아라
```

정규 표현식 객체에도 exec, test 메소드가 있음

```js
const re3 = /ab*c/;

re3.exec("1234 abbbbbc 1234");
/*
[ 'abbbbbc',
  index: 5,
  input: '1234 abbbbbc 1234',
  groups: undefined ]
*/

re3.test("1234 abbbbbc 1234");
// true
// 패턴과 일치하는게 있으면 true 아니면 false를 반환한다.
```

## 특수문자 사용하기

정규 표현식 안에서 사용되었을 때 특별한 의미를 가지는 특수문자들이 있다. 특수문자 앞에 위치한 백슬래시: 특수문자의 의미를 없앤다.

```js
"Hello*World".match(/\*/);
/*
[ '*', index: 5, input: 'Hello*World', groups: undefined ]
*/

"Hello World".match(/\d/);
// null

"Hello World 1234".match(/\d/);
// [ '1', index: 12, input: 'Hello World 1234', groups: undefined ]
```

백슬래쉬를 특수문자가 아닌 문자 앞에 붙이면 특별한 기능을 가진다. 반대로 특수문자 앞에 백슬래쉬를 붙이면 그냥 특수문자가 출력된다.

- `^`는 입력의 시작 부분에 대응된다.

  ```js
  "an A".match(/^A/); // null
  // 대응되지 않는다.

  "An E".match(/^A/); // [ 'A', index: 0, input: 'An B', groups: undefined ]
  // 대응된다.
  ```

- `$`는 입력의 끝 부분에 대응된다.

  ```js
  "eater".match(/t$/);
  "eat".match(/t$/);
  ```

- `*`는 0회 이상 반복되는 부분과 대응

- `+`는 1회 이상 반복되는 부분과 대응

  ```js
  "ac".match(/ab*c/);
  "ac".match(/ab+c/);
  "abbbbbbbc".match(/ab+c/);
  "abbbbbc".match(/ab?c/);
  ```

- `?` 는 0 또는 1회 등장하는 부분과 일치한다.

  만약 수량자 \*, +, ?, {} 바로 뒤에 사용하면, 기본적으로 탐욕스럽던(가능한 한 많이 대응시킴) 수량자를 탐욕스럽지 않게(가능한 가장 적은 문자들에 대응시킴) 만든다. 예를 들어, /\d+/를 "123abc"에 적용시키면 "123"과 대응돤다. 그러나 /\d+?/를 같은 문자열에 적용시키면 오직 "1"과만 대응된다.

  ```js
  "abbbbbc".match(/ab?c/); // null
  "123abc".match(/\d+?/); // [ '1', index: 0, input: '123abc', groups: undefined ]
  ```

- `.`는 개행문자를 제외한 모든 단일 문자와 대응된다. 예를 들어 `nay, an apple is on the tree`에서 `an`과 `on`에 대응되지만, `nay` 에는 대응되지 않는다.

  ```js
  "123 abc 123".match(/ .+/); // 앞에 어떤 문자가 와도 괜찮으나 그 앞에 공백이 있어야 한다,
  /*
  [ ' abc 123', index: 3, input: '123 abc 123', groups: undefined ]
  */

  "123 abc 123 abc 123".match(/ .+ /); // 개행 문자를 제외한 (스페이스 + 모든 문자 + 스페이스)와 일치
  /*
  [ ' abc 123 abc ',
  index: 3,
  input: '123 abc 123 abc 123',
  groups: undefined ]
  */

  "123 abc 123 abc 123".match(/ .+? /); // 이 패턴과 일치하는 것을 왼쪽에서부터 찾아보니, ' abc '가 있어서 반환
  /*
  [ ' abc ',
  index: 3,
  input: '123 abc 123 abc 123',
  groups: undefined ]
  */
  ```

```js
"<hello>world <java>script".match(/\<.+?\>/);
// <> 안에 있는 모든 문자를 찾되 최대한 적게 찾아라
/*
[ '<hello>',
  index: 0,
  input: '<hello>world <java>script',
  groups: undefined ]
*/

"<hello>world <java>script".match(/\<.+\>/);
/*
[ '<hello>world <java>',
  index: 0,
  input: '<hello>world <java>script',
  groups: undefined ]
*/
```

> VSCode에서 <...>태그를 찾 기 위해 찾기에서 `\<.+?\>`를 사용할 수 있다. 또한 +, \*, ?가 많이 쓰이니 기억한다.

## 포획괄호 사용

- (x): /(foo) (bar) \1 \2/ 안의 '(foo)' 와 '(bar)'는 문자열"foo bar foo bar"에서 처음의 두 단어에 대응되고 이를 기억한다. 즉 ()는 기억하겠다는 의미이다. 수량자 앞에서 쓸 때는 반복의 단위를 나타내기도 한다.

  ```js
  "foo foo".match(/(foo) \1/);
  /*
  [ 'foo foo', 'foo', index: 0, input: 'foo foo', groups: undefined ]
  */

  "foooo foo".match(/(fo+) \1/); // null // 'o'의 갯수가 다르기 때문

  "foooo foooo".match(/(fo+) \1/); // [...]
  ```

  예를 들어 <...>괄호 패턴을 (...)괄호 패턴으로 치환하고 싶을 때

  ```js
  "foo bar".replace(/bar/, "span"); // "foo span"

  // 앞의 패턴을 기억했다가 뒤의 부분으로 바꾸고 싶다.
  "foo <bar>".replace(/\<(bar)\>/, "($1)"); // 'foo (bar)'

  // 한꺼번에 많은 부분을 바꾸고 싶다.
  "foo <bar> <asdasdas> <asda>".replace(/\<(.*?)\>/g, "($1)"); // 'foo (bar) (asdasdas) (asda)'
  ```

  활용

  ```js
  // 이메일
  "ksh@fastcampus.co.kr".match(/(.+?)@(.+)/);
  /*
  [ 'ksh@fastcampus.co.kr',
  'ksh',
  'fastcampus.co.kr',
  index: 0,
  input: 'ksh@fastcampus.co.kr',
  groups: undefined ]
  */

  "ksh@fastcampus.co.kr".replace(/(.+?)@(.+)/, "아이디: $1, 도메인: $2");
  // '아이디: ksh, 도메인: fastcampus.co.kr'
  ```

  ```js
  "foofoofoo".match(/(foo)?/);
  /*
  [ 'foo', 'foo', index: 0, input: 'foofoofoo', groups: undefined ]
  */

  "foofoofoo".match(/(foo)+/);
  /*
  [ 'foofoofoo',
  'foo',
  index: 0,
  input: 'foofoofoo',
  groups: undefined ]
  */
  ```

- `(?:x)`: 비포획괄호, 포획괄호와 같이 부분 표현식을 하나의 단위로 취급하는 기능이 있지만 **대응된 문자열을 기억하는 기능이 빠진다.**

  ```js
  // 포획 괄호
  "foofoofoo".match(/(foo)*/);
  /*
  [ 'foofoofoo',
  'foo',
  index: 0,
  input: 'foofoofoo',
  groups: undefined ]
  */

  "foofoofoo".match(/(?:foo)*/);
  /*
  [ 'foofoofoo', index: 0, input: 'foofoofoo', groups: undefined ]
  
  */
  ```

- `x|y`: x 또는 y에 대응된다. `/green|red/`는 "green apple"의 'green'에 대응되고, "red apple."의 'red'에 대응된다.

- `{n}`: 앞 표현식이 n번 나타나는 부분에 대응된다. N은 반드시 양의 정수여야 한다. 예를 들어, `/a{2}/`는 "candy,"의 'a'에는 대응되지 않지만, "caandy,"의 모든 a 와, "caaandy."의 첫 두 a 에는 대응된다.

- `{n,m}`: n과 m은 양의 정수이고, n <= m를 만족해야 한다. 앞 문자가 최소 n개, 최대 m개가 나타나는 부분에 대응된다. m이 생략된다면, m은 ∞로 취급된다. (\*\*) 예를 들어, `/a{1,3}/`는 "cndy"에서 아무것에도 대응되지 않지만, "caandy,"의 첫 두 a 와 "caaaaaaandy"의 첫 세 a 에 대응된다. "caaaaaaandy"에서 더 많은 a 들이 있지만, "aaa"에만 대응된다는 점에 주목하도록 한다.

  ```js
  "caaaandy".match(/a{1,3}/);
  /*
  [ 'aaa', index: 1, input: 'caaaandy', groups: undefined ]
  */

  "caaaandy".match(/a{1,3}?/);
  /*
  [ 'a', index: 1, input: 'caaaandy', groups: undefined ]
  */
  ```

  각자 같은 의를 가진다.

  ```js
  "caaaandy".match(/a+/);
  "caaaandy".match(/a{1,}/); // 1 이상

  "caaaandy".match(/a*/);
  "caaaandy".match(/a{0,}/); // 0 이상

  "caaaandy".match(/a?/);
  "caaaandy".match(/a{0,1}/); // 0 혹은 1
  ```

## 문자셋

- `[xyz]`: 이 패턴 타입은 괄호 안의 어떤 문자(이스케이프 시퀀스까지 포함)와도 대응된다. 예를 들어, 패턴 `[a-d]` 는 패턴 [abcd] 와 똑같이 동작한다.

  ```js
  "abcabcbacbacbcabcabcabdef".match(/[abc]+/);
  /*
    [ 'abcabcbacbacbcabcabcab',
    index: 0,
    input: 'abcabcbacbacbcabcabcabdef',
    groups: undefined ]
    */
  ```

  점(.) 이나 별표 (\*) 같은 특수 문자는 문자셋 내부에서는 특수 문자가 아니다. 따라서 이스케이프시킬 필요가 없다. 하이픈을 이용하여 문자의 범위를 지정해줄 수 있다. (-제외)

  ```js
  "hello*****world".match(/\*+/);
  /*
  [ '*****', index: 5, input: 'hello*****world', groups: undefined ]
  */

  "hello*****world".match(/[*]+/);
  /*
  [ '*****', index: 5, input: 'hello*****world', groups: undefined ]
  */

  "hello*.!'***...!!!world".match(/[*.!']+/);
  /*
  [ '*.!\'***...!!!',
  index: 5,
  input: 'hello*.!\'***...!!!world',
  groups: undefined ]
  */
  ```

  특정 범위에 속하는 문자열 찾아내기

  ```js
  "hello world".match(/[a-z]+/);
  "hello WORLD".match(/[A-Z]+/);
  "hello 안녕하세요".match(/[가-힣]+/); // 한글의 마지막 글자는 힣이다.
  "hello 88881235132".match(/[0-9]+/);
  ```

- `[^xyz]`: 부정 문자셋, 괄호 내부에 등장하지 않는 어떤 문자와도 대응된다.

  ```js
  "hello WORLD".match(/[^a-z]+/);
  /*
  [ ' WORLD', index: 5, input: 'hello WORLD', groups: undefined ]
  */
  ```

- `\b`: 단어 경계에 대응된다.

  - `/\bm/`는 "moon"의 'm'에 대응됩니다
  - `/oo\b/` 는 "moon"의 'oo' 부분에 대응되지 않는다.
  - `/oon\b/`는 "moon"의 'oon'에 대응돤다.
  - `/\w\b\w/`: 이 단어와 일치하는 것은 없다.

- `\d`: 숫자 문자에 대응된다. [0-9]와 동일하다. (\*\*\*)

- `\D`: 숫자가 아닌 문자. [^0-9]와 동일하다.

- `\n`: 라인피드

- `\r`: 캐리지 리턴

- `\s`: 공백문자 (\*\*\*)

- `\w`: 밑줄 문자를 포함한 영숫자 문자에 대응. [A-Za-z0-9_] 와 동일하다.(\*\*\*)

> 정규표현식 뒤에 g를 붙이면 하나가 아닌 여러개를 검색하게 한다.

### 공백 모두 제거하기

```js
"hello    world   java    script".replace(/\s/g, ""); // 'helloworldjavascript'

"hello    world    java   script".match(/\w+/g);
// [ 'hello', 'world', 'java', 'script' ]

"hello    world    java   script".split(/\s+/g);
// [ 'hello', 'world', 'java', 'script' ]

"number: 123".match(/number: \d+/);
/*
[ 'number: 123',
  index: 0,
  input: 'number: 123',
  groups: undefined ]
*/

// 문자열 자체가 패턴과 일치하는지 비교하고 싶을 때
// 맨 앞에 ^, 맨 뒤에 $를 붙여주면 된다.
"number: 123".match(/^number: \d+$/);
/*
[ 'number: 123',
  index: 0,
  input: 'number: 123',
  groups: undefined ]
*/
```

---

## 플래그를 이용한 고급 검색

- g 전역 검색

- i 대소문자 구분 없는 검색

  ```js
  "HELLO WORLD".match(/[a-z]+/i);
  ```

- m 다중행(multi-line) 검색

  ```js
  // m 플래그를 붙이지 않았을 때
  // ^ : 문자열의 첫 부분에 대응
  `Hello
  World
  Java
  Script`.match(/^\w+/g); // ['Hello']

  // m 플래그를 붙였을 때
  // ^ : 줄의 첫 부분에 대응
  `Hello
  World
  Java
  Script`.match(/^\w+/gim); // [ 'Hello', 'World', 'Java', 'Script' ]
  ```

- u 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급합니다.
- y "sticky" 검색을 수행. 문자열의 현재 위치부터 검색을 수행합니다. sticky 문서를 확인하세요.

> case sensitive: 대소문자에 민감한, case insensitive: 대소문자에 민감하지 않은

### 예제: 전화번호 형식 검사

```js
const input = "010-1010-5678";
// 휴대폰 번호라고 가정
// 맨 앞에는 010, 011, 016, 017, 018 등의 번호가 올 수 있다.
// 중간 국번은 세자리 숫자이거나 네자리 숫자이다.
// 마지막 번호는 네자리 숫자이다.
input.match(/^(010|011|016|017|018)-\d{3,4}-\d{4,4}$/);
```

> 정규표현식을 검사하는 사이트 https://regexr.com/
