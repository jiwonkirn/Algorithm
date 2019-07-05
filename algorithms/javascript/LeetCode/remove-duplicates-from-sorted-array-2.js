// mine
// 숫자가 같은건지를 cur
// 바꿔야하는 순서를 num
// 두번 채워졌는지 확인하는 변수를 equal에 두었다.
// 가독성이 좋지는 않지만 아래보다 splice를 자주 하지는 않아서
// 리소스 낭비가 적은 듯 하다
var removeDuplicates = function(nums) {
  let num = 1;
  let cur = nums[0];
  let equal = 0;
  for (let i = 1; i < nums.length; i++) {
    if (cur < nums[i]) {
      nums[num] = nums[i];
      num++;
      equal = 0;
      cur = nums[i];
    } else if (equal === 0) {
      nums[num] = nums[i];
      num++;
      equal = 1;
    }
  }
  return nums;
};

// other's
// 다음 두 수가 같은 수면은 두번째 수를 잘라내고 그 자리를 다시 확인하는 알고리즘이다.
// [1], 1, (1), 2, 2
// [1], 1, 2, 2
// 지금 i가 [] 라면 ()까지 같은 수일 때 () 를 자르고 다음 턴도 같은 자리를 기준으로 판별
// nums[i + 1] === nums[i] <- 이 부분은 없어도 동작한다.
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i + 1] === nums[i] && nums[i + 2] === nums[i]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};
