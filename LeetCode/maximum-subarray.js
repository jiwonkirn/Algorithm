var maxSubArray = function(nums) {
  // 음수는 아무리 더해봐야 양수보다 못하다.
  // 때문에 합이 0이 나오면 단일 하나의 숫자가 더 의미가 있음
  let max = nums[0];
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    const next = acc + nums[i];
    max = Math.max(max, next);
    if (next >= 0) {
      acc = next;
    } else {
      acc = 0;
    }
  }
  return max;
};

let maxSubArray = function(nums) {
  let sum = nums[0],
    max = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};
