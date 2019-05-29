// first 52ms ~ 64ms, 35MB ~ 35.5MB
var searchRange = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let pivot;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      pivot = middle;
    }
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  if (pivot == null) return [-1, -1];

  let left = pivot;
  while (nums[left - 1] === target) {
    left -= 1;
  }

  let right = pivot;
  while (nums[right + 1] === target) {
    left += 1;
  }

  return [left, right];
};

// second
var searchRange = function(nums, target) {
  function findTarget(start = 0, end = nums.length - 1) {
    if (start > end) {
      return;
    }
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      return findTarget(start, middle - 1);
    } else {
      return findTarget(middle + 1, end);
    }
  }

  const pivot = findTarget();

  if (pivot == null) return [-1, -1];

  let left = pivot;
  while (nums[left - 1] === target) {
    left -= 1;
  }

  let right = pivot;
  while (nums[right + 1] === target) {
    right += 1;
  }

  return [left, right];
};
