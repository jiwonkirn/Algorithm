export default function(matrix) {
  this.rows = matrix.split("\n").map(i => i.split(" ").map(Number));

  this.columns = this.rows[0].map((_, index) =>
    this.rows.reduce((acc, item) => acc.concat(item[index]), [])
  );

  this.func = function(rows, cols) {
    const arr = [];
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < cols.length; j++) {
        if (
          Math.max(...rows[i]) === rows[i][j] &&
          Math.min(...cols[j]) === rows[i][j]
        )
          arr.push([i, j]);
      }
    }
    return arr;
  };

  this.saddlePoints = this.func(this.rows, this.columns);
}
