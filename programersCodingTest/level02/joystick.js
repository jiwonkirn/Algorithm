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

// 다른사람 풀이 (속도 3 - 4, "BBAAAAAAAAABB" 에서 오류)
function solution(name) {
  // a를 중점으로 둔 알파벳 문자열을 선언한다.
  var map = "nopqrstuvwxyzabcdefghijklm".toUpperCase();
  // name값을 배열로 만든다.
  var NS = name.split("");
  // 결과가 될 answer 값
  var answer = 0;

  //
  var lastA = 0;
  var firstA = 0;
  //좌우 탐색
  for (var i = 1; i < NS.length; i++) {
    // name의 1번 인덱스부터 "A"의 갯수를 찾는다.
    if (NS[i] !== "A") {
      break;
    } else {
      firstA++;
    }
  }
  for (var i = NS.length - 1; i > -1; i--) {
    // name의 마지막 인덱스부터 "A"의 갯수를 찾는다.
    if (NS[i] !== "A") {
      break;
    } else {
      lastA++;
    }
  }

  // 만약 A의 갯수가 처음(index 1)과 끝에서 0개 이상이 연속된다면
  if (lastA > 0 || firstA > 0) {
    // 끝에 연속된 A가 많다면
    if (lastA > firstA) {
      // name을 마지막에 A가 없도록 자른다.
      NS = NS.slice(0, NS.length - lastA);
      // index 1번부터 연속된 A가 많다면
    } else {
      // index 1번 부터 연속된 A를 자른다.
      NS.splice(1, firstA);
    }
  }

  // 남은 name 배열에서 상하 조이스틱의 횟수를 반환될 정답에 더한다.
  NS.map(a => {
    answer += Math.abs(map.indexOf(a) - 13);
  });

  // 상하로 움직인 횟수와 남은 name 배열의 갯수 - 1개를 한 값이 정답이다.
  return answer + NS.length - 1;
}
