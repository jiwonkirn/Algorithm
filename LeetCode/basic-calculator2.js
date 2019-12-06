// FIRST
const isOperator = oper =>
  oper === "+" || oper === "-" || oper === "*" || oper === "/";

const getOrder = oper => (oper === "+" || oper === "-" ? 1 : 2);

const translator = s => {
  const operStack = [];
  const stack = [];
  let int = "";

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (isOperator(cur)) {
      stack.push(Number(int));
      int = "";
      const order = getOrder(cur);
      let curOper = operStack[operStack.length - 1];
      while (order <= getOrder(curOper) && operStack.length) {
        stack.push(operStack.pop());
        curOper = operStack[operStack.length - 1];
      }
      operStack.push(cur);
    } else if (cur !== " ") {
      int += cur;
    }
  }

  stack.push(Number(int));
  stack.push(...operStack.reverse());

  return stack;
};

const calculator = (num1, num2, oper) => {
  switch (oper) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return Math.floor(num1 / num2);
  }
};

var calculate = function(s) {
  const stack = translator(s);
  const result = [];
  for (const cur of stack) {
    if (isOperator(cur)) {
      const num1 = result.pop();
      const num2 = result.pop();
      result.push(calculator(num2, num1, cur));
    } else result.push(cur);
  }
  return result.pop();
};

// SECOND
var calculate = function(s) {
  const opers = ["+", "-", "*", "/"];
  const len = s.length;

  let res = (cur = num = 0);
  let op = "+";

  for (let i = 0; i < len; i++) {
    const letter = s[i];
    if (letter.match(/\d/)) {
      num = num * 10 + Number(letter);
    }
    if (opers.includes(letter) || i === len - 1) {
      switch (op) {
        case "+":
          cur += num;
          break;
        case "-":
          cur -= num;
          break;
        case "*":
          cur *= num;
          break;
        case "/":
          cur = parseInt(cur / num);
          break;
      }

      if (letter === "+" || letter === "-" || i === len - 1) {
        res += cur;
        cur = 0;
      }

      op = letter;
      num = 0;
    }
  }
  return res;
};
