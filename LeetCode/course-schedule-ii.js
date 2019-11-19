// FIRST
// height를 이용해서 풀었으나
// 결국 공간 복잡도가 높아지고 그렇게 할 필요가 없었음.
function Node() {
  this.prev = [];
  this.height = 0;
}

function makeArr(numCourses, prerequisites) {
  const seen = [];
  const arr = [];
  for (var i = 0; i < numCourses; i++) {
    seen.push(false);
    arr.push(new Node());
  }

  // 자료구조 적재
  for (var i = 0; i < prerequisites.length; i++) {
    const [c, p] = prerequisites[i];
    arr[c].prev.push(p);
  }

  return [seen, arr];
}

var findOrder = function(numCourses, prerequisites) {
  const set = new Set();
  const [seen, arr] = makeArr(numCourses, prerequisites);

  function helper(index) {
    if (set.has(index)) return false;
    if (seen[index]) return true;
    seen[index] = true;
    set.add(index);
    for (var i = 0; i < arr[index].prev.length; i++) {
      const next = arr[index].prev[i];
      const res = helper(next);
      if (!res) return res;
      arr[index].height = Math.max(arr[index].height, arr[next].height + 1);
    }
    set.delete(index);
    return true;
  }

  const response = [];
  // 중복 확인
  for (var i = 0; i < numCourses; i++) {
    if (!seen[i]) {
      const res = helper(i);
      if (!res) return [];
    }
    const index = arr[i].height;
    if (!response[index]) response[index] = [];
    response[index].push(i);
  }

  // depth 검사
  const res = [];
  response.forEach(c => c.length && res.push(...c));
  return res;
};

// SECOND
// 이미 본 루트는 보지 않기 때문에 pass
// 상위에 나오는 루트일수록 뒤에 위치해야 하기 때문에
// 앞에 깊은 루트가 나오든 뒤에 깊은 루트가 나오든 상관이 없다.
function makeArr(numCourses, prerequisites) {
  const seen = [];
  const arr = [];
  for (var i = 0; i < numCourses; i++) {
    seen.push(false);
    arr.push([]);
  }

  // 자료구조 적재
  for (var i = 0; i < prerequisites.length; i++) {
    const [c, p] = prerequisites[i];
    arr[c].push(p);
  }

  return [seen, arr];
}

var findOrder = function(numCourses, prerequisites) {
  const set = new Set();
  const [seen, arr] = makeArr(numCourses, prerequisites);
  const response = [];

  function helper(index) {
    if (set.has(index)) return false;
    if (seen[index]) return true;
    set.add(index);
    for (var i = 0; i < arr[index].length; i++) {
      const next = arr[index][i];
      const res = helper(next);
      if (!res) return res;
    }
    set.delete(index);
    seen[index] = true;
    response.push(index);
    return true;
  }

  // 중복 확인
  for (var i = 0; i < numCourses; i++) {
    if (!seen[i]) {
      const res = helper(i);
      if (!res) return [];
    }
  }

  return response;
};
