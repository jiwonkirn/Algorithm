// mine
function solution(n, result = 0) {
  if (n < 1) return result;
  n /= 2;
  if (Number.isInteger(n)) return solution(n, result);
  n -= 0.5;
  result++;
  return solution(n, result);
}

// ohter's
function solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}
