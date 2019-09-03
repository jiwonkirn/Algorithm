// MEDIUM

// mine
// O(N)
var findPeakElement = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (!(nums[i] < nums[i - 1] || nums[i] < nums[i + 1])) return i;
  }
  return 0;
};

// other's
// O(log N)
// mid와 mid + 1을 비교하면 결국 오른쪽 혹은 왼쪽은 무조건 작은 수
// 그걸 전제로 또 다음 연산을 수행
// 결국 다다르는 지점은 왼쪽과 오른쪽이 둘 다 작은 수이다.
var findPeakElement = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let mid2 = mid + 1;

    if (nums[mid] < nums[mid2]) {
      low = mid2;
    } else {
      high = mid;
    }
  }

  return low;
};
