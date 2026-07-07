class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeIncludesIterative(root, target) {
  if (root === null) return false;

  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val === target) return true;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
}

// Time: O(n)
// Space: O(h)

function treeIncludesRecursive(root, target) {
  if (root === null) return false;

  if (root.val === target) return true;

  return (
    treeIncludesRecursive(root.left, target) ||
    treeIncludesRecursive(root.right, target)
  );
}
// Time: O(n)
// Space: O(h)
