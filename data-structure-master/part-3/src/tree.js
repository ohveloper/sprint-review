class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) {
    let node = new TreeNode(value);
    this.children.push(node);
  }

  contains(value) {
    // 1) this.value === value return true 로 탈출
    if (this.value === value) return true;
    // 2) this.children 이 여러개일때
    if (this.children.length) {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].value === value) {
          return true;
        }
        // 자식요소의 i번째 벨류를 확인과 동시에 자식요소가 안에 더있는지 확인
        // 있으면 자식요소의 자식요소를 재귀
        if (this.children[i].children.length) {
          if (this.children[i].contains(value)) {
            return true;
          }
        }
      }
    }
    // 2-2) 반복문으로 검사
    // 2-3) this.children.children이 있을때 재귀로 검사
    return false;
  }
}

module.exports = TreeNode;
