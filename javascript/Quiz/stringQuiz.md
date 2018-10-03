### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```

```js
function insensitiveEqual(x, y) {
  if (x.toLowerCase() === y.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

insensitiveEqual('hello', 'Hello'); // true
insensitiveEqual('hello', 'hi'); // false
```

```js
function insensitiveEqual(x, y) {
  return x.toLowerCase() === y.toLowerCase()
}

insensitiveEqual('hello', 'Hello'); // true
insensitiveEqual('hello', 'hi'); // false
```

### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```

```js
function leftPad(s, n) {
  if (typeof s === 'string' && Number.isInteger(n) === true) {
  if (s.length < n) {
    return s.padStart(n);
  } else {
    return s
  }
} else {
  console.log('s는 문자, n은 숫자를 입력하시오')
}
}

leftPad(9, 9); // s는 문자, n은 숫자를 입력하시오
leftPad('hello', 9); //'    hello'
```

```js
function leftPad(s, n) {
  if (typeof s === 'string' && Number.isInteger(n) === true) {
  if (s.length < n) {
    const spaceNum = n - s.length
    return ' '.repeat(spaceNum) + s
  } else {
    return s
  }
} else {
  console.log('s는 문자, n은 숫자를 입력하시오')
}
}
```

### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```

```js
function countChar(input) {
  const obj = {};
  for (let i=0; i<input.length; i++){
    // 글자를 본적이 없다면 "글자":1을 적어준다.
    const char = input[i];
    if(!(char in obj)) {
      obj[char] = 1
    } else {
    // 글자를 본적이 있다면 횟수를 1 증가시킨다.
      obj[char]++
    }
  }
  return obj
}

countChar('tomato') // { t: 2, o: 2, m: 1, a: 1 }
```

### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)

```js
function isPalindrome(input) {
  arr = input.split('');
  num = arr.length
  for (i=0; i<num; i++){
    if(arr[i] === arr[num-i-1]) {
      continue;
    } else {
      return false;
    }
  }
    return true;
}

isPalindrome('토마토마토') // true;
isPalindrome('토마토바토') // false;
```

```js
function isPalindrome(input) {
  num = input.length
  for (i=0; i<=num/2-1; i++){
    if(input[i] !== input[num-i-1]) {
      return false;
    }
  }
    return true;
}

isPalindrome('토마토바토') // false;
isPalindrome('토마토마토') // true;
```

### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```



### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```

```js
function removeDuplicates(str) {
  let word = '';
  for (i=0; i<str.length; i++){
    if (word.includes(str[i])===false) {
      word += str[i]
    }
  }
  return word
}

removeDuplicates('tomato') // 'toma'
removeDuplicates('sentence') // 'sentc'
```

### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

- 루프로 먼저 풀어보세요.
- `split` 메소드를 이용해서 풀어보세요.



```js
// 루프

// 알고리즘을 미리 정리해서 코드를 작성한다.
// 아직 @을 본적 없다는 사실을 기억해 둔다.
// 새로 글씨를 쓸 빈칸을 만들어둔다.
// 입력받은 문자열을 한 글자씩 본다.
// 아직 @를 본적이 없다면 '*'를 쓴다.
// @을 봤다면 봤다고 기록한다.
// @을 본적이 있다면 위에서 본 글씨를 그대로 쓴다.

function emailIdToStar(input) {
  let seen = false
  let memory = ''
  for (i=0; i<input.length; i++){
    if (input[i] === '@'){
      seen = true;
    }

    if (seen === true) {
      memory += input[i];
    } else {
      memory += '*'
    }
  }
  return memory
  
}
emailIdToStar('jhd1925@gamil.com')
```


```js
// split 메소드
function emailIdToStar(input) {
  let email = input.split('@');
  email[0] = '*'.repeat(email[0].length)
  return email[0] + '@' + email[1]
  }

emailIdToStar('jhd1925@gamil.com')
```

### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.

```js
// 기억시킬 변수를 만든다.
// 문자열을 입력받는다.
// 문자 배열을 하나씩 체크한다.
// 대문자라면 소문자로 바꾸고 소문자라면 대문자로 바꾼다.
// 반환한다.

function swapCase(input) {
  let result = '';
  arr = input.split('');
  for(let item of arr) {
    (item === item.toUpperCase()) ? result += item.toLowerCase() : result += item.toUpperCase()
  }
  return result;
}

swapCase('JavaScirpt') // 'jAVAsCIRPT'
```

```js
function swapCase(input) {
  let result = '';
  arr = input.split('');
  arr.forEach((item, index, array) => {
    (item === item.toUpperCase()) ? result += item.toLowerCase() : result += item.toUpperCase()
  })
  return result
}

swapCase('JavaScirpt') // 'jAVAsCIRPT'
```

