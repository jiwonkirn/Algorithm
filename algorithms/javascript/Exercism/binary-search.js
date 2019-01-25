export default class BinarySearch {
  constructor(input) {
    this.array = this.isSorted(input);
  }

  isSorted(input) {
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) return;
    }
    return input;
  }

  indexOf(value, min = 0, max = this.array.length - 1) {
    const { array: arr } = this;
    const mid = Math.floor((min + max) / 2);
    if (!arr.includes(value)) return -1;
    if (arr[mid] < value) return this.indexOf(value, mid, max);
    if (arr[mid] > value) return this.indexOf(value, min, mid);
    return mid;
  }
}
