// 정렬 알고리즘 구현 (효율성이 더 높다.)
const solution = numbers => {
  const result = quick(numbers).join("");
  return result[0] === "0" ? "0" : result;
};

const quick = numbers => {
  if (numbers.length === 0) return [];

  const middle = numbers[0];
  const left = [];
  const right = [];

  for (let i = 1; i < numbers.length; i++) {
    const first = "" + middle + numbers[i];
    const second = "" + numbers[i] + middle;
    if (first > second) right.push(numbers[i]);
    else left.push(numbers[i]);
  }

  return quick(left).concat([middle], quick(right));
};

// sort로 풀기
const solution = numbers => {
  const result = numbers
    .sort((x, y) => (("" + x + y) * 1 > ("" + y + x) * 1 ? -1 : 1))
    .join("");

  return result[0] === "0" ? "0" : result;
};
