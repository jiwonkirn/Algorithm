// 48ms (99.07%), 33.9MB (35.68%)
var removeElement = function(nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[index] = nums[i];
          index++
      }
  }
  return index;
};