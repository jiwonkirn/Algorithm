// mine
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] > nums[end]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  if (target === nums[start]) {
    return start;
  }
  if (target > nums[nums.length - 1]) {
    start = 0;
  } else {
    end = nums.length - 1;
  }
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

// other's
var search = function(nums, target) {
  let minInd = 0,
    maxInd = nums.length - 1;
  while (minInd <= maxInd) {
    let midInd = Math.floor((minInd + maxInd) / 2);

    if (target === nums[midInd]) {
      return midInd;
    }

    if (nums[midInd] <= nums[maxInd]) {
      if (target < nums[midInd] || target > nums[maxInd]) {
        maxInd = midInd - 1;
      } else {
        minInd = midInd + 1;
      }
    } else if (nums[midInd] >= nums[minInd]) {
      if (target > nums[midInd] || target < nums[minInd]) {
        minInd = midInd + 1;
      } else {
        maxInd = midInd - 1;
      }
    }
  }
  return -1;
};
