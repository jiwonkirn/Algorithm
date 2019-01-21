export default class Triplet {
  constructor(a, b, c) {
    this.triangle = [a, b, c];
  }

  sum() {
    return this.triangle.reduce((a, i) => a + i);
  }

  product() {
    return this.triangle.reduce((a, i) => a * i);
  }

  isPythagorean() {
    const arr = this.triangle.slice().sort();
    return arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2;
  }

  static where(obj) {
    const { minFactor: min, maxFactor: max, sum } = obj;
    const arr = [];
    for (let a = min || 3; a <= max - 2; a++) {
      for (let b = a + 1; b <= max - 1; b++) {
        const c = Math.sqrt(a ** 2 + b ** 2);
        const add = sum ? sum : a + b + c;
        if (Number.isInteger(c) && c <= max && add === a + b + c)
          arr.push(new Triplet(a, b, c));
      }
    }
    return arr;
  }
}
