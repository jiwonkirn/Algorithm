# fds 아침 퀴즈

## 181012 금요일

### 재귀함수를 이용한 숫자의 계승

숫자의 계승(factorial)을 찾는 예제를 재귀함수를 이용하여 작성해 보세요.
숫자의 계승은 1 부터 그 숫자까지를 전부 곱한 값이며, 숫자 뒤에 느낌표를 붙여서 표시합니다.
즉, 4! 는 4x3x2x1=24 입니다.
repl.it 에 계승을 구하는 재귀함수를 작성해 보세요.
함수에 0 이나 음수를 인자로 받을 경우 에러가 생기는 조건문 또한 포함해보세요.

```js
// 문자열 4!를 입력받을 경우 ==================================

function factorialRec(n) {
  // 문자열 'n!'에서 !앞자리만 잘라서 정수로 반환한다.
  let num = parseInt(n.slice(0, n.indexOf('!')))
  // ! 앞자리가 0이면 에러를 발생시킨다.
  if (num <= 0) {
    throw new Error("인수를 0 이상의 자연수로 입력해주세요.");
  // ! 앞자리가 1이면 1을 반환한다.
  } else if (num === 1) {
    return 1;
  // ! 앞자리가 0도 아니고 1도 아니라면
  } else {
  // 재귀함수를 통해 숫자의 계승이 되게 한다.
    return num * factorialRec((num - 1).toString() + "!");
  }
}

// factorialRec('0!') // '인수를 0 이상의 자연수로 입력해주세요.'
factorialRec("4!"); // 24
factorialRec("10!"); // 3628800


// 숫자 4를 입력받을 경우 =====================================

function factorialRec(n) {
  if (n <= 0) {
    throw new Error("인수를 0 이상의 자연수로 입력해주세요.");
  } else if (n === 1) {
    return 1;
  } else {
    return n * factorialRec(n - 1);
  }
}

factorialRec(0); // '인수를 0 이상의 자연수로 입력해주세요.'
factorialRec(4); // 24


// if문 대신 다항 연산을 이용한 경우 ============================

function factorialRec(n) {
  return n <= 0 ? 
    "인수를 0 이상의 자연수로 입력해주세요." : 
    n === 1 ? 
        1 : 
        n * factorialRec(n - 1);
}

factorialRec(0); // '인수를 0 이상의 자연수로 입력해주세요.'
factorialRec(4); // 24
```

---

## 181015 월요일

### 기본 매개변수를 이용한 문자열 출력 프로그램

"One for X, one for me.“가 반환되는 함수(TwoFer)를 만들어 보세요.X 자리에는 이름이 들어가거나, 이름이 들어가지 않는다면 “you”가 들어가야 합니다.가령, 이름으로 “Alice”가 들어왔다면, 결과는 “One for Alice, one for me.“가 되어야 합니다. 주어진 이름이 없는 경우, 결과값은 “One for you, one for me.“가 되어야 합니다.매개변수의 기본값을 이용하여 이 문제를 풀어 보세요.

```js
function TwoFer(x = 'you') {
  return `One for ${x}, one for me.`
}

console.log(TwoFer('Alice')) // 'One for Alice, one for me.'
console.log(TwoFer()) // 'One for you, one for me.'
```

### 문자열을 거꾸로 출력해주는 함수

입력된 문자열을 거꾸로 출력해주는 함수(reverseString)를 만들어 보세요.

함수를 만들 때, 아래와 같은 경우의 수를 모두 고려해 보세요. 모두 통과하는지를 확인해 보세요.1) 빈 문자열(‘’)이 들어왔을 때 2) 그냥 단어(robot)만 들어왔을 때 3) 대문자가 포함된 단어(Ramen)가 들어왔을 때 4) 느낌표가 포함된 문장(I am hungry!)이 들어왔을 때 5) 거꾸로 해도 같은 단어(racecar)가 들어왔을 때

```js
// 위의 조건을 단순히 반대로 출력할 때
function reverseString(str = '문자열을 입력하세요'){
  return [...str].reverse().join('')
}

// 위의 조건에서 대문자나 느낌표는 뒤로 와야할 때
function strictReverseString(str = '문자열을 입력하세요') {
  let arr = [...str]

  // 느낌표가 있을때
  if (arr.some(item => item === '!')) {
    arr.splice(arr.indexOf('!'), arr.lastIndexOf('!') + 1 - arr.indexOf('!'))
  }

  // 대문자 포함될 때
  if (arr.some(item => item === item.toUpperCase())) {
    let reverseArr = arr.reverse()
    let result = reverseArr.map(item => item = item.toLowerCase())
    result[0] = result[0].toUpperCase()
    return result.join('')
  }
}

// 1) 빈 문자열(‘’)이 들어왔을 때
console.log(reverseString('')) // ''

// 2) 그냥 단어(robot)만 들어왔을 때
console.log(reverseString('robot')) // 'tobor'

// 3) 대문자가 포함된 단어(Ramen)가 들어왔을 때
console.log(reverseString('Ramen')) // 'nemaR' (단순)
console.log(strictReverseString('Ramen')) // 'Nemar' (엄격)

// 4) 느낌표가 포함된 문장(I am hungry!)이 들어왔을 때
console.log(reverseString('I am hungry!')) // '!yrgnuh ma I' (단순)
console.log(strictReverseString('I am hungry!')) // 'Yrgnuh ma i' (엄격)

// 5) 거꾸로 해도 같은 단어(racecar)가 들어왔을 때
console.log(reverseString('racecar')) // 'racecar'
```