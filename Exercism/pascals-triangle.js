export default class Triangle {
  constructor(input) {
    this.num = input;
  }

  get rows() {
    const arr = [[1]];
    for (let i = 1; i < this.num; i++) {
      arr.push(new Array(i + 1).fill(1));
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = (arr[i - 1][j - 1] || 0) + (arr[i - 1][j] || 0);
      }
    }
    return arr;
  }

  get lastRow() {
    return this.rows[this.num - 1];
  }
}
