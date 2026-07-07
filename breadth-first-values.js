function breadthFirstValues(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    result.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return result;
}
// Time complexity: O(n)
// Space complexity: O(w) - maximum width
