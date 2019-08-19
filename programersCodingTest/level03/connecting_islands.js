// 섬 연결하기
// 크루스칼 알고리즘
// mine
function getParent(arr, i) {
  if (arr[i] === i) return i;
  return getParent(arr, arr[i]);
}

function solution(n, costs) {
  costs.sort((x, y) => x[2] - y[2]);
  const arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = i;
  }
  let acc = 0;
  let cur = 0;
  let branch = 0;
  while (branch < n - 1) {
    const left = costs[cur][0];
    const right = costs[cur][1];
    const lparent = getParent(arr, left);
    const rparent = getParent(arr, right);
    if (lparent === rparent) {
      cur++;
      continue;
    }
    arr[rparent] = lparent;
    acc += costs[cur++][2];
    branch++;
  }
  return acc;
}

// other's
// SET 함수 사용
// 이번 턴에 가장 가까운 출발점을 찾음
function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  let [from, to, answer] = costs.shift();
  let connected = new Set([from, to]);
  while (connected.size < n) {
    let index = costs.findIndex(
      ([from, to]) =>
        (connected.has(from) && !connected.has(to)) ||
        (connected.has(to) && !connected.has(from))
    );
    let [[from, to, cost]] = costs.splice(index, 1);
    answer += cost;
    connected.add(from).add(to);
  }
  return answer;
}
