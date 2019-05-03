/* ================================================
  third try (runtime: 72.94%, memory: 30.37%)
================================================= */
const addTwoNumbers = (l1, l2) => {
  const resultList = new ListNode(0);
  let currentList = resultList;
  while (l1 || l2) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;
    let sum = a + b + currentList.val;
    let rest = 0;
    if (sum >= 10) {
      sum -= 10;
      rest = 1;
    }
    currentList.val = sum;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    if (l1 || l2 || rest) {
      currentList.next = new ListNode(rest);
    }
    currentList = currentList.next;
  }
  return resultList;
};

/* ============================================
  second try (runtime: 98.56%, memory: 22.82%)
============================================== */
const addTwoNumbers = (l1, l2) => {
  const resultList = new ListNode(0);
  let currentList = resultList;
  while (l1 && l2) {
    let sum = l1.val + l2.val + currentList.val;
    let rest = 0;
    if (sum >= 10) {
      sum -= 10;
      rest = 1;
    }
    currentList.val = sum;
    if (l1.next || l2.next || rest) {
      currentList.next = new ListNode(rest);
    }
    currentList = currentList.next;
    [l1, l2] = [l1.next, l2.next];
  }

  while (l1) {
    let sum = currentList.val + l1.val;
    let rest = 0;
    if (sum >= 10) {
      sum -= 10;
      rest = 1;
    }
    if (l1.next || rest) {
      currentList.next = new ListNode(rest);
    }
    currentList.val = sum;
    currentList = currentList.next;
    [l1] = [l1.next];
  }
  while (l2) {
    let sum = currentList.val + l2.val;
    let rest = 0;
    if (sum >= 10) {
      sum -= 10;
      rest = 1;
    }
    if (l2.next || rest) {
      currentList.next = new ListNode(rest);
    }
    currentList.val = sum;
    currentList = currentList.next;
    [l2] = [l2.next];
  }
  return resultList;
};

/* ============================================
  first try (runtime: 24.38%, memory: 19.71%)
============================================== */
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
