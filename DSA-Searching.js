// linear search
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

// binary search
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  // if start is greater than end
  if (start > end) {
    return -1;
  }

  // pick middle index
  const index = Math.floor((start + end) / 2);
  // check the item at the index in array
  const item = array[index];

  console.log(start, end);
  // if item is value, found it!
  if (item == value) {
    return index;
  }
  // if item less than value, start again with start at index
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  // if item is greater than value, start again with end at index
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// Depth-first search (DFS)
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  // for the purposes of this example the algorithm will simply traverse the nodes adding them to a values array:
  dfs(values = []) {
    // if there is a left branch
    if (this.left) {
      // recursively search the nodes there
      values = this.left.dfs(values);
    }
    // add value to the array
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  // Breadth-first search (BFS)
  bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

      if (node.left) {
        queue.enqueue(node.left); //add left child to the queue
      }

      if (node.right) {
        queue.enqueue(node.right); // add right child to the queue
      }
    }

    return values;
  }
}
