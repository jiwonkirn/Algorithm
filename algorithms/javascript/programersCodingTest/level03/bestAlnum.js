// 베스트 앨범
/*
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
*/

function solution(genres, plays) {
  const obj = {}; // 장르별로 스트리밍 횟수 1,2등과 고유번호를 담는 객체
  const sort = {}; // 장르별 누적 스트리밍 횟수를 담는 객체
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    if (!obj[genre]) {
      // 아직 해당 장르에 대한 객체가 없다면, 만들어준다.
      obj[genre] = {
        order: [play],
        index: [i]
      };
      sort[genre] = play;
    } else {
      // 해당 장르에 대한 객체가 있다면,
      sort[genre] += play;
      // 만약 현재 배열의 스트리밍 횟수 1등보다 많다면 추가해주고, 3등이 된 요소는 자른다.
      if (obj[genre].order[0] < play) {
        obj[genre].order.unshift(play);
        obj[genre].index.unshift(i);
        if (obj[genre].order.length > 2) {
          obj[genre].order.pop();
          obj[genre].index.pop();
        }
      } else if ((obj[genre].order[1] || 0) < play) {
        obj[genre].order[1] = play;
        obj[genre].index[1] = i;
      }
    }
  }
  // 장르별 스트리밍 횟수를 배열로 만들어 스트리밍 횟수가 많은 장르 순서대로 정렬을 한 뒤, 해당 장르의 고유번호로 배열을 바꾼다.
  return Object.entries(sort)
    .sort((x, y) => y[1] - x[1])
    .reduce((acc, cur) => acc.concat(...obj[cur[0]].index), []);
}
