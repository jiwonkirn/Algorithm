// array stack
function solution(s) {
  const stack = [];
  for (const item of s) {
    const index = stack.length - 1;
    if (item === "(") stack.push(item);
    if (item === ")") {
      if (stack[index] === "(") stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}

// number stack
function solution(s) {
  let stack = 0;
  for (const item of s) {
    if (item === "(") stack++;
    if (item === ")") {
      if (stack > 0) stack--;
      else return false;
    }
  }
  return stack === 0;
}
