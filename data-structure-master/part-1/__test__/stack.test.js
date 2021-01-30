const Stack = require('../src/stack');

describe(`stack`, function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  it('빈 스택의 크기는 0, top은 -1 입니다', function () {
    expect(stack.size()).toEqual(0);
    expect(stack.top).toEqual(-1);
  });

  it('빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다', function () {
    expect(function () {
      stack.pop();
    }).not.toThrow();
  });

  it('pop 연산은 가장 최근에 추가된 요소를 제거(LIFO)해야 합니다', function () {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.pop()).toEqual('c');
  });

  it('top은 가장 최근의 요소의 위치를 가리켜야 합니다', function () {
    stack.push('a');
    stack.push('b');
    stack.pop();
    expect(stack.size()).toEqual(1);
    expect(stack.top).toEqual(0);
    expect(stack.storage).toEqual({ 0: 'a' });
  });

  it('top은 가장 최근의 요소의 위치를 가리켜야 합니다', function () {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.size()).toEqual(3);
    expect(stack.top).toEqual(2);
    expect(stack.storage).toEqual({ 0: 'a', 1: 'b', 2: 'c' });
  });

  it('스택의 크기 이상의 pop 연산을 실행해도 문제없이 빈 스택이 되어야 합니다', function () {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.size()).toEqual(0);
  });

  it('push와 pop은 후입선출(LIFO)을 구현해야 합니다', function () {
    stack.push('a');
    expect(stack.pop()).toEqual('a');
    stack.push('b');
    expect(stack.pop()).toEqual('b');
  });

  it('push와 pop은 후입선출(LIFO)을 구현해야 합니다', function () {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.storage).toEqual({ 0: 'a', 1: 'b' });
    expect(stack.pop()).toEqual('b');
  });
});