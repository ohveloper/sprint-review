class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // this.value 보다 작으면 lefr, 크면 right
    if (this.value === value) return;
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTreeNode(value);
        return value;
      } else {
        this.left.insert(value);
      }
    }
    if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTreeNode(value);
        return value;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) return true;
    if (value < this.value && this.left !== null) {
      if (this.left.contains(value)) {
        return true;
      }
    }

    if (value > this.value && this.right !== null) {
      if (this.right.contains(value)) {
        return true;
      }
    }
    return false;
  }

  inorder(callback) {
    // 중위순회
    // left check 있으면 콜배함수와함께 재귀
    if (this.left) {
      this.left.inorder(callback);
    }
    // 없으면 현재 벨류 콜백함수 받아서 작동
    // 나가면서 콜백함수 작동 하고 왼쪽에서 나왔으니까 오른쪽으로 간다
    callback(this.value);
    // 왼쪽으로 쭉 들어갔다가 왼쪽확인 루트확인 다음은 오른쪽확인
    if (this.right) {
      this.right.inorder(callback);
    }
  }
}

module.exports = BinarySearchTreeNode;
