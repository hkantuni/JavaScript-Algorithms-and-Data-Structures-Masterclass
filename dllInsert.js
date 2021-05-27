///////////   Coding Exercise 33: Doubly Linked Lists insert() and remove() ////////

// Insert.  This internal/helper function should insert a node at a specified index
//          in a DoublyLinkedList. It should return true if the index is valid, and
//          false if the index is invalid (less than 0 or greater than the length of
//          the list).

// Remove. This function should remove a node at a specified index in a DoublyLinkedList.
//         It should return the removed node. if the index is valid, or undefined if the
//         index is invalid.

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

  //// Implementation of insert(index, val) //////////

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    let current = this.head;
    let count = 0;
    let newNode = new Node(val);
    if (index === 0) {
      newNode.next = current;
      current.prev = newNode;
      this.head = newNode;
    } else if (index === this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      while (count !== index) {
        current = current.next;
        count++;
      }
      current.prev.next = newNode;
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev = newNode;
    }
    this.length++;
    return this;
  }

  //// Implementation of remove(index) //////////

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    let toBeRemoved;
    if (index === 0) {
      // remove first node
      toBeRemoved = this.head;
      this.head = toBeRemoved.next;
      this.head.prev = null;
      toBeRemoved.next = null;
    } else if (index === this.length - 1) {
      // remove last node
      toBeRemoved = this.tail;
      this.tail = toBeRemoved.prev;
      this.tail.next = null;
      toBeRemoved.prev = null;
    } else {
      if (index < this.length / 2) {
        // loop from start
        let count = 0;
        let current = this.head;
        while (count !== index) {
          current = current.next;
          count++;
        }
        // console.log("from front");
        //find and remove node
        toBeRemoved = current;
        toBeRemoved.prev.next = toBeRemoved.next;
        toBeRemoved.next.prev = toBeRemoved.prev;
        toBeRemoved.prev = null;
        toBeRemoved.next = null;
      } else {
        // loop from end
        let count = this.length - 1;
        let current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--;
        }
        // console.log("from end");
        //find and remove node
        toBeRemoved = current;
        toBeRemoved.prev.next = toBeRemoved.next;
        toBeRemoved.next.prev = toBeRemoved.prev;
        toBeRemoved.prev = null;
        toBeRemoved.next = null;
      }
    }
    this.length--;
    console.log(toBeRemoved);
    return toBeRemoved;
  }

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

// let list = new DoublyLinkedList();
// list.push("100");
// list.push("200");
// list.push("300");
// list.push("400");
// list.push("500");
// list.push("600");
// list.push("700");
// list.push("800");
// list.print();
// list.insert(1, "aaa");
// list.remove(6);
// console.log(list);
// list.print();
