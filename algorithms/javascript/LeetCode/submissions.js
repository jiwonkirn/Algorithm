// mine (60ms ~ 84ms, 97%), 35.4 MB(12.5%)
var nextPermutation = function(nums) {
  let max = [];
  let startIndex = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (max[max.length - 1] > nums[i]) {
      const index = max.findIndex((item) => nums[i] < item);
      [nums[i], max[index]] = [max[index], nums[i]];
      startIndex = i + 1;
      break;
    } else {
      max.push(nums[i]);
    }
  }
  max.sort((x, y) => x - y);
  for (let i = 0; i < max.length; i++) {
    nums[startIndex] = max[i];
    startIndex++;
  }
};

// other's
var nextPermutation = function(nums) {
  let index = -1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[index] < nums[i]) {
        [nums[index], nums[i]] = [nums[i], nums[index]];
        break;
      }
    }
  }

  let left = index + 1;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
