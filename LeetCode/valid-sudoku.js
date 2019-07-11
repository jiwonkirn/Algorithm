// first
var isValidSudoku = function(board) {
  for (let row = 0; row < 9; row++) {
    const rowSet = new Set();
    const colSet = new Set();
    for (let col = 0; col < 9; col++) {
      if (rowSet.has(board[row][col])) {
        return false;
      }
      if (board[row][col] !== '.') {
        rowSet.add(board[row][col]);
      }
      if (colSet.has(board[col][row])) {
        return false;
      }
      if (board[col][row] !== '.') {
        colSet.add(board[col][row]);
      }
      if (!(row % 3) && !(col % 3)) {
        const squareSet = new Set();
        for (let start = row; start < row + 3; start++) {
          for (let end = col; end < col + 3; end++) {
            if (squareSet.has(board[start][end])) {
              return false;
            }
            if (board[start][end] !== '.') {
              squareSet.add(board[start][end]);
            }
          }
        }
      }
    }
  }
  return true;
};

// second
var isValidSudoku = function(board) {
  const rowSet = new Array(9).fill(0).map((i) => new Set());
  const colSet = new Array(9).fill(0).map((i) => new Set());
  const squareSet = new Array(9).fill(0).map((i) => new Set());
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const current = board[row][col];
      if (current === '.') continue;
      if (rowSet[row].has(current)) return false;
      if (colSet[col].has(current)) return false;

      const squareIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (squareSet[squareIndex].has(current)) return false;

      rowSet[row].add(current);
      colSet[col].add(current);
      squareSet[squareIndex].add(current);
    }
  }
  return true;
};
