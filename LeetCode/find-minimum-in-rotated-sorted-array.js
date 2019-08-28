// mine
// O(log N)
var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let min = nums[end];
  if (nums[start] < nums[end]) return nums[start];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[start] < nums[mid]) {
      start = mid;
    } else {
      end = mid;
    }
    if (nums[mid] < min) min = nums[mid];
  }
  return min;
};

// ohter's
// O(log N)
// min 불필요 + 깔끔
var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const calc = nums[end] - nums[mid];
    if (calc < 0) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};
