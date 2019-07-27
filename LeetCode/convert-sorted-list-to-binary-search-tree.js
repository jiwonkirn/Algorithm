// mine
// 배열로 전환한 뒤 트리로 전환
var sortedListToBST = function(head) {
  const arr = [];
  let node = head;
  while (node) {
      arr.push(node.val);
      node = node.next;
  }
  function helper(start, end) {
      if (start > end) return null;
      const mid = Math.ceil((start + end) / 2);
      const node = new TreeNode(arr[mid]);
      node.left = helper(start, mid - 1);
      node.right = helper(mid + 1, end);
      return node;
  }
  return helper(0, arr.length - 1);
};

// other's
// 가운데를 찾아 나간다.
// 012 124 236 348 ...
// 348이라는 가정 하에 가운데 root는 4고 
// left를 만들기 위해 3노드의 next를 없앤다.
// 0 ~ 3, 5 ~ 8을 각각의 left, right로 검색하도록 하고
// 계속 재귀적 호출
var sortedListToBST = function(head) {
  return buildTree(head)
}

const buildTree = (node) => {
  if (!node) return null
  let p1 = node
  let p2 = node
  let prev = node
  
  while (p2 && p2.next) {
    prev = p1
    p1 = p1.next
    p2 = p2.next.next
  }
  
  prev.next = null
  const current = new TreeNode(p1.val)
  current.left = p1 === node ? null : buildTree(node)
  current.right = buildTree(p1.next)

  return current
}