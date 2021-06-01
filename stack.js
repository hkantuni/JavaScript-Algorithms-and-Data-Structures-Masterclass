///////   Stacks. Pushing and poping stacks , like shift and unshift from array
// remove and add from begining because in singly linked list pushing and adding to the back of tha list has big - bigO
// because we have to iterate from front to end to be able to remove and add to end.

////////  LIFO - last In - First Out

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.next = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return null;
    let toBeRemoved = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return toBeRemoved.val;
  }
}

let list = new Stack();

list.push("A");
list.push("B");
list.pop();
console.log(list);
