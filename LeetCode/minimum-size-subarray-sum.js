// FIRST
var minSubArrayLen = function(s, nums) {
  let start = 0;
  let end = 0;
  let min = nums.length + 1;
  let acc = nums[0];
  while (end < nums.length) {
    while (acc >= s && end >= start) {
      min = Math.min(end - start + 1, min);
      acc -= nums[start++];
    }
    acc += nums[++end];
  }
  return min === nums.length + 1 ? 0 : min;
};

// OTHER's
var minSubArrayLen = function(s, nums) {
  let start = 0;
  let min = nums.length + 1;
  let acc = 0;
  for (var end = 0; end < nums.length; end++) {
    acc += nums[end];
    while (acc >= s && end >= start) {
      min = Math.min(end - start + 1, min);
      acc -= nums[start++];
    }
  }
  return min === nums.length + 1 ? 0 : min;
};
