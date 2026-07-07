class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeMinValueIterative(root) {
  if (root === null) return Infinity;

  let min = Infinity;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    min = Math.min(min, current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return min;
}
// Time: O(n)
// Space: O(h)

function treeMinValueRecursive(root) {
  if (root === null) return Infinity;

  return Math.min(
    root.val,
    treeMinValueRecursive(root.left),
    treeMinValueRecursive(root.right)
  );
}
// Time: O(n)
// Space: O(h)
