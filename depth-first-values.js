class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// way 1: Iterative
function depthFirstValuesIterative(root) {
  if (root === null) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
}
// Time complexity: O(n)
// Space complexity: O(log n) for balance tree or O(n) for skewed tree

// way 2: Recursive
function depthFirstValuesRecursive(root) {
  if (root === null) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);

  return [root.val, ...leftValues, ...rightValues];
}
// Time complexity: O(log n) for balance tree or O(n) for skewed tree
// Space complexity: O(log n)
