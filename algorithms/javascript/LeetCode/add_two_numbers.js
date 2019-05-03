// Todo
// 우선 연결리스트에서 요소를 뽑는다. (뽑을때부터 2 => 4 => 7로)
// 배열의 각 자리를 더한다.
// 배열을 단방향 연결 리스트 형식으로 저장한다.

// 최종 결과를 반환하는 함수
const addTwoNumbers = (l1, l2) => {
  const arr1 = listToArray(l1);
  const arr2 = listToArray(l2);
  const sumedArray = sumNumbersFromArray(arr1, arr2);
  return arrayToList(sumedArray);
};

// 연결리스트에서 요소를 뽑아 배열을 반환하는 함수
function listToArray(list, arr = []) {
  arr.push(list.val);
  if (list.next == null) {
    return arr;
  }
  return listToArray(list.next, arr);
}

// 배열의 각 자리를 더하는 함수
function sumNumbersFromArray(arr1, arr2) {
  [arr1, arr2] = arr1.length >= arr2.length ? [arr1, arr2] : [arr2, arr1];
  const length = arr1.length;
  for (let i = 0; i < length; i++) {
    const sumElements = arr1[i] + (arr2[i] || 0);
    if (i < length && sumElements > 9) {
      arr1[i] = sumElements - 10;
      arr1[i + 1] ? (arr1[i + 1] += 1) : (arr1[i + 1] = 1);
    } else {
      arr1[i] = sumElements;
    }
  }
  return arr1;
}

// 다시 배열을 연결리스트로 저장하는 함수
function arrayToList(arr) {
  const list = new ListNode(arr[0]);
  let currentList = list;
  for (let i = 1; i < arr.length; i++) {
    currentList.next = new ListNode(arr[i]);
    currentList = currentList.next;
  }
  return list;
}
