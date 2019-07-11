// first
function solution(s) {
  return [...s].sort((x, y) => (x > y ? -1 : 1)).join("");
}

// second
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
