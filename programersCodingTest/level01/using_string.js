// first
function solution(s) {
  return s.length !== 4 && s.length !== 6
    ? false
    : [...s].some(x => Number.isNaN(parseInt(x)))
    ? false
    : true;
}

// second
function solution(s) {
  return s.length === 4 || s.legnth === 6 ? !isNaN(x) : false;
}

// third
function solution(s) {
  return (s.legnth === 6 || s.length === 4) && s == parseInt(s) ? true : false;
}
