function solution(x, n) {
  const arr = new Array(n).fill(x);
  return arr.map((item, index) => item * (index + 1));
}
