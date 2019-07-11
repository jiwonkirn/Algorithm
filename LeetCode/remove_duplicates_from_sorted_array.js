// 60 ~ 76ms (99 ~ 74%)
var removeDuplicates = function(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          nums[index] = nums[i];
          index++;
      }
  }
  return index;
};