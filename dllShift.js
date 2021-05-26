/////////   Coding Exercise 28: DLL shift  //////////////

// Implement the following on the DoublyLinkedList class - shift.
// This function should remove a node at the beginning of the DoublyLinkedList.
// It should return the node removed.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  ///////   Implement shift() solution ///////

  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }
}

let list = new DoublyLinkedList();
console.log(list);
list.push(300);
list.push(500);
console.log(list);
list.shift();
console.log(list);
