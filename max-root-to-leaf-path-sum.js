class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxRootToLeafPathSumIterative(root) {
  if (root === null) return -Infinity;

  let maxSum = -Infinity;
  const stack = [[root, root.val]];

  while (stack.length > 0) {
    const [current, sum] = stack.pop();

    // Leaf node
    if (!current.left && !current.right) {
      maxSum = Math.max(maxSum, sum);
    }

    if (current.right) {
      stack.push([current.right, sum + current.right.val]);
    }

    if (current.left) {
      stack.push([current.left, sum + current.left.val]);
    }
  }

  return maxSum;
}
// Time: O(n)
// Space: O(h)

function maxRootToLeafPathSumRecursive(root) {
  if (root === null) return -Infinity;

  // Leaf node
  if (!root.left && !root.right) {
    return root.val;
  }

  return (
    root.val +
    Math.max(
      maxRootToLeafPathSumRecursive(root.left),
      maxRootToLeafPathSumRecursive(root.right)
    )
  );
}
// Time: O(n)
// Space: O(h)
