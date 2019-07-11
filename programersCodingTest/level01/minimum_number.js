// first
function solution(arr) {
  if (arr.length > 1) {
    const arr2 = arr.slice();
    const num = arr.indexOf(arr2.sort((x, y) => x - y)[0]);
    arr.splice(num, 1);
    return arr;
  }
  return [-1];
}

// second
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
