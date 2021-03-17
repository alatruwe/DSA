// generic node class
/* is a private class that should not be accessible by anyone else other than the linked list class. */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    // start of the list
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    // check if list is empty
    if (this.head === null) {
      // if so, use insertFirst
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      // go through the end of the list
      // look for null that is the end
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // and when tempNode == null
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
  // prints the list items
  printList() {
    console.log("New List:");
    let tempNode = this.head;
    // loop through nodes
    while (tempNode.next !== null) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
    console.log(tempNode.value);
  }
  // inserts a new node before a given node containing a key.
  insertBefore(item, key) {
    // Start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;
    // create a node
    let node = new _Node(item);

    // If the list is empty
    if (!this.head) {
      this.insertFirst(item);
    }
    // Check for the key
    while (currNode.value !== key) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    // point previous node to new node
    previousNode.next = node;
    // point new node to current node
    node.next = currNode;
  }

  // inserts a new node after a node containing the key.
  insertAfter(item, key) {
    let currNode = this.head;
    let aheadNode = currNode.next;
    let node = new _Node(item);

    // if list empty
    if (!this.head) {
      this.insertFirst(item);
    }
    // Check for the key
    while (currNode.value !== key) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
        aheadNode = currNode.next;
      }
    }

    // found it
    // point current node to new node
    currNode.next = node;
    // point new node to ahead node
    node.next = aheadNode;
  }

  // inserts an item at a specific position in the linked list.
  insertAt(item, index) {
    let currNode = this.head;
    let previousNode = this.head;
    let node = new _Node(item);
    let i = 0;

    if (!this.head) {
      return false;
    }
    while (i < index) {
      i++;
      previousNode = currNode;
      currNode = currNode.next;
    }

    // found it
    node.next = currNode;
    previousNode.next = node;
  }
}

main = () => {
  // creating an object for the
  // Linkedlist class
  let SSL = new LinkedList();
  // add to the list
  SSL.insertFirst("Apollo");
  SSL.insertLast("Boomer");
  SSL.insertLast("Helo");
  SSL.insertLast("Husker");
  SSL.insertLast("Starbuck");

  // Add Tauhida to the list.
  SSL.insertLast("Tauhida");

  // Remove Husker from the list.
  SSL.remove("Husker");

  // Add Athena before Boomer using your insertBefore() function.
  SSL.insertBefore("Athena", "Boomer");

  // Add Hotdog after Helo using the insertAfter() method.
  SSL.insertAfter("Hotdog", "Helo");

  // insert Kat in the 3rd position of the list.
  SSL.insertAt("Kat", 3);

  // Remove Tauhida from the list.
  SSL.remove("Tauhida");

  return SSL;
};

main();
