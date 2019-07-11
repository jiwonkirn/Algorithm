// 다른 사람 풀이 (효율성 높음)
function solution(numbers) {
  var answer = 0;
  var set = new Set();
  makeNumbers(set, "", numbers.split(""));
  return set.size;
}

function issosu(num) {
  if (num < 2) return false;
  for (var i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function makeNumbers(set, cur, nums) {
  if (nums.length === 0) return;
  var clone = nums.slice();
  nums.forEach(function(i) {
    console.log(set, cur, nums, clone);
    var su = clone.pop();
    var num = Number(cur + su);
    ("0");
    if (issosu(num)) {
      set.add(num);
    }

    makeNumbers(set, cur + su, clone);
    clone.unshift(su);
    console.log(clone);
  });
}

// 내 풀이 (효율성 낮음)
function solution(numbers) {
  const nums = numbers.split("");
  const max = Number(
    nums
      .slice()
      .sort((x, y) => y - x)
      .join("")
  );
  const primeArr = primes(max);
  let count = 0;
  for (const item of primeArr) {
    const arr = item.toString().split("");
    if (isTrue(arr, nums)) count++;
  }
  return count;
}

const isTrue = (arr, nums) => {
  const copy = nums.slice();
  for (const item of arr) {
    const index = copy.indexOf(item);
    if (index === -1) {
      return false;
    }
    copy.splice(index, 1);
  }
  return true;
};

const primes = max => {
  const arr = [2];
  for (let i = 3; i <= max; i += 2) {
    let isPrime = true;
    const sqrt = Math.sqrt(i);
    for (const item of arr) {
      if (item > sqrt) {
        break;
      }
      if (i % item === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) arr.push(i);
  }
  return arr;
};
