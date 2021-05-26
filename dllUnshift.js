////     Coding Exercise 27: DLL unshift - Exercise ///////

// Implement the following on the DoublyLinkedList class - unshift.
// This function should accept a value and add a node to the beginning
// of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.next = null;
    this.prev = null;
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

  ///////   Implement unshift() solution ///////

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.unshift(200);
doublyLinkedList.unshift(100);
