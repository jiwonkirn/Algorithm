// FIRST..ㅎㅎ
// queue를 두개 사용해서
// 1을 찾으면 면적만큼 계속 찾고
// 다 찾으면 해당 외곽선 바깥들을 다른 큐에 넣은뒤 다른 큐의 요소를 꺼내서 1을 찾는 방법으로 했는데
// 조건문 복잡 + seen을 하나 더 두어 공간 복잡도 상승
var numIslands = function(grid) {
  if (!grid.length) return 0;
  let res = 0;
  const xLength = grid.length;
  const yLength = grid[0].length;
  const seen = new Array(xLength).fill(0).map(e => new Array(yLength).fill(0));
  const oqueue = [[0, 0]];
  function helper(pos) {
    const queue = [pos];
    while (queue.length) {
      const [x, y] = queue.shift();
      if (!seen[x][y] && grid[x][y] === "1") {
        if (x < xLength - 1 && !seen[x + 1][y]) queue.push([x + 1, y]);
        if (y < yLength - 1 && !seen[x][y + 1]) queue.push([x, y + 1]);
        if (x > 0 && !seen[x - 1][y]) queue.push([x - 1, y]);
        if (y > 0 && !seen[x][y - 1]) queue.push([x, y - 1]);
      } else if (!seen[x][y]) {
        if (x < xLength - 1 && !seen[x + 1][y]) oqueue.push([x + 1, y]);
        if (y < yLength - 1 && !seen[x][y + 1]) oqueue.push([x, y + 1]);
        if (x > 0 && !seen[x - 1][y]) oqueue.push([x - 1, y]);
        if (y > 0 && !seen[x][y - 1]) oqueue.push([x, y - 1]);
      }
      seen[x][y] = 1;
    }
    res++;
  }
  while (oqueue.length) {
    const len = oqueue.length;
    for (var k = 0; k < len; k++) {
      const [x, y] = oqueue.shift();
      if (!seen[x][y] && grid[x][y] === "1") helper([x, y]);
      else if (!seen[x][y]) {
        if (x < xLength - 1 && !seen[x + 1][y]) oqueue.push([x + 1, y]);
        if (y < yLength - 1 && !seen[x][y + 1]) oqueue.push([x, y + 1]);
        if (x > 0 && !seen[x - 1][y]) oqueue.push([x - 1, y]);
        if (y > 0 && !seen[x][y - 1]) oqueue.push([x, y - 1]);
      }
      seen[x][y] = 1;
    }
  }
  return res;
};

// Write with reference to other codes
// 깔끔..
var numIslands = function(grid) {
  if (!grid.length) return 0;

  function helper(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    )
      return;
    grid[i][j] = "0";
    helper(i + 1, j);
    helper(i - 1, j);
    helper(i, j + 1);
    helper(i, j - 1);
  }

  let res = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        helper(i, j);
        res++;
      }
    }
  }
  return res;
};
