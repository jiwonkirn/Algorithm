const usedName = [];

export default class Robot {
  constructor() {
    this.alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this._name = this.makeName();
  }

  get name() {
    return this._name;
  }

  random(input) {
    return Math.floor(Math.random() * input);
  }

  makeName() {
    let name = "";
    while (!name) {
      name =
        this.alp[this.random(26)] +
        this.alp[this.random(26)] +
        this.num[this.random(10)] +
        this.num[this.random(10)] +
        this.num[this.random(10)];

      if (usedName.some(item => item === name)) {
        name = "";
      } else {
        usedName.push(name);
      }
    }
    return name;
  }

  reset() {
    this._name = this.makeName();
  }
}
