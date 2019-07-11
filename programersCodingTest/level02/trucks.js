function solution(bridge_length, weight, truck_weights) {
  // 트럭 무게를 복사한 배열
  const trucks = truck_weights.slice();
  // 도착한 트럭들을 쌓는 스택
  const arived = [];
  // 다리 위에 있는 트럭을 나타내는 큐
  const bridge = new Array(bridge_length).fill(0);
  // 시간
  let count = 0;
  // 다리 위에 있는 차들의 총 무게
  let weights = 0;

  // 트럭이 다 도착할 때 까지 루프를 돌려라
  while (arived.length !== truck_weights.length) {
    // 만약 다리의 선두에 차가 있으면 도착한 트럭을 쌓는 스택에 push한다.
    const first = bridge.shift();
    if (first > 0) {
      weights -= first;
      arived.push(first);
    }

    // 다리 위에 기대되는 차의 무게 합이 제한보다 작거나 같을 때만 트럭을 다리 위에 올린다.
    if (weight >= weights + trucks[0] && bridge.length > 0) {
      const truck = trucks.shift();
      bridge.push(truck);
      weights += truck;
    } else bridge.push(0);

    // 한 턴마다 시간을 더한다.
    count++;
  }
  return count;
}
