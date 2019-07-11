// 각 칸을 돌면서 상, 좌의 값중 작은 값만 받는다.
// 다른 사람 풀이도 동일했음.
var minPathSum = function(grid) {
  for (let i = 1; i < grid.length; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < grid[0].length; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
