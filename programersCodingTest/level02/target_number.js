// first try
// 1, 2번 테스트 케이스 시간 초과
function solution(numbers, target) {
  const length = numbers.length;
  let count = 0;
  for (let i = 0; i < 2 ** length; i++) {
    const binary = i.toString(2).padStart(length);
    const sum = numbers.reduce((a, c, i) => {
      if (binary[i] === "1") a += c;
      else a += c * -1;
      return a;
    }, 0);
    if (sum === target) count++;
  }
  return count;
}

// second try
// 최대 복잡도 (66.31ms, 92.3MB), 통과 (69.24ms, 93MB)
function solution(numbers, target) {
  let arr = [target];
  for (let i = 0; i < numbers.length; i++) {
    arr = a(arr, numbers[i]);
  }
  return arr.filter(i => i === 0).length;
}

function a(arr, num) {
  const newArr = [];
  arr.forEach(i => {
    newArr.push(i + num);
    newArr.push(i - num);
  });
  return newArr;
}

// third try
// 최대 복잡도 (759.36ms, 37.2MB), 통과 (777.53ms, 36.9MB)
// 마치 병렬적 실행
function solution(numbers, target) {
  let count = 0;

  function complete(item, index) {
    if (index < numbers.length) {
      complete(item + numbers[index], index + 1);
      complete(item - numbers[index], index + 1);
    } else {
      if (target === item) count++;
    }
  }

  complete(0, 0);
  return count;
}
