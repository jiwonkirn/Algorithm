// fisrt
// 복잡도 최대 (2.07ms, 36.6MB), (1.95ms, 37.5MB)
function solution(brown, red) {
  const sum = brown + red;
  const whole = box(sum);
  while (whole.length > 0) {
    const wholeSum = (whole[0] - 2) * (whole[1] - 2);
    if (wholeSum === red) return [whole[0], whole[1]];
    else {
      whole.shift();
      whole.shift();
    }
  }
  return 0;
}

function box(value) {
  const arr = [];
  for (let i = Math.floor(Math.sqrt(value)); i >= 1; i--) {
    if (value % i === 0) {
      arr.push(value / i);
      arr.push(i);
    }
  }
  return arr;
}

// second
// 복잡도 최대 (2.05ms, 36.7MB), (2.00ms, 37.3MB)
function solution(brown, red) {
  const sum = brown + red;
  for (let i = Math.floor(Math.sqrt(sum)); i >= 3; i--) {
    if ((sum / i - 2) * (i - 2) === red) return [sum / i, i];
  }
}
