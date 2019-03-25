// first
function solution(n) {
  const stack = [];
  hanoi(n, 1, 2, 3, stack);
  return stack;
}

function hanoi(n, start, middle, end, stack) {
  if (n === 1) {
    stack.push([start, end]);
    return;
  }
  hanoi(n - 1, start, end, middle, stack);
  stack.push([start, end]);
  hanoi(n - 1, middle, start, end, stack);
}

// second
function solution(n) {
  const stack = [];

  function hanoi(n, start, middle, end) {
    if (n === 1) {
      stack.push([start, end]);
      return;
    }
    hanoi(n - 1, start, end, middle);
    stack.push([start, end]);
    hanoi(n - 1, middle, start, end);
  }
  hanoi(n, 1, 2, 3);

  return stack;
}
