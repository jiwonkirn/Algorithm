// mine
// dictionary를 사용
var copyRandomList = function(head) {
  const obj = {};
  function helper(node) {
    if (!node) return null;
    const cur = new Node(node.val, null, null);
    obj[node.val] = cur;
    cur.next = helper(node.next);
    cur.random = node.random ? obj[node.random.val] : null;
    return cur;
  }
  const res = helper(head);
  return res;
};

// other's
// map을 사용
var copyRandomList = function(head) {
  let map = new Map();
  let dump = new Node(0, head);
  let curr = dump;

  while (head !== null) {
    if (!map.has(head)) {
      map.set(head, new Node(head.val));
    }

    let node = map.get(head);
    curr.next = node;

    if (head.random) {
      if (!map.has(head.random))
        map.set(head.random, new Node(head.random.val));
      curr.next.random = map.get(head.random);
    }

    head = head.next;
    curr = curr.next;
  }

  return dump.next;
};
