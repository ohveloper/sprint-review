const Queue = require('../src/queue');

describe(`queue`, function () {
  let queue;

  beforeEach(function () {
    queue = new Queue();
  });

  it('빈 큐의 크기, front, rear는 모두 0 입니다', function () {
    expect(queue.size()).toEqual(0);
    expect(queue.front).toEqual(0);
    expect(queue.rear).toEqual(0);
  });

  it('빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다', function () {
    expect(function () {
      queue.dequeue();
    }).not.toThrow();
  });

  it('dequeue는 가장 먼저 저장된 요소를 제거(FIFO)해야 합니다', function () {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toEqual('a');
  });

  it('front는 가장 오랜된 요소의 위치, rear는 다음에 추가될 요소의 위치를 가리켜야 합니다', function () {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.size()).toEqual(2);
    expect(queue.front).toEqual(0);
    expect(queue.rear).toEqual(2);
    expect(queue.storage).toEqual({ 0: 'a', 1: 'b' });
  });

  it('front는 가장 오랜된 요소의 위치, rear는 다음에 추가될 요소의 위치를 가리켜야 합니다', function () {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    expect(queue.size()).toEqual(2);
    expect(queue.front).toEqual(1);
    expect(queue.rear).toEqual(3);
    expect(queue.storage).toEqual({ 1: 'b', 2: 'c' });
  });

  it('큐의 크기 이상의 dequeue 연산을 실행해도 문제없이 빈 큐가 되어야 합니다', function () {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toEqual(0);
    expect(queue.front).toEqual(2);
    expect(queue.rear).toEqual(2);
  });

  it('enqueue와 dequeue는 선입선출(FIFO)을 구현해야 합니다', function () {
    queue.enqueue('a');
    expect(queue.dequeue()).toEqual('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toEqual('b');
  });

  it('enqueue와 dequeue는 선입선출(FIFO)을 구현해야 합니다', function () {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.storage).toEqual({ 1: 'b', 2: 'c' });
    expect(queue.dequeue()).toEqual('b');
  });
});