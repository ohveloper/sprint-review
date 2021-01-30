const BinarySearchTreeNode = require('../src/binarySearchTree');

describe('binarySearchTree', function () {
  let rootNode;

  beforeEach(function () {
    rootNode = new BinarySearchTreeNode(10);
  });

  it('루트 노드는 5로 초기화 됩니다', function () {
    expect(rootNode.value).toEqual(10);
  });

  it('should insert values at the correct location in the tree', function () {
    rootNode.insert(7);
    rootNode.insert(8);
    rootNode.insert(12);
    rootNode.insert(11);
    expect(rootNode.left.right.value).toEqual(8);
    expect(rootNode.right.left.value).toEqual(11);
  });

  it('트리에 포함된 데이터를 확인할 수 있어야 합니다', function () {
    rootNode.insert(7);
    rootNode.insert(8);
    rootNode.insert(12);
    expect(rootNode.contains(12)).toEqual(true);
  });

  it('트리에 포함되지 않은 데이터를 확인할 수 있어야 합니다', function () {
    rootNode.insert(7);
    rootNode.insert(8);
    rootNode.insert(12);
    expect(rootNode.contains(13)).toEqual(false);
  });

  it('중위 순회(inorder traversal)를 통해 트리의 모든 요소에 callback을 적용(apply)할 수 있어야 합니다', function () {
    let arr = [];
    let cb = function (value) {
      arr.push(value);
    };
    rootNode.insert(8);
    rootNode.insert(3);
    rootNode.insert(7);
    rootNode.insert(5);
    rootNode.insert(15);
    rootNode.insert(16);
    rootNode.insert(11);
    rootNode.insert(14);
    rootNode.inorder(cb);
    expect(arr).toEqual([3, 5, 7, 8, 10, 11, 14, 15, 16]);
  });

  it('이진 트리에는 중복된 요소가 없어야 합니다', function () {
    let arr = [];
    let cb = function (value) {
      arr.push(value);
    };
    rootNode.insert(15);
    rootNode.insert(6);
    rootNode.insert(6);
    rootNode.insert(7);
    rootNode.insert(15);
    rootNode.insert(15);
    rootNode.inorder(cb);
    expect(arr).toEqual([6, 7, 10, 15]);
  });

  it('음수도 트리에 저장할 수 있어야 합니다', function () {
    let arr = [];
    let cb = function (value) {
      arr.push(value);
    };
    rootNode.insert(15);
    rootNode.insert(-4);
    rootNode.insert(-2);
    rootNode.insert(-3);
    rootNode.insert(7);
    rootNode.inorder(cb);
    expect(arr).toEqual([-4, -3, -2, 7, 10, 15]);
  });
});