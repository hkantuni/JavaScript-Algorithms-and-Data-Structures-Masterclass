/////////   Coding Exercise 30: DLL- remove ////////////

// Implement the following on the DoublyLinkedList class - remove
//This function should remove a node at a specified index in a DoublyLinkedList.
// It should return the removed node. if the index is valid, or undefined if the index is invalid.

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

  /// Inplementation of remove //////////////

  remove(index) {
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      let toBeRemoved = this.head;
      this.head = toBeRemoved.next;
      this.head.prev = null;
      toBeRemoved.next = null;
      this.length--;
      return toBeRemoved;
    }
    if (index === this.length - 1) {
      let toBeRemoved = this.tail;
      this.tail = toBeRemoved.prev;
      this.tail.next = null;
      toBeRemoved.prev = null;
      this.length--;
      return toBeRemoved;
    }
    if (index !== 0 || index < this.length / 2) {
      let count = 0;
      let toBeRemoved = this.head;
      while (index !== count) {
        toBeRemoved = toBeRemoved.next;
        count++;
      }
      toBeRemoved.prev.next = toBeRemoved.next;
      toBeRemoved.next.prev = toBeRemoved.prev;
      toBeRemoved.next = null;
      toBeRemoved.prev = null;
      this.length--;
      return toBeRemoved;
    } else {
      let count = this.length - 1;
      let toBeRemoved = this.tail;
      while (index !== count) {
        toBeRemoved = toBeRemoved.prev;
        count--;
      }
      toBeRemoved.prev.next = toBeRemoved.next;
      toBeRemoved.next.prev = toBeRemoved.prev;
      toBeRemoved.next = null;
      toBeRemoved.prev = null;
      this.length--;
      return toBeRemoved;
    }
  }
}

let list = new DoublyLinkedList();
list.push(5).push(10).push(15).push(20);
console.log(list.remove(2).val);
console.log(list.remove(100));
console.log(list.length);
console.log(list.head.val);
console.log(list.head.next.val);
console.log(list.head.next.next.val);