```js
function swapCase(input) {
  arr = input.split('');
  let newArr = arr.map(item => (item === item.toUpperCase()) ? item.toLowerCase() : item.toUpperCase());
  return newArr.join('');
}

swapCase('JavaScirpt') // 'jAVAsCIRPT'
```

### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

```js
function firstLetterToUpperCace(input) {
  // 문자열을 배열로 바꾼다.
  const arr = input.split('');
  // 결과를 입력받을 빈 str변수를 만든다.
  let result = '';
  // 조건문을 컨트롤하는 boolean타입을 만든다.
  let seen = true;
  for (i=0; i<input.length; i++){
    if (seen === true) {
      // true일 때는 문자를 대문자로 바꾼뒤 입력하고 false로 바꾼다.
      result += arr[i].toUpperCase();
      seen = false
    } else if(arr[i]===' '){
      // 공백문자라면 문자를 입력한 뒤 true로 바꾼다.
      result += arr[i]
      seen = true
    } else {
      // false라면 그냥 배열을 입력한다.
      result += arr[i]
    }
  }
  return result
}

firstLetterToUpperCace('i am hungry') // 'I Am Hungry'
```

```js
function firstLetterToUpperCace(input) {
  const arr = input.split('');
  let result = '';
  let seen = true;
  arr.forEach(item => {
    if (seen === true) {
      // true일 때는 문자를 대문자로 바꾼뒤 입력하고 false로 바꾼다.
      result += item.toUpperCase();
      seen = false
    } else if(item ===' '){
      // 공백문자라면 문자를 입력한 뒤 true로 바꾼다.
      result += item
      seen = true
    } else {
      // false라면 그냥 배열을 입력한다.
      result += item
    }
  })
  return result
}

firstLetterToUpperCace('i am hungry') // 'I Am Hungry'
```

```js
function firstLetterToUpperCace(input) {
  const arr = input.split('');
  let result = '';
  let seen = true;
  for (let item of arr) {
    if (seen === true) {
      // true일 때는 문자를 대문자로 바꾼뒤 입력하고 false로 바꾼다.
      result += item.toUpperCase();
      seen = false
    } else if(item ===' '){
      // 공백문자라면 문자를 입력한 뒤 true로 바꾼다.
      result += item
      seen = true
    } else {
      // false라면 그냥 배열을 입력한다.
      result += item
    }
  }
  return result
}

firstLetterToUpperCace('i am hungry') // 'I Am Hungry'
```

### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

```js
// 문자열을 입력받는다.
// 문자열을 공백을 기준으로 배열을 만든다.
// 문자가 가장 긴 단어 순으로 배열을 정리한다.
// 첫 인덱스 요소를 반환한다.

function findLongWord(input) {
  const arr = input.split(' ');
  arr.sort((x, y) => y.length - x.length);
  return arr[0];
}

findLongWord(prompt('단어를 입력하세요'))
```

### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.

```js
// 문자열 s와 자연수 n을 인수로 받는다.
// 문자열 s를 배열로 만든다.
// 배열의 0부터 n사의 문자만 잘라내서 새로운 배열에 담는다
// 새로운 배열을 문자열로 바꿔서 출력한다.

function numLetters (s, n) {
  const arr = s.split('');
  const newArr = arr.slice(0, n);
  return newArr.join('');
}

numLetters('탕수육탕수육탕수육', 5); // '탕수육탕수'
```

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js
// Camel case의 문자열을 입력받는다.
function camelToSnake(input) {
  // 출력할 빈 문자열을 만든다.
  let result = '';
  // 대문자인지 소문자인지를 반별하는 루프를 만든다.
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      // 순회중 대문자가 맞으면 빈 문자열에 언더바를 추가하고
      result += '_';
      // 대문자를 소문자로 바꿔서 추가한다.
      result += input[i].toLowerCase();
    } else {
      // 소문자라면 그냥 소문자 그대로 빈 문자열()에 추가한다.
      result += input[i];
    }
  }
  return result;
}

camelToSnake('helloWorld') // 'hello_world'
```

```js
function camelToSnake(input) {
  let result = '';
  for (let item of input) {
    item === item.toUpperCase() ? result = result + '_' + item.toLowerCase() : result += item
  }
  return result
}

