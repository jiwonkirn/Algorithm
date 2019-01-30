// first
export default class BinarySearchTree {
  constructor(input) {
    this.data = input;
  }

  insert(num) {
    if (this.data >= num) {
      if (this.left) this.left.insert(num);
      else this.left = new BinarySearchTree(num);
    } else {
      if (this.right) this.right.insert(num);
      else this.right = new BinarySearchTree(num);
    }
  }

  each(callback) {
    if (this.left) this.left.each(callback);
    callback(this.data);
    if (this.right) this.right.each(callback);
  }
}

// second
export default class BinarySearchTree {
  constructor(input) {
    this.data = input;
    this.left = {};
    this.right = {};
  }

  insertNumber(num, obj) {
    if (obj.data) {
      if (obj.data >= num) this.insertNumber(num, (obj.left = {}));
      if (obj.data < num) this.insertNumber(num, (obj.right = {}));
    } else {
      obj.data = num;
    }
  }

  insert(num) {
    if (this.data >= num) this.insertNumber(num, this.left);
    else this.insertNumber(num, this.right);
  }

  *search(obj) {
    if (obj.left) yield* this.search(obj.left);
    if (obj.data) yield obj.data;
    if (obj.right) yield* this.search(obj.right);
  }

  each(callback) {
    for (const item of this.search(this)) {
      callback(item);
    }
  }
}