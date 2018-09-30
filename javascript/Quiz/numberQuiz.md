### 문제 1

두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요.

```javascript
function larger(x, y) {
  const a = x;
  const b = y;
  let c;

  // a가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다.
  if (a > b) {
    c = a;
  } else {
    c = b;
  }
  return c;
}

larger(1, 2);
```

```js
function larger(a, b) {
  let c;

  // a가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다.
  if (a > b) {
    c = a;
  } else {
    c = b;
  }
  return c;
}
```

```js
function larger(a, b) {
  // a가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다.
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
```

```js
function larger(a, b) {
  // a가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다.
  return a > b ? a : b;
}
```

### 문제 2

세 수를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

에러를 발생시키는 코드는 다음과 같습니다.

```js
throw new Error('입력값이 잘못되었습니다.');
```

```js
function isPositive (x, y, z) {
  if (x * y * z > 0) {
    return true;
  } else if (x * y * z <= 0) {
    return false;
  } else {
    throw new Error('입력값이 잘못되었습니다.');
  }
}

console.log(isPositive (1, 2, 3)); //true
console.log(isPositive (1, 2, -3)); //false
console.log(isPositive (1, 2, '3')); //true
console.log(isPositive (1, 2, 'haha')); //Error
```

### 문제 3

세 수 `min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- `min`보다 `input`이 작으면, `min`을 반환합니다.
- `max`보다 `input`이 크면, `max`를 반환합니다.
- 아니면 `input`을 반환합니다.

예:
```
limit(3, 7, 5); -> 5
limit(3, 7, 11); -> 7
limit(3, 7, 0); -> 3
```

```js
function limit (min, max, input) {
  if (min > input) {
    return min;
  } else if (max < input) {
    return max;
  } else {
    return input;
  }
}

console.log(limit (1, 2, 3)); //2(min) min > input
console.log(limit (2, 1, 3)); //1(max) input > max, input > min
console.log(limit (2, 4, 3)); //1(input) input < max, input > min
```

### 문제 4

어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요. 이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.

```js
function evenOrOdd(x) {
  //만약 x가 짝수면 'x: 짝수'라고 출력
  if (x % 2 === 0) {
    console.log(x + ': 짝수');
  } else {
    //만약 x가 홀수면 'x: 홀수'라고 출력
    console.log(`${x}: 홀수`); // $를 이용해 문자열에서도 x를 number로 출력
  }
}

for (a = 1; a <= 20; a++) {
  evenOrOdd(a);
}
```

### 문제 5

100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.

```js
for (let i = 1; i <=100; i++) {
  if ((i % 3 === 0) && (i % 5 ===0)) {
    console.log(`${i}: 공배수`)
  } else {
    console.log(`${i}: 아님`)
  }
}
```

### 문제 6

자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.

```js
const input = prompt("자연수를 입력하세요");
// const naturalNumber = 12;

let naturalNumber =  Number.parseInt(input);

for (i=1; i <= naturalNumber; i++) {
  if ((naturalNumber % i === 0) && (naturalNumber > 0) && (Number.isInteger(naturalNumber) === true)) {
    console.log(`${i}는 약수`);
  } else {
    console.log(`${i}는 약수가 아님`);
  }
}
```

### 문제 7

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.

```js
// 입력 받은 수의 타입은 string이기 때문에 number 타입으로 변환한다.
let num = parseInt(prompt(`소수를 판별합니다. 2이상의 자연수를 입력해 주세요`))

function isPrimeNumber(num) {
  // 2 이상의 자연수를 받았는지에 대해 확인
  if ((num < 2) || (Number.isInteger(num) === false)) {
    console.log("이 수는 2 이상의 자연수가 아닙니다.")
  } else {
    for (i=2; i<num; i++) {
    // 나머지가 0이 있으면 나눠지는 합성수
    if (num % i === 0) {
      // 2부터 (num - 1) 까지의 수 중에 num을 나눴을 때 
      //나머지가 0인 경우가 나왔으므로 합성수
      return false
    }
  }
  // 2부터 (num - 1) 까지의 수 중에 num을 나눴을 때 
  // 나머지가 0일 때가 없으므로 num은 소수
  return true
  }
}

isPrimeNumber(num);
```

### 문제 8

1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.

```js
for (let i=1; i <=100; i++) {
  const str = i.toString()
  if (str.includes('3') || 
  str.includes('6') || 
  str.includes('9')
  ) {
    console.log('짝!')
  } else {
    console.log(i)
  }
}
```

### 문제 9

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1을 입력받은 경우:
```
*
```

3을 입력받은 경우:
```
*
* *
* * *
```

5를 입력받은 경우:
```
*
* *
* * *
* * * *
* * * * *
```

```js
//입력 받은 수는 string 타입이므로 number타입으로 변환한다. 
let num = parseInt(prompt("양수를 입력해 주세요"))

function makeStarPattern(num) {
  const star = '* ';
  // num이 0보다 큰 자연수가 맞으면
  if (num > 0 && Number.isInteger(num) === true){
    // 입력받은 수 에 따른 패턴을 출력한다.
    for (i=1; i<=num; i++) {
    console.log(star.repeat(i));
    }
  } else {
    // 음수이거나 소수일 경우
    console.log('양수가 아닙니다.');
  }
}

makeStarPattern(num);
```

### 문제 10

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1를 입력받은 경우:
```
*
```

3를 입력받은 경우:
```
  *
 * *
* * *
 * *
  *
```

5를 입력받은 경우:
```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```

```js
let num = parseInt(prompt("양의 정수를 입력해주세요"))

function makeStarPattern(num) {

  if (num > 0 && Number.isInteger(num) === true){
    const star = '* '
    const blank = ' '
    for (i=1; i<=num; i++) {
      // 앞에 공백문자를 규칙에 맞게 추가
      console.log(blank.repeat(num-i) + star.repeat(i));
      }
      // 별이 줄어드는 제어구문
    for (i=num-1; i>=1; i--) {
      console.log(blank.repeat(num-i) + star.repeat(i));
    }
  } else {
    console.log('양의 정수를 입력해주세요')
  }
  
}

makeStarPattern(num)

```

### 문제 11

두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)

### 문제 12

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.

### 문제 13

자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.
