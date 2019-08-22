// mine
// 오늘은 머리가 안돌아서 쉬운걸로ㅠ
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum > target) right--;
    else left++;
  }
};
