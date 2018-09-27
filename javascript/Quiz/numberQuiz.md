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

### 문제 6

자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.

### 문제 7

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.

### 문제 8

1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.

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

### 문제 11

두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)

### 문제 12

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.

### 문제 13

자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.
