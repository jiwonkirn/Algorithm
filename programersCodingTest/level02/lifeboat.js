// 효율성은 통과하지 못했습니다..
// 똑같은 알고리즘으로 파이썬에서는 통과됩니다.

/* ======
  first
======== */
function solution(people, limit) {
  const arr = quick(people);
  const length = arr.length;
  let start = 0;
  let end = length - 1;
  let count = 0;
  while (start <= end) {
    if (arr[start] + arr[end] > limit || start === end) {
      end--;
    } else {
      start++;
      end--;
      count++;
    }
  }
  return length - count;
}

const quick = arr => {
  if (arr.length === 0) return arr;
  const middle = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > middle) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quick(left).concat(middle, quick(right));
};

/* ======
  second
======== */
function solution(people, limit) {
  const list = quick(people);
  const length = list.length;
  let count = 0;
  while (list.length > 0) {
    count++;
    if (list[0] + list[list.length - 1] <= limit) {
      list.shift();
      list.pop();
    } else {
      list.shift();
    }
  }
  return count + people.length - length;
}

const quick = (arr, limit) => {
  if (arr.length === 0) return arr;
  const middle = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > limit) continue;
    if (arr[i] < middle) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quick(left).concat(middle, quick(right));
};
