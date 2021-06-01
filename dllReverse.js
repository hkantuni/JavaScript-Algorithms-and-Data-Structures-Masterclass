////////   Coding Exercise 34: DLL reverse   //////////

// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
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
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }

  // Implementation of reverse() /////

  reverse() {
    //////////////////////////////////  swaping values
    if (!this.head) return undefined;
    let left = this.head;
    let right = this.tail;

    let count1 = 0;
    let count2 = this.length;

    while (count1 !== count2) {
      if (count2 - count1 === 1) {
        return this;
      }
      let temp = left.val;
      left.val = right.val;
      right.val = temp;
      left = left.next;
      right = right.prev;
      count1++;
      count2--;
    }
    return this;
    //    or ////////////////////////////////////////   replacing links
    if (!this.head) return undefined;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let count = 0;
    let prevNode = null;
    let nextNode;

    while (count < this.length) {
      nextNode = currentNode.next;
      currentNode.prev = nextNode;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      count++;
    }
    return this;

    ///////////////////////////////////
  }

  ////////// for easy check of the DLL by printing values  /////////////
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();
list.push("100");
list.push("200");
list.push("300");
list.push("400");
list.push("500");
list.push("600");
list.push("700");
list.push("800");
list.print();
list.reverse();
list.print();
