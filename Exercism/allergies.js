/* ======
  First 
======= */
export default class Allergies {
  constructor(num) {
    this.num = num;
    this.allergies = [
      "eggs",
      "peanuts",
      "shellfish",
      "strawberries",
      "tomatoes",
      "chocolate",
      "pollen",
      "cats"
    ];
  }

  list() {
    const { num, allergies } = this;
    return allergies.filter((item, index) => num & (2 ** index));
  }

  allergicTo(allergy) {
    return this.list().includes(allergy);
  }
}

/* ======
  Second 
======= */
export default class Allergies {
  constructor(num) {
    this.num = num;
    this.allergies = [
      "eggs",
      "peanuts",
      "shellfish",
      "strawberries",
      "tomatoes",
      "chocolate",
      "pollen",
      "cats"
    ];
  }

  list() {
    const { num, allergies } = this;
    return [...num.toString(2)]
      .reverse()
      .map((item, index) => {
        if (item === "1") return allergies[index];
        return 0;
      })
      .filter(item => item);
  }

  allergicTo(allergy) {
    return this.list().some(item => item === allergy);
  }
}
