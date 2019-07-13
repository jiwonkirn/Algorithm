// 추가될 요소는 한자리부터 시작해서 한자리씩 올라간 경우의 수 중에서
// 중복되지 않을 요소를 추가한다.
// 때문에 prev를 두어 이전에 추가했던 요소와 같은 요소는
// 이번 턴에 정해진 자리수에서는 추가하지 않는다.
// 오름차순이 된 자료구조를 기준으로 푼 알고리즘이기 때문에 중첩 함수를 실행하기 전에
// nums를 정렬 시켜준 뒤 진행한다.
// 정렬을 시키지 않고 풀려고 했으나
// 다른 사람들의 풀이 방법도 내 풀이와 같은 방식이었다.
var subsetsWithDup = function(nums) {
  const arr = [[]];
  nums.sort();
  function helper(cur, index) {
    if (index >= nums.length) return;
    let prev = 'none';
    for (let i = index; i < nums.length; i++) {
      if (prev !== nums[i]) {
        cur.push(nums[i]);
        arr.push([...cur]);
        helper([...cur], i + 1);
        prev = cur.pop();
      }
    }
  }
  helper([], 0);
  return arr;
};
