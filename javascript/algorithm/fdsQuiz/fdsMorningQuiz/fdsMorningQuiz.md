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

### 문제
