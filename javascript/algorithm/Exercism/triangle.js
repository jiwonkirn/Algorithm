// Mine
class Triangle {
  constructor(a, b, c) {
    this.triangleValue = [a, b, c];
  }

  kind() {
    const [min, mid, max] = this.triangleValue.sort((x, y) => x - y);
    if (min <= 0 || max >= min + mid) {
      throw new Error();
    } else if (min === max) {
      return "equilateral";
    } else if (min === mid || max === mid) {
      return "isosceles";
    } else if (max < min + mid) {
      return "scalene";
    }
  }
}

export default Triangle;
