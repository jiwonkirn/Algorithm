function solution(d, budget) {
  const min = Math.min(...d);
  const arr = [...d];
  let result = 0;
  while (budget >= min) {
    const restMin = Math.min(...arr);
    if (arr.length === 0 || budget < restMin) {
      break;
    }
    budget -= restMin;
    arr.splice(arr.indexOf(restMin), 1);
    result += 1;
  }
  return result;
}

function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map(v => (budget -= v))
      .findIndex(v => v < 0) || ~d.length
  );
}
