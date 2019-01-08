// mine
export default class Squares {
  constructor(input) {
    this.num = input;
  }

  get squareOfSum() {
    let result = 0;
    for (let i = 1; i <= this.num; i++) {
      result += i;
    }
    return result ** 2;
  }

  get sumOfSquares() {
    let result = 0;
    for (let i = 1; i <= this.num; i++) {
      result += i ** 2;
    }
    return result;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

// other's
class Square {
  constructor(n) {
    let x = (n * (n + 1)) / 2;
    this.squareOfSums = x * x;
    this.sumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    this.difference = this.squareOfSums - this.sumOfSquares;
  }
}

export default Square;