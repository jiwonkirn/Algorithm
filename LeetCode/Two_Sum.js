// first
// O(n ** 2)
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) return [i, j];
};

// second
// O(n)
const twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
      const elem = target - nums[i];
      if (obj[elem] == null) {
          obj[nums[i]] = i;
      } else {
          return [obj[elem], i];
      }
  }
};