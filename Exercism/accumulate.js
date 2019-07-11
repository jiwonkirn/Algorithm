export const accumulate = (arr, callback) => {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
};
