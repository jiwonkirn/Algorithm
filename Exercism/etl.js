// Mine
const transform = (old = {}) => {
  const result = {};
  for (const item in old) {
    old[item]
      .map(i => i.toLowerCase())
      .forEach(i => {
        result[i] = parseInt(item);
      });
  }
  return result;
};

export default transform;


// Other's
export default old =>
    Object.entries(old).reduce((acc, [key, value]) => {
    value.forEach( letter => acc[letter.toLowerCase()] = +key);
    return acc;
  }, {})