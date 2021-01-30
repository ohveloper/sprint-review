const LinkedList = require('../src/linkedList');

describe('linkedList', function () {
  let linkedList;

  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it('연결 리스트에 끝에 노드를 추가할 수 있어야 합니다', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    const secondNode = linkedList.head.next;
    expect(linkedList.head.value).toEqual(4);
    expect(secondNode && secondNode.value).toEqual(5);
  });

  it('빈 연결 리스트에 remove 연산을 적용해도 에러가 발생하지 않아야 합니다', function () {
    expect(function () {
      linkedList.remove(2);
    }).not.toThrow();
    expect(linkedList._size).toEqual(0);
  });

  it('원하는 노드를 찾은 경우, 해당 노드의 위치를 리턴해야 합니다', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    expect(linkedList.indexOf(6)).toEqual(2);
    expect(linkedList.indexOf(7)).toEqual(3);
  });

  it('원하는 노드를 찾지 못한 경우, -1을 리턴해야 합니다', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.indexOf(4)).toEqual(0);
    expect(linkedList.indexOf(7)).toEqual(-1);
    linkedList.remove(4);
    expect(linkedList.indexOf(4)).toEqual(-1);
  });

  it('원하는 위치에 데이터가 존재하지 않는 경우, undefined를 리턴해야 합니다', function () {
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(30);
    expect(linkedList.getNodeAt(10)).toEqual(undefined);
  });

  it('노드를 삭제할 수 있어야 합니다', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    expect(linkedList.head.value).toEqual(4);
    linkedList.remove(4);
    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next && linkedList.head.next.value).toEqual(6);
    linkedList.remove(6);
    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next && linkedList.head.next.value).toEqual(7);
  });

  it('원하는 데이터를 저장하고 있는 노드의 위치를 리턴해야 합니다', function () {
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(30);
    expect(linkedList.getNodeAt(1).value).toEqual(20);
  });

  it('저장한 노드의 데이터를 가지고 있어야 합니다', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(8);
    linkedList.addToTail(12);
    expect(linkedList.contains(4)).toEqual(true);
    expect(linkedList.contains(8)).toEqual(true);
    expect(linkedList.contains(13)).toEqual(false);
  });

  it('삭제한 노드의 데이터는 가지고 있지 않아야 합니다', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.remove(5);
    expect(linkedList.contains(5)).toEqual(false);
  });

  it('저장되어 있는 노드의 개수를 리턴해야 합니다', function () {
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    linkedList.remove(6);
    linkedList.addToTail(8);
    expect(linkedList.size()).toEqual(3);
  });
});