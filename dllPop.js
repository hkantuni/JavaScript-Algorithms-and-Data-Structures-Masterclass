/////   Coding Exercise 31: DLL pop()  //////

// Implement the following on the DoublyLinkedList class - pop()
// This function should remove a node at the end of the DoublyLinkedList.
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
    this.prev = null;
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
  pop() {
    if (!this.head) return undefined;
    let toBeRemoved = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = toBeRemoved.prev;
      this.tail.next = null;
      toBeRemoved.prev = null;
    }
    this.length--;
    return toBeRemoved;
  }
}

let list = new DoublyLinkedList();
list.push("100");
list.push("200");
list.push("300");
// console.log(list);
// list.push("200");
// console.log(list);
console.log(list.pop());
console.log(list);
