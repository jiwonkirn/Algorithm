export class WordProblem {
  constructor(str) {
    this.operator = str.match(/minus+|plus+|multiplied+|divided+/g);
    this.num = str.match(/[-]\d+|\d+/g);
  }

  answer() {
    if (!this.operator) {
      throw new ArgumentError();
    }
    return this.num.map(Number).reduce((acc, item, index) => {
      const op = this.operator[index - 1];
      if (op === "plus") return acc + item;
      if (op === "minus") return acc - item;
      if (op === "multiplied") return acc * item;
      if (op === "divided") return acc / item;
    });
  }
}

export class ArgumentError extends Error {
  constructor() {
    super();
    this.name = "Error";
    this.message = "error";
  }
}
