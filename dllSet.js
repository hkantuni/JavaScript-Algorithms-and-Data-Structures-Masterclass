////////   Coding Exercise 29: DLL set   //////////

// Implement the following on the DoublyLinkedList.prototype - set
// This function should accept an index and a value and update the value
// of the node in the DoublyLinkedList at the index with the new value.
// It should return true if the node is updated successfully, or false if an
// invalid index is passed in.

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

  ///////   Implement set() solution ///////

  set(index, val) {
    if (!this.head) return false;
    if (index < 0 || index >= this.length) return false;
    if (index < this.length / 2) {
      let current = this.head;
      for (let i = 0; i < index + 1; i++) {
        if (i === index) {
          current.val = val;

          return true;
        }
        current = current.next;
      }
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > index - 1; i--) {
        if (i === index) {
          current.val = val;

          return true;
        }
        current = current.prev;
      }
    }
  }
}

let list = new DoublyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
// list.set(0, "10");
// list.set(1, "10");
// list.set(2, "10");
// list.set(3, "10");
// list.set(4, "10");
// console.log(list);
