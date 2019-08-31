// mine
// set 함수를 이용해서 중복이 확인되는 첫 노드를 return
// 시간 O(N) / 공간 O(N)
var getIntersectionNode = function(headA, headB) {
    const s = new Set();
    let cur = headA;
    while(cur) {
        s.add(cur);
        cur = cur.next;
    }
    cur = headB;
    while (cur && !s.has(cur)) {
        cur = cur.next;
    }
    return cur;
};

// other's
// 두 리스트의 갯수가 5, 8이라고 하면
// 5 + 8 , 8 + 5
// 이런식으로 순환해서 검사하다보면 같은 지점에서 겹친다.
// 시간 O(N) / 공간 O(1)
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let currA = headA;
  let currB = headB;
  let i = 0;
  while (currA !== currB) {
      currA = currA === null ? headB : currA.next;
      currB = currB === null ? headA : currB.next;
  }
  return currA;
};