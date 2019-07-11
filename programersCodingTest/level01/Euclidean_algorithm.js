function solution(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  while (min !== 0) {
    const rest = max % min;
    max = min;
    min = rest;
  }
  return [max, (m * n) / max];
}