camelToSnake('helloWorld') // 'hello_world'
```

```js
// Camel case의 문자열을 입력받는다.
function camelToSnake(input) {
  // 문자열을 배열로 만든다.
  let arr = input.split('');
  // 출력할 빈 배열을 만든다.
  let newArr =[]
  for (let i = 0; i < input.length; i++) {
    // 대문자인지 아닌지 확인하는 루프를 만들고 
    if (arr[i] === arr[i].toUpperCase()) {
      // 대문자가 나오면 대문자 앞 배열에 _(언더바)를 추가한 뒤
      newArr.push('_');
      // 대문자를 소문자로 바꾼다.
      newArr.push(arr[i].toLowerCase());
    } else {
      //대문자가 아니면 그냥 푸쉬한다.
      newArr.push(arr[i]);
    }
  }
  // 배열을 문자로 변환해 출력한다.
  return newArr.join('');
}

camelToSnake('helloWorld') // 'hello_world'
```



### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js
  // snake_case 문자열을 입력받는다.
function snakeToCamel(input) {
  // 반환받을 값을 result 변수로 선언한다.
  let result = ''
  // 만약 글자가 언더바가 아니고 이전순서가 언더바가 아니라면 변수에 글자를 추가하고
  for (let i=0; i<input.length; i++) {
    if(input[i] !== '_' && input[i-1] !== '_' ) {
      result += input[i]
    } else if (input[i-1] === '_') {
      // 글자 이전순서가 언더바라면 대문자로 바꾼뒤 푸쉬한다.
      result += input[i].toUpperCase();
    }
  }
  // result 값을 반환받는다.
  return result
}

snakeToCamel('hello_world_javascript') // 'helloWorldJavascript'
```

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```
```js
// 인수를 대입한다.
function split(str1, str2) {
  // 반환한 배열을 빈배열로 미리 선언한다.
  let arr = []
  // arr에 푸쉬한 구문은 삭제하기 위해 str1을 다른 변수에 담는다.
  let foo = str1 
  for (let i = 0; i < str1.length; i++) {
    // str의 i번째 인덱스가 str2의 문자열과 같을 때,
    if(str1[i] === str2) {
      // foo문자열의 글자 처음부터 str2가 있는 인덱스까지 잘라 arr에 요소추가를 한다.
      arr.push(foo.slice(0, foo.indexOf(str2)))
      // foo문자열에서 arr에 담은 문구와 str2부분은 잘라버리고 재대입한다.
      foo = str1.slice(i+str2.length, str1.length)
    } else if (i === str1.length - 1) {
      // 마지막엔 str2가 없으므로 남은 foo 문자열을 arr에 요소추가한다.
      arr.push(foo);
    }
  }
  // 회문으로 요소추가를 마친 배열 arr를 반환한다.
  return arr
}

split('let,const,var', ',') // [ 'let', 'const', 'var' ]
```
### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

```js
// 2진수를 표현하는 문자열을 입력받는다.
function convertBinary(input) {
  // 반환받을 빈 변수를 선언한다.
  let result = 0;
  // 입력받은 문자열을 배열로 만든다.
  let arr = [...input];
  // 배열을 거꾸로 뒤집는다.
  arr.reverse();
  // 0번 인덱스 요소가 1일 경우 2의 0제곱을 ... 2번 인덱스 요소가 1일 경우 2의 2제곱을
  for(let i = 0; i < arr.length; i++) {
    // 반환받을 변수에 더해나간다.
    if(arr[i] === '1') {result += 2 ** i}
  }
  // 반환값을 반환받는다.
  return result
}

convertBinary('1010') // 10
convertBinary('10100') // 20
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```

```js
// ### 문제 17

// 숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

// 예:
// ```
// insertHyphen('437027423'); -> '4370-274-23'
// ```

// 숫자로만 이루어진 문자열을 입력받는다.
function betweenTwoEvenNum(str) {
  // 빈 배열을 생성한다.
  let arr = [];
  // 짝수인덱스가 어디에서 발견되었었는지 알기 위한 변수 order를 선언하고 값0으로 지정하여 생성한다.
  let order = 0;
  for (let i = 0; i < str.length; i++) {
    // 회문을 돌려 i번째 문자를 숫자로 바꾼 값과 와 i+1인덱스를 숫자로 바꾼 값이 짝수라면
    if (parseInt(str[i]) % 2 === 0 && parseInt(str[i+1]) % 2 === 0) {
    // order의 값번째 인덱스부터 i번 인덱스까지 빈 배열에 요소추가한다.
    arr.push(str.slice(order,i+1));
    order = i+1
    // 만약 i가 마지막 순서에 도달하면 남은 문자열을 배열에 요소추가한다.
    } else if (i === str.length - 1) {
      arr.push(str.slice(order,i+1));
    }
  }
  // 배열을 '-' 구분자를 이용해 하나의 문자열로 결합하여 반환한다. 
  return arr.join('-');
}

betweenTwoEvenNum('344555667778899')
```