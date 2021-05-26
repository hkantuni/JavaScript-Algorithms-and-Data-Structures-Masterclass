///////   Coding Exercise 32: DLL get ////////

// Implement the following on the DoublyLinkedList.prototype  - get()  //////
// This internal/helper function should find a node at a specified index in a DoublyLinkedList.
// It should return the found node.

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
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  ///////   Implement get() solution ///////

  get(index) {
    if (!this.head) return null;
    if (index < 0 || index >= this.length) return null;
    if (index < this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }
}

let list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
console.log(list.get(2).val);
