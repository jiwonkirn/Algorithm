// first
function solution(arr) {
  let copy = arr.slice();
  while (copy.length > 1) {
    const result = [];
    for (let i = 0; i < copy.length - 1; i++) {
      result.push(max(copy[i], copy[i + 1]));
    }
    copy = result;
  }
  return copy[0];
}

function max(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  while (min !== 0) {
    const rest = max % min;
    max = min;
    min = rest;
  }
  return (m * n) / max;
}

// refered other's code
const gcd = (n, m) =>
  !m ? n : gcd(Math.min(n, m), Math.max(n, m) % Math.min(n, m));

const lcm = (n, m) => (n * m) / gcd(n, m);

const solution = arr => arr.reduce((a, i) => lcm(a, i));
