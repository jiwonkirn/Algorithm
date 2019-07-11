// mine
// 최대 복잡도가 (2O)
// 어쨋든 start가 한번 리셋되고 다시 돈다는 측면에서 안좋다.
var sortColors = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    while (nums[end] === 2 && end > 0) {
      end--;
    }
    if (nums[start] === 2 && start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
    }
    start++;
  }
  start = 0;
  while (nums[end] === 2 && end > 0) {
    end--;
  }
  while (start < end) {
    while (nums[end] >= 1 && end > 0) {
      end--;
    }
    if (nums[start] === 1 && start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
    }
    start++;
  }
};

// 내가한 방법과 비슷한 방법인데 좀 더 가독성이 좋고 조건문이 적다.
var sortColors = function(nums) {
  let start = 0;
  let pivot = 0;
  while (pivot < nums.length) {
    if (nums[pivot] === 0) {
      [nums[start], nums[pivot]] = [nums[pivot], nums[start]];
      start++;
    }
    pivot++;
  }
  pivot = start;
  while (pivot < nums.length) {
    if (nums[pivot] === 1) {
      [nums[start], nums[pivot]] = [nums[pivot], nums[start]];
      start++;
    }
    pivot++;
  }
};

// 갯수를 세어서 하는 방식인데 문제 차원에서 권장하지 않았다.
// 하지만 랭킹 상위권이었다.
var sortColors = function(nums) {
  let s0 = 0,
    s1 = 0;
  nums.forEach((n) => {
    if (!n) s0++;
    if (n == 1) s1++;
  });
  for (let i = 0; i < s0; i++) nums[i] = 0;
  for (let i = s0; i < s0 + s1; i++) nums[i] = 1;
  for (let i = s0 + s1; i < nums.length; i++) nums[i] = 2;
};
