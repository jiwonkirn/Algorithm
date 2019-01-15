export default class School {
  constructor() {
    this.db = {};
  }

  add(name, grade) {
    if (!this.db[grade]) {
      this.db[grade] = [name];
    } else {
      this.db[grade].push(name);
      this.db[grade].sort();
    }
  }

  roster() {
    for (let item in this.db) {
      this.db[item] = this.db[item].filter(i => i !== "Oops.");
    }
    return this.db;
  }

  grade(grade) {
    return this.db[grade] || [];
  }
}
