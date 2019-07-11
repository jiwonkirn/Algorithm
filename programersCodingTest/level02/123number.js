/* ==============
  124 나라의 숫자
================ */

// mine
function solution(input) {
  const arr = [input];
  while (arr.some(item => item > 3)) {
    const devided = Math.floor(arr[0] / 3);
    const rest = arr[0] % 3;
    if (rest === 0) {
      arr.splice(0, 1, 3);
      arr.unshift(devided - 1);
    } else {
      arr.splice(0, 1, rest);
      arr.unshift(devided);
    }
  }
  return arr.map(item => (item === 3 ? 4 : item)).join("");
}

// other's
function change124(n) {
  return n === 0
    ? ""
    : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}
