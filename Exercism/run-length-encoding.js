// mine
const encode = input => {
  const arr = [];
  input.split("").forEach(item => {
    if (!arr.some(i => i === item)) arr.push(item);
  });
  let result = input;
  for (let i of arr) {
    const reg = new RegExp(`${i}+`, "g");
    result = result.replace(reg, a => (a.length === 1 ? i : a.length + i));
  }
  return result;
};

const decode = input => {
  return input.replace(/\d+\D|\D/g, a =>
    a.match(/\D/)[0].repeat(a.match(/\d+/) ? a.match(/\d+/)[0] : 1)
  );
};

export { encode, decode };

// others
const RLE = {
  encode: str => str.replace(/(\w)\1+/g, (m, c) => `${m.length}${c}`),
  decode: str => str.replace(/(\d+)(\w)/g, (_, d, c) => c.repeat(d))
};
