// first
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map(x => parseInt(x));
}

// second
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map(n => parseInt(n));
}
