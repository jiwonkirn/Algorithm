function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((acc, item) => {
      return acc + parseInt(item);
    }, 0);
  return x % sum === 0 && true;
}

function Harshad(n) {
  return !(
    n %
    (n + "").split("").reduce(function(i, sum) {
      return +sum + +i;
    })
  );
}
