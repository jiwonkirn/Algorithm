// 152 ms(99.62%), 46.3 MB(86.36%)
var threeSum = function(nums) {
  const arr = [];
  if (nums.length < 3) return arr;
  nums.sort((x, y) => x - y);
  for (let left = 0; left < nums.length - 2; left++) {
    if (nums[left] === nums[left - 1]) {
      continue;
    }
    if (nums[left] > 0) {
      return arr;
    }
    let middle = left + 1;
    let right = nums.length - 1;
    while (middle < right) {
      while (middle < right && nums[left] + nums[middle] + nums[right] > 0) {
        right--;
      }
      while (middle < right && nums[left] + nums[middle] + nums[right] < 0) {
        middle++;
      }
      if (middle < right && nums[left] + nums[middle] + nums[right] === 0) {
        arr.push([nums[left], nums[middle], nums[right]]);
        right--;
      }
      while (nums[middle] === nums[middle - 1] && middle < right) {
        middle++;
      }
      while (nums[right] === nums[right + 1] && middle < right) {
        right--;
      }
    }
  }
  return arr;
};

// 164ms(97.29%), 46.4mb (81.82%)
var threeSum = function(nums) {
  const arr = [];
  if (nums.length < 3) return arr;
  nums.sort((x, y) => x - y);
  for (let left = 0; left < nums.length - 2; left++) {
    if (nums[left] === nums[left - 1]) {
      continue;
    }
    if (nums[left] > 0) {
      return arr;
    }
    for (let middle = left + 1, right = nums.length - 1; middle < right; ) {
      const sum = nums[left] + nums[right] + nums[middle];
      if (sum === 0) {
        arr.push([nums[left], nums[middle], nums[right]]);
        middle++;
        right--;
        while (nums[middle] === nums[middle - 1]) {
          middle++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        middle++;
      }
    }
  }
  return arr;
};
