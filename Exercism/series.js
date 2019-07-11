export default class Series {
  constructor(input) {
    this.input = input;
    this.digits = [...input].map(item => parseInt(item));
  }

  slices(num) {
    const arr = [];
    this.digits.forEach((item, index) => {
      if (this.digits.length < num) {
        throw new Error("Slice size is too big.");
      }
      if (index < this.digits.length - num + 1) {
        arr.push(this.digits.slice(index, num + index));
      }
    });
    return arr;
  }
}
