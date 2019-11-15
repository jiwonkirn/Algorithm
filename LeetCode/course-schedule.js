// FIRST
// SET에서 DELETE 할 수 있다는 생각을 못했다...
var canFinish = function(numCourses, prerequisites) {
  const seen = new Array(numCourses).fill(false);
  const arr = [];
  let res = true;

  // dfs 할 수 있는 자료구조 만들기
  for (var i = 0; i < prerequisites.length; i++) {
    const [idx, next] = prerequisites[i];
    if (!arr[idx]) arr[idx] = [];
    arr[idx].push(next);
  }

  // dfs
  // 사이클 검증 set / seen처리 idx
  function dfs(set, cur) {
    if (set.has(cur)) return (res = false);
    if (seen[cur] || !arr[cur]) return;
    seen[cur] = true;
    set.add(cur);
    for (var i = 0; i < arr[cur].length; i++) {
      const next = arr[cur][i];
      dfs(new Set(set), next);
    }
  }

  // 재귀호출 및 본 루트는 다시 볼 필요 없게
  for (var j = 0; j < seen.length; j++) {
    if (!res) return res;
    if (seen[j]) continue;
    dfs(new Set(), j);
  }
  return res;
};

// SECOND + REFACTORING
// dfs 할 수 있는 자료구조 만들기
function makeDataStr(numCourses, prerequisites) {
  const seen = [];
  const arr = [];
  for (let i = 0; i < numCourses; i++) {
    arr.push([]);
    seen.push(false);
  }
  for (var i = 0; i < prerequisites.length; i++) {
    const [idx, next] = prerequisites[i];
    arr[idx].push(next);
  }
  return [seen, arr];
}

var canFinish = function(numCourses, prerequisites) {
  const [seen, arr] = makeDataStr(numCourses, prerequisites);
  const set = new Set();

  // dfs
  // 사이클 검증 set / seen처리 idx
  function dfs(set, cur) {
    if (set.has(cur)) return false;
    if (seen[cur]) return true;

    seen[cur] = true;
    set.add(cur);

    for (var i = 0; i < arr[cur].length; i++) {
      const next = arr[cur][i];
      const res = dfs(set, next);
      if (!res) return res;
    }

    set.delete(cur);
    return true;
  }

  // 재귀호출 및 본 루트는 다시 볼 필요 없게
  for (var j = 0; j < seen.length; j++) {
    if (!seen[j]) {
      const res = dfs(set, j);
      if (!res) return res;
    }
  }

  return true;
};
