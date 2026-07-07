class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeSumIterative(root) {
  if (root === null) return 0;

  let sum = 0;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    sum += current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
}
// Time: O(n)
// Space: O(h)

function treeSumRecursive(root) {
  if (root === null) return 0;

  return (
    root.val +
    treeSumRecursive(root.left) +
    treeSumRecursive(root.right)
  );
}
// Time: O(n)
// Space: O(h)
