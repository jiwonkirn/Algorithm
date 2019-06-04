// mine
var permuteUnique = function(nums) {
  nums.sort((x, y) => x - y);
  const result = [[...nums]];
  const cur = [...nums];
  let done = false;
  function helper(arr, index) {
    if (index === 0) {
      done = true;
      return;
    }
    if (cur[index] > cur[index - 1]) {
      arr.push(cur[index]);
      const minIndex = arr.findIndex((i) => i > cur[index - 1]);
      [arr[minIndex], cur[index - 1]] = [cur[index - 1], arr[minIndex]];
      for (let i = index, j = 0; i < cur.length; i++, j++) {
        cur[i] = arr[j];
      }
      result.push([...cur]);
      return;
    }
    arr.push(cur[index]);
    helper(arr, index - 1);
  }
  while (!done) {
    helper([], nums.length - 1);
  }
  return result;
};

// other's
// DFS (깊이 우선 탐색)을 사용하는듯.. 배워야겠음..!
var permuteUnique = function(nums) {
  const res = [];
  const visited = Array(nums.length).fill(false);
  nums.sort((n1, n2) => n1 - n2);
  dfs([]);

  return res;
  function dfs(tmp) {
    if (tmp.length === nums.length) {
      res.push(tmp.slice());
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
      tmp.push(nums[i]);
      visited[i] = true;
      dfs(tmp);
      visited[i] = false;
      tmp.pop();
    }
  }
};
