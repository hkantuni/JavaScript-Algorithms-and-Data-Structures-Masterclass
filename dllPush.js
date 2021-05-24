///  Coding Exercise 26: DLL push ////    Implement the following on the DoublyLinkedList class ///////
///push////
// This function should accept a value add a node to the end of the DoublyLinkedList with the given value.
// It should return the DoublyLinkedList.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let doublyLinkedList = new DoublyLinkedList();
console.log(doublyLinkedList.push("5"));
