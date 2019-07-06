// 시간 내에 못풀어서 javascript api 사용해서 풀고 다른사람 답 확인
// Binary Search
// 가운데 수와 같으면 true
// 가운데 수가 끝 수보다 작으면
// target이 해당 오른쪽 레인지 안에 있는 수면 오른쪽 확인 시작 반대면 왼쪽 확인 시작
// 가운데 수가 끝 수보다 크면
// target이 해당 오른쪽 레인지 안에 있는 수면 오른쪽 확인 시작 반대면 왼쪽 확인 시작
// 중복은 제거해가면서 찾는다.
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] < nums[right]) {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] > nums[right]) {
      if (target <= nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      while (nums[mid] === nums[right]) {
        right--;
      }
    }
  }
  return false;
};
