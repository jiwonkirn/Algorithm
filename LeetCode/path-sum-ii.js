// mine
// 모든 경우의 수를 leaf가 없을 때 까지 더한 뒤
// 더해진 값이 맞는지 확인하는 방법
// 시간 복잡도는 어느정도 나오지만
// 공간 복잡도는 arr를 많이 만들어서 그런지 좋지 않다.
// 다른 사람들 풀이도 비슷
var pathSum = function(root, sum) {
  const res = [];
  function helper(node, arr, acc) {
      if (!node.left && !node.right) {
          if (acc === sum) res.push(arr);
      }
      if (node.left) {
          helper(node.left, [...arr, node.left.val], acc + node.left.val);
      }
      if (node.right) {
          helper(node.right, [...arr, node.right.val], acc + node.right.val);
      }
  }
  if (root) {
      helper(root, [root.val], root.val);
  }
  return res;
};