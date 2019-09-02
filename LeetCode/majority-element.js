// EASY

// mine
// 해쉬 기반 딕셔너리형을 사용해서 풀음
var majorityElement = function(nums) {
  const obj = {};
  const len = nums.length / 2;
  for (var i = 0; i < nums.length; i++) {
      if (obj[nums[i]]) {
          obj[nums[i]]++;
      } else {
          obj[nums[i]] = 1;
      }
      if (obj[nums[i]] > len) return nums[i];
  }
};