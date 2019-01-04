// My first solution
export const parse = input => {
  return input
    .split(/\s/g)
    .map(i => {
      if (i.toUpperCase() === i) return i[0];
      return [...i]
        .map((item, index) => {
          if (
            (item.toUpperCase() === item && item.match(/\w/g)) ||
            i[index - 1] === "-" ||
            index === 0
          ) {
            return item.toUpperCase();
          }
        })
        .join("");
    })
    .join("");
};

// Second
export const parse = input => {
  return input
    .match(/[A-Z]+[a-z]*|[a-z]+/g)
    .map(i => i[0].toUpperCase())
    .join("");
};
