var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle;
  while (start <= end) {
      middle = Math.floor((start + end) / 2);
      if (target === nums[middle]) {
          return middle;
      } else if (target < nums[middle]) {
          end = middle - 1;
      } else {
          start = middle + 1;
      }
  }
  return target > nums[middle] ? middle + 1 : middle
};