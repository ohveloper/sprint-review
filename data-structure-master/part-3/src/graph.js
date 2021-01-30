/*
 *  - Undirected Graph
 *  - Adjacency list implementation
 */
class Graph {
  constructor() {
    /*
     *  ex)
     *    nodes = {
     *      0: [ 1, 2 ],
     *      1: [ 0 ],
     *      2: [ 0 ]
     *    }
     */
    this.nodes = {};
  }

  addNode(node) {
    // this.nodes[node] 가 이미 있으면 그대로 두고 없으면 [] 을 넣어준다
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {
    return !!this.nodes[node];
  }

  removeNode(node) {
    let del = this.nodes[node];
    if (!!del) {
      delete this.nodes[node];
      // 간선제거는 따로 함수를 만들어서 삭제
      // for (let i in this.nodes) {
      //   for (let j = 0; j < i.length; j++) {
      //     if (i[j] === node) {
      //       i.splice(j, 1);
      //     }
      //   }
      // }
      return del;
    }
  }

  hasEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode)) {
        return true;
      }
    }
    return false;
  }

  addEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      this.nodes[fromNode].push(toNode);
      this.nodes[toNode].push(fromNode);
    }
    return;
  }

  removeEdge(fromNode, toNode) {
    // 첫번째 코드
    // if (this.hasEdge(fromNode, toNode)) {
    //   let _fromNode = this.nodes[fromNode];
    //   for (let i = 0; i < _fromNode.length; i++) {
    //     if (_fromNode[i] === toNode) {
    //       _fromNode.splice(i, 1);
    //     }
    //   }
    //   let _toNode = this.nodes[toNode];
    //   for (let i = 0; i < _toNode.length; i++) {
    //     if (_toNode[i] === fromNode) {
    //       _toNode.splice(i, 1);
    //     }
    //   }
    // }
    // return;

    // 레퍼런스 참조 리펙토링
    // 만약 fromNode , toNode 둘중 하나라도 노드로 가지고 있지 않다면
    // 당연히 연결되어 있지도 않을테니 그냥 리턴한다
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }
    // hasEdge 함수를 만들어두었기 때문에 이용해서 연결이 되어있는지부터 확인
    // 트루면 해당 인덱스를 확인한후에 잘라낸다
    if (this.hasEdge(fromNode, toNode)) {
      const idx1 = this.nodes[fromNode].indexOf(toNode);
      this.nodes[fromNode].splice(idx1, 1);

      const idx2 = this.nodes[toNode].indexOf(fromNode);
      this.nodes[toNode].splice(idx2, 1);
    }
  }
}

module.exports = Graph;
