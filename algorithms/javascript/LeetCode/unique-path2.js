// 코드가 다소 길어졌지만
// 가로 첫 줄과 세로 첫 줄에서만 필요한 동작들을 위해
// 가로 혹은 세로의 첫 줄인지 확인하는 조건문을 달면 성능 저하로 이어질 것을 우려하여
// 세개의 반복문을 작성.
// O(n^2), 다른 사람의 코드도 같은 복잡도를 가짐.
// 52 ms (98%)
var uniquePathsWithObstacles = function(obstacleGrid) {
  const rowLen = obstacleGrid.length;
  const colLen = obstacleGrid[0].length;
  const arr = new Array(rowLen)
    .fill(0)
    .map((elem, index) => new Array(colLen).fill(0));
  for (let i = 0; i < colLen; i++) {
    if (obstacleGrid[0][i - 1] || obstacleGrid[0][i]) {
      break;
    }
    arr[0][i] = 1;
  }
  for (let i = 1; i < rowLen; i++) {
    if (obstacleGrid[i - 1][0] || obstacleGrid[i][0]) {
      break;
    }
    arr[i][0] = 1;
  }
  for (let i = 1; i < rowLen; i++) {
    for (let j = 1; j < colLen; j++) {
      if (obstacleGrid[i][j]) {
        arr[i][j] = 0;
        continue;
      }
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[rowLen - 1][colLen - 1];
};
