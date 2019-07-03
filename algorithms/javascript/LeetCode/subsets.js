// mine
// 현재 요소를 추가해고 다음단계로 넘어가기도 하고
// 현재 요소를 추가하지 않고 다음 단계로 넘어가기도 한다.
var subsets = function(nums) {
  const arr = [[]];
  function helper(cur, index) {
    if (index >= nums.length) return;
    const copy = [...cur, nums[index]];
    arr.push(copy);
    helper(copy, index + 1);
    helper(cur, index + 1);
  }
  helper([], 0);
  return arr;
};

// mine
// 비슷한 맥락인 것 같다.
const subsets = function(nums) {
  const result = [];
  const generate = (startIndex, selected) => {
    result.push([...selected]);
    for (let i = startIndex; i < nums.length; i++) {
      selected.push(nums[i]);
      generate(i + 1, selected);
      selected.pop();
    }
  };
  generate(0, []);
  return result;
};
