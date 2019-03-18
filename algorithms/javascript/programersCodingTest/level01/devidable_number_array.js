// first
function solution(arr, divisor) {
  const newArr = arr.filter(x => x % divisor === 0).sort((x, y) => x - y);
  return newArr.length !== 0 ? newArr : [-1];
}

// second
function solution(arr, divisor) {
  var answer = [];
  arr.map(o => {
    o % divisor === 0 && answer.push(o);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
