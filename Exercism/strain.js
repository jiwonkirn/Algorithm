/* ===================
  Using filter method
===================== */
const strain = {
  keep: (arr, callback) => arr.filter(callback),
  discard: (arr, callback) => arr.filter(e => !callback(e))
};

/* =======================
  don't use filter method
========================= */
const getResult = (arr, callback, boolean) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === boolean) {
      result.push(arr[i]);
    }
  }
  return result;
};

const strain = {
  keep: (arr, callback) => getResult(arr, callback, true),
  discard: (arr, callback) => getResult(arr, callback, false)
};

export default strain;
