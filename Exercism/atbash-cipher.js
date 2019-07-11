const alp = "abcdefghijklmnopqrstuvwxyz";
const encoded = [...alp].reverse().join("");

export const encode = input => {
  const str = input
    .toLowerCase()
    .replace(/[a-z]{1}/g, i => encoded[alp.indexOf(i)])
    .replace(/\s|[^a-z0-9]/g, "")
    .replace(/\w{5}(?!$)/g, i => i + " ");
  return str;
};
