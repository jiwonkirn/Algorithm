// first
function solution(num) {
  for (let i = 0; i <= 500; i++) {
    if (num === 1) {
      return i;
    } else if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// other's
function collatz(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}
