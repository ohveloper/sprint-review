class Stack {
  constructor() {
    this.storage = {};
    this.top = -1;
  }

  size() {
    let size = this.top + 1;
    return size;
  }

  push(element) {
    this.top++;
    this.storage[this.top] = element;
    return element;
  }

  pop() {
    if (this.top < 0) {
      return;
    }
    let del = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return del;
  }
}

module.exports = Stack;
