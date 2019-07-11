// first
function solution(n, a, b) {
  let round = 0;
  while (true) {
    if (a === b) break;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }
  return round;
}

// second
function solution(n, a, b, round = 0) {
  return a === b
    ? round
    : solution(n, Math.ceil(a / 2), Math.ceil(b / 2), round + 1);
}

// other's
function solution(n, a, b) {
  var mid = (n + 1) / 2;

  if (a > mid && b < mid) {
    return Math.log2(n);
  } else if (a < mid && b > mid) {
    return Math.log2(n);
  } else {
    if (a < mid && b < mid) {
      return solution(n / 2, a, b);
    } else {
      return solution(n / 2, a - n / 2, b - n / 2);
    }
  }
}
