// first
// 0을 만나면 0을 넘는 수가 있는지 확인, 최소 O(n) 최대 O(n^2)
var canJump = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      let j = i - 1;
      while (j >= 0) {
        if (i - j < nums[j]) {
          break;
        }
        j--;
      }
      if (j < 0) {
        return false;
      }
    }
  }
  return true;
};

// other's
// 가능한 수를 한 요소싹 볼 때 마다 저장하는 방식
// 최대 O(n)
var canJump = function(nums) {
  let dp = [0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i - 1]) - 1;

    if (dp[i] < 0) return false;
  }

  return true;
};
