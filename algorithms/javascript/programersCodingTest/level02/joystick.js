// 내 풀이 (속도 1 - 2)
function solution(name) {
  let result = 0;
  const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let initial = "A".repeat(name.length).split("");
  let i = 0;
  while (initial.join("") !== name) {
    const a = alp.indexOf(name[i]);
    const b = 26 - alp.lastIndexOf(name[i]);
    result += Math.min(a, b);
    initial[i] = name[i];

    if (initial.join("") !== name) {
      const next = isWillChange(i, 1, initial, name);
      result += next[1];
      i = next[0];
    }
  }

  return result;
}

function isWillChange(index, order, initial, name) {
  const length = name.length - 1;
  const next =
    index + order > length ? index + order - length + 1 : index + order;
  const prev = index - order < 0 ? index - order + length + 1 : index - order;
  if (initial[next] !== name[next]) return [next, order];

  if (initial[prev] !== name[prev]) return [prev, order];

  return isWillChange(index, order + 1, initial, name);
}

// 다른사람 풀이 (속도 3 - 4)
function solution(name) {
  var map = "nopqrstuvwxyzabcdefghijklm".toUpperCase();
  var NS = name.split("");
  var answer = 0;

  var lastA = 0;
  var firstA = 0;
  //좌우 탐색
  for (var i = 1; i < NS.length; i++) {
    if (NS[i] !== "A") {
      break;
    } else {
      firstA++;
    }
  }
  for (var i = NS.length - 1; i > -1; i--) {
    if (NS[i] !== "A") {
      break;
    } else {
      lastA++;
    }
  }

  if (lastA > 0 || firstA > 0) {
    if (lastA > firstA) {
      NS = NS.slice(0, NS.length - lastA);
    } else {
      NS.splice(1, firstA);
    }
  }

  NS.map(a => {
    console.log(map.indexOf(a));
    answer += Math.abs(map.indexOf(a) - 13);
  });

  return answer + NS.length - 1;
}
