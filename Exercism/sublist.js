export default class List {
  constructor(arr = []) {
    this.list = arr;
  }

  compareArr(arr1, arr2) {
    for (let i = 0; i < arr1.length - arr2.length + 1; i++) {
      const sliced = arr1.slice(i, i + arr2.length);
      if (arr2.every((item, index) => sliced[index] === item)) return true;
    }
    return false;
  }

  compare(input) {
    const { list: list2 } = input;
    const { compareArr, list: list1 } = this;

    if (list1.length > list2.length) {
      if (compareArr(list1, list2)) return "SUPERLIST";
    }
    if (list1.length === list2.length) {
      if (compareArr(list1, list2)) return "EQUAL";
    }
    if (list1.length < list2.length) {
      if (compareArr(list2, list1)) return "SUBLIST";
    }
    return "UNEQUAL";
  }
}
