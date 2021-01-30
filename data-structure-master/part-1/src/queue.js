class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.size() === 0) {
      return 0;
    }
    let dequeue = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeue;
  }
}

module.exports = Queue;
