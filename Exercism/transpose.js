const transpose = input => {
  const arr = input.map(i => i.length);
  const mapping = arr.map((it, id) => {
    const max = Math.max(...arr.slice(id + 1, arr.length));
    return max;
  });
  const copy = input.map((item, index) => item.padEnd(mapping[index]));
  const result = [];
  for (let i = 0; i < Math.max(...arr); i++) {
    let word = "";
    for (let item of copy) {
      if (!item[i]) {
        break;
      }
      word += item[i];
    }
    result.push(word);
  }
  return result;
};

export default transpose;
