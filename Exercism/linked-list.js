export default class LinkedList {
  constructor() {
    this.db = [];
  }

  push(input) {
    this.db.push(input);
  }

  pop() {
    return this.db.pop();
  }

  unshift(input) {
    this.db.unshift(input);
  }

  shift() {
    return this.db.shift();
  }

  count() {
    return this.db.length;
  }

  delete(input) {
    if (this.db.some(i => i === input)) {
      this.db.splice(this.db.indexOf(input), 1);
    }
  }
}
