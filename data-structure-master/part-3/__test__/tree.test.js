const TreeNode = require('../src/tree');

describe('tree', function () {
  let rootNode;

  beforeEach(function () {
    rootNode = new TreeNode(null);
  });

  it('노드를 추가할 수 있어야 합니다', function () {
    rootNode.insertNode(5);
    expect(rootNode.children).toEqual([{ children: [], value: 5 }]);
    expect(rootNode.children[0].value).toEqual(5);
  });

  it('트리에 포함된 데이터를 확인할 수 있어야 합니다', function () {
    rootNode.insertNode(5);
    expect(rootNode.contains(5)).toEqual(true);
  });

  it('트리에 포함되지 않은 데이터를 확인할 수 있어야 합니다', function () {
    rootNode.insertNode(5);
    expect(rootNode.contains(6)).toEqual(false);
  });

  it('계층적으로(예. 자식의 자식) 노드를 추가할 수 있ㅇ야 합니다', function () {
    rootNode.insertNode(5);
    rootNode.insertNode(6);
    rootNode.children[0].insertNode(7);
    rootNode.children[0].insertNode(8);
    expect(rootNode.children[0].children.length).toEqual(2);
    expect(rootNode.children[0].contains(7)).toEqual(true);
  });

  it('트리에 포함된 데이터를 재귀적으로 찾을 수 있어야 합니다 ', function () {
    rootNode.insertNode(5);
    rootNode.insertNode(6);
    rootNode.children[0].insertNode(7);
    rootNode.children[0].insertNode(8);
    rootNode.children[0].children[1].insertNode(9);
    rootNode.children[0].children[1].insertNode(10);
    rootNode.children[0].children[1].insertNode(11);
    rootNode.children[1].insertNode(12);
    rootNode.children[1].children[0].insertNode(13);
    expect(rootNode.contains(8)).toEqual(true);
    expect(rootNode.contains(10)).toEqual(true);
    expect(rootNode.contains(11)).toEqual(true);
    expect(rootNode.contains(13)).toEqual(true);
    expect(rootNode.contains(14)).toEqual(false);
  });
});