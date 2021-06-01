// Queues. Pushing and poping queue , like shift and unshift from array
// adding to the back and removing from the begining because in singly linked list - bigO

////////  FIFO - First In - First Out

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    var toBeRemoved = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return toBeRemoved.val;
  }

  ///////////   helper function to print array with nodes ///////
  // print() {
  //   let arr = [];
  //   let current = this.first;
  //   while (current) {
  //     arr.push(current.val);
  //     current = current.next;
  //   }
  //   console.log(arr);
  // }
}

let list = new Queue();
list.enqueue("A");
// console.log(list);
list.enqueue("B");
// console.log(list);
list.enqueue("C");
list.enqueue("D");
// list.print();
list.dequeue();
console.log(list);
// list.print();
