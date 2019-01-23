// Array.prototype.reduce
export default class Flattener {
  flatten(arr) {
    return arr
      .reduce(
        (acc, item) =>
          acc.concat(Array.isArray(item) ? this.flatten(item) : item),
        []
      )
      .filter(i => i != null);
  }
}

// Array.prototype.concat
export default class Flattener {
  flatten(arr) {
    let result = arr.slice()
    while (result.some(isArray)) {
      result = [].concat(...result)
    }
    return result.filter(i => i != null)
  }
}

// generator
export default class Flattener {
  *search(arr) {
    for (let item of arr) {
      if (item == null) continue;
      if (typeof item === "object") {
        yield* this.search(item);
      } else {
        yield item;
      }
    }
  }

  flatten(arr) {
    const result = [];
    for (let item of this.search(arr)) {
      result.push(item);
    }
    return result;
  }
}
