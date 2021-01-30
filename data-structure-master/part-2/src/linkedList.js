class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;
    return node;
  }

  remove(value) {
    // 4가지 경우 1)비어있을때, 2)헤드일때, 3)중간에 있을때, 4)꼬리일때?
    let idx = this.indexOf(value);
    if (idx === -1) {
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
      this._size--;
      return value;
    }
    let beforeNode = this.getNodeAt(idx - 1);
    let delNode = beforeNode.next;
    beforeNode.next = delNode.next;
    this._size--;
    return delNode;
  }

  getNodeAt(index) {
    let count = -1;
    let currNode = this.head;
    while (currNode) {
      count++;
      if (count === index) {
        return currNode;
      }
      currNode = currNode.next;
    }
    return undefined;
  }

  contains(value) {
    // if (this.indexOf(value) !== -1) {
    //   return true;
    // }
    return this.indexOf(value) !== -1;
  }

  indexOf(value) {
    let idx = 0;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return idx;
      }
      idx++;
      currNode = currNode.next;
    }
    return -1;
  }

  size() {
    return this._size;
  }
}

// let a = new LinkedList();
// a.addToTail("first");
// a.addToTail("second");
// a.addToTail("third");
// a

module.exports = LinkedList;
