// 68 ms ~ 80 ms (97.13% ~ 54.10%), 35.3 MB ~ 35 MB (24.95% ~  60.15%)
var threeSumClosest = function(nums, target) {
  let gap;
  if (nums.length < 2) return 0;
  nums.sort((x, y) => x - y);
  for (let left = 0; left < nums.length - 2; left++) {
    let middle = left + 1;
    let end = nums.length - 1;
    while (middle < end) {
      const sum = nums[left] + nums[middle] + nums[end];
      const currentGap = sum - target;
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        end--;
      } else {
        middle++;
      }
      if (!(Math.abs(gap) <= Math.abs(currentGap))) {
        gap = currentGap;
      }
    }
  }
  return target + gap;
};
